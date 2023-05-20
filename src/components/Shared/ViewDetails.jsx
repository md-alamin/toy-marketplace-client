import React from 'react';
import { useLoaderData } from 'react-router-dom';
import GenerateTitle from '../utils/GenerateTitle';

const ViewDetails = () => {
	GenerateTitle('Marvel Toys | Details');
	const toyDetails = useLoaderData();
	console.log(toyDetails);
	return (
		<div className="hero min-h-screen">
			<div className="hero-content flex-col lg:flex-row">
				<img
					src={toyDetails.image}
					className="max-w-sm rounded-lg shadow-2xl"
				/>
				<div className="text-center">
					<h1 className="text-5xl font-bold mb-6">{toyDetails.name}</h1>

					<div className="grid grid-cols-2 gap-6">
						<p>Seller Name: {toyDetails.seller_name}</p>
						<p>Seller Email: {toyDetails.seller_email}</p>

						<p>Sub-category: {toyDetails.sub_category}</p>
						<p>Price: ${toyDetails.price}</p>

						{toyDetails.rating && <p>Rating: {toyDetails.rating}</p>}
						<p>Quantity: {toyDetails.quantity}</p>
					</div>

					<p className="py-6">{toyDetails.description}</p>
				</div>
			</div>
		</div>
	);
};

export default ViewDetails;
