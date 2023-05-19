import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import GenerateTitle from '../../utils/GenerateTitle';
import Lottie from 'react-lottie';
import errorGIF from '../../../assets/error-404.json';

const ErrorPage = () => {
	GenerateTitle('Marvel Toys | Error');
	const { error } = useRouteError();

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: errorGIF,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};
	return (
		<div className="flex items-center h-screen p-16 bg-base-200">
			<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
				<div className="max-w-md text-center">
					<Lottie options={defaultOptions} height={400} width={400} />
					<p className="text-2xl font-semibold md:text-3xl text-red-600 my-8">
						{error?.message}
					</p>
					<Link
						to="/"
						className="btn bg-orange-600 border-none hover:bg-orange-600 hover:shadow-xl"
					>
						Back to homepage
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ErrorPage;
