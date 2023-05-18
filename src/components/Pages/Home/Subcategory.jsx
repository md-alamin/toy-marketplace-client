import React from 'react';

const Subcategory = ({ toy }) => {
	console.log(toy);
	const { name, price, rating, image } = toy;

	return (
		<div className="card mt-4 md:w-96 bg-orange-50 shadow-xl">
			<figure className="px-10 pt-10">
				<img src={image} alt="Shoes" className="rounded-xl h-52" />
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title">{name}</h2>
				<div className="flex justify-between w-full my-4">
					<p>Price: ${price}</p>
					<p>Rating: {rating} star</p>
				</div>
				<div className="card-actions">
					<button className="btn bg-orange-600 border-none hover:shadow-2xl hover:bg-orange-600">
						View Details
					</button>
				</div>
			</div>
		</div>
	);
};

export default Subcategory;
