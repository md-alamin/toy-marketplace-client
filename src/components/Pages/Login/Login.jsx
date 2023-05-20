import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import GenerateTitle from '../../utils/GenerateTitle';
import Loader from '../../Shared/Loader';
import Swal from 'sweetalert2';

const Login = () => {
	GenerateTitle('Marvel Toys | Login');

	const [loader, setLoader] = useState(false);
	const { signIn, handleGoogleSignIn } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';
	console.log(from);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		setLoader(true);
		signIn(data?.email, data?.password)
			.then((result) => {
				const loggedUser = result.user;
				navigate(from, { replace: true });
				setLoader(false);
			})
			.catch((error) => {
				console.log(error);
				setLoader(false);
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: error,
					footer: 'Please enter correct username/password',
				});
			});
	};

	const googleLogin = () => {
		handleGoogleSignIn()
			.then((result) => {
				const user = result.user;
				navigate(from, { replace: true });
				setLoader(false);
			})
			.catch((error) => console.log(error));
	};

	if (loader) {
		return <Loader></Loader>;
	}

	return (
		<div className="bg-base-100">
			<form className="w-1/3 mx-auto py-10" onSubmit={handleSubmit(onSubmit)}>
				<h1 className="text-5xl text-center font-bold">Please Login</h1>
				<div className="divider mb-10"></div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Email
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						placeholder="Enter your email"
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Invalid email address',
							},
						})}
					/>
					<span className="text-red-600">{errors.email?.message}</span>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Password
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="password"
						placeholder="Enter your password"
						{...register('password', {
							required: 'Password is required',
							pattern: {
								value: /^(?=.*[A-Za-z0-9]).{6,}$/,
								message: 'Password must be at least 6 letters or numbers',
							},
						})}
					/>

					<span className="text-red-600">{errors.password?.message}</span>
				</div>

				<div className="text-center">
					<input className="btn btn-wide mt-2" type="submit" value="Login" />
				</div>

				<div className="text-center py-10">
					<p>
						Or Sign Up using
						<button
							onClick={googleLogin}
							className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center gap-2 mx-auto mt-2"
							type="button"
						>
							Google <FaGoogle />
						</button>
					</p>
				</div>
				<div className="text-center">
					New to the website? Please{' '}
					<Link
						to="/register"
						className="cursor-pointer text-blue-700 link-hover"
					>
						Register
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Login;
