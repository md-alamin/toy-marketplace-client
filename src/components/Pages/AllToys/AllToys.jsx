import React, { useEffect, useState } from 'react';
import ToyTable from './ToyTable';
import GenerateTitle from '../../utils/GenerateTitle';

const AllToys = () => {
	const [displayToys, setDisplayToys] = useState([]);

	useEffect(() => {
		fetch(`https://toy-marketplace-server-tau.vercel.app/allToys`)
			.then((res) => res.json())
			.then((data) => {
				setDisplayToys(data);
			})
			.catch((e) => console.log(e));
	}, []);
	GenerateTitle('Marvel Toys | All Toys');

	const searchFunction = (event) => {
		event.preventDefault();
		const form = event.target;
		const search = form.search.value;
		fetch(
			`https://toy-marketplace-server-tau.vercel.app/allToys/search/${search}`
		)
			.then((res) => res.json())
			.then((data) => {
				setDisplayToys(data);
			})
			.catch((e) => console.log(e));
	};

	return (
		<div>
			<h1 className="my-10 text-2xl sm:text-5xl font-bold text-center">
				Collection of all our Toys!
			</h1>
			<form onSubmit={searchFunction} className="form-control mb-2">
				<div className="input-group justify-center">
					<input
						type="text"
						name="search"
						placeholder="Search for toys"
						className="input input-bordered focus:outline-none"
					/>
					<button className="btn btn-square bg-orange-600 border-none hover:bg-orange-600">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</button>
				</div>
			</form>
			{displayToys.length !== 0 ? (
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
							{displayToys.map((toy) => (
								<ToyTable key={toy._id} toy={toy}></ToyTable>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<h4 className="text-center my-10 text-red-500 text-2xl font-bold">
					No result found
				</h4>
			)}
		</div>
	);
};

export default AllToys;
