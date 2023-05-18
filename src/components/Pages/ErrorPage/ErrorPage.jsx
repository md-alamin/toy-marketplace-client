import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import GenerateTitle from '../../utils/GenerateTitle';

const ErrorPage = () => {
	GenerateTitle('Marvel Toys | Error');
	const { status, error } = useRouteError();
	return (
		<div className="flex items-center h-screen p-16 bg-blue-200">
			<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
				<div className="max-w-md text-center">
					<p className="text-2xl font-semibold md:text-3xl text-red-600 my-8">
						{error?.message}
					</p>
					<p className="mb-8 text-xl text-red-600 font-black">
						{status || 404}
					</p>
					<Link to="/" className="btn btn-red">
						Back to homepage
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ErrorPage;
