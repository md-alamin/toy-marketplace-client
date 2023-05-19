import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Loader from '../../Shared/Loader';
import GenerateTitle from '../../utils/GenerateTitle';
import Swal from 'sweetalert2';

const Register = () => {
	const [loader, setLoader] = useState(false);
	const { createUser, updateInfo, logOut } = useContext(AuthContext);
	const navigate = useNavigate();

	GenerateTitle('Marvel Toys | Register');

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		setLoader(true);
		createUser(data?.email, data?.password)
			.then((result) => {
				const createdUser = result.user;
				console.log(createdUser);
				updateInfo(createdUser, data?.name, data?.photo)
					.then(() => {})
					.catch((error) => console.log(error));
				logOut()
					.then()
					.catch((error) => console.log(error));
				navigate('/login');
				setLoader(false);
				Swal.fire({
					icon: 'success',
					title: 'Successfully Registered',
					showConfirmButton: false,
					timer: 2000,
				});
			})
			.catch((error) => {
				setLoader(false);
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: error,
					footer: 'Please use different email address',
				});
			});
	};

	if (loader) {
		return <Loader></Loader>;
	}

	return (
		<div className="bg-base-100">
			<form className="w-1/3 mx-auto py-10" onSubmit={handleSubmit(onSubmit)}>
				<h1 className="text-5xl text-center font-bold">Please Register</h1>
				<div className="divider mb-10"></div>

				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Name
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						placeholder="Enter your name"
						{...register('name')}
					/>
				</div>

				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Email <small className="text-red-600">*required</small>
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
						Password <small className="text-red-600">*required</small>
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
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Photo URL
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						placeholder="Enter your photo URL"
						{...register('photo')}
					/>
				</div>

				<div className="text-center">
					<input className="btn btn-wide mt-2" type="submit" value="Register" />
				</div>

				<div className="flex items-center justify-center gap-4 py-10">
					<p>
						Or Sign Up using{' '}
						<span className="cursor-pointer text-blue-700 link-hover">
							Google
						</span>
					</p>
					<FaGoogle className="cursor-pointer text-blue-700" />
				</div>
				<div className="text-center">
					Already subscribed? Please{' '}
					<Link to="/login" className="cursor-pointer text-blue-700 link-hover">
						Login
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Register;
