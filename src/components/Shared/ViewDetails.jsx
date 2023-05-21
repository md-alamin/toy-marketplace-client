import React from 'react';
import { useLoaderData } from 'react-router-dom';
import GenerateTitle from '../utils/GenerateTitle';

const ViewDetails = () => {
	GenerateTitle('Marvel Toys | Details');
	const toyDetails = useLoaderData();
	console.log(toyDetails);
	return (
		<div className="bg-orange-100">
			<div className="container mx-auto px-4 py-8">
				<div className="flex flex-col md:flex-row justify-around items-center gap-20">
					<img
						className="object-cover max-h-96 rounded-lg"
						src={toyDetails.image}
						alt="Card Image"
					/>
					<div className="text-center md:pl-8 bg-orange-200 p-4 rounded-lg">
						<h1 className="text-3xl font-bold mb-6">{toyDetails.name}</h1>

						<div className="grid md:grid-cols-2 gap-6">
							<p>Seller Name: {toyDetails.seller_name}</p>
							<p>
								Seller Email:{' '}
								<span className="underline">{toyDetails.seller_email}</span>
							</p>

							<p>Sub-category: {toyDetails.sub_category}</p>
							<p>Price: ${toyDetails.price}</p>

							{toyDetails.rating && <p>Rating: {toyDetails.rating}</p>}
							<p>Quantity: {toyDetails.quantity}</p>
						</div>
						{toyDetails.description ? (
							<p className="mt-4 px-6">Description: {toyDetails.description}</p>
						) : (
							''
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewDetails;
