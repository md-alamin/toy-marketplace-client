import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyTable from './ToyTable';
import GenerateTitle from '../../utils/GenerateTitle';

const AllToys = () => {
	const allToys = useLoaderData();
	GenerateTitle('Marvel Toys | All Toys');
	return (
		<div>
			<h1 className="my-10 text-2xl sm:text-5xl font-bold text-center">
				Collection of all our Toys!
			</h1>
			<div className="overflow-x-auto mx-4 sm:mx-10 text-center mb-20">
				<table className="table w-full table-zebra text-center">
					{/* head */}
					<thead>
						<tr>
							<th className="text-xl">Seller</th>
							<th className="text-xl">Toy Name</th>
							<th className="text-xl">Sub-category</th>
							<th className="text-xl">Price</th>
							<th className="text-xl">Available Quantity</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{allToys.map((toy) => (
							<ToyTable key={toy._id} toy={toy}></ToyTable>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AllToys;
