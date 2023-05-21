import React, { Fragment, useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import Subcategory from './Subcategory';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ShopByCategory = () => {
	const [subcategory, setSubcategory] = useState('avengers');
	const [displayToys, setDisplayToys] = useState([]);

	useEffect(() => {
		AOS.init({
			// AOS configuration options (if needed)
		});
	}, []);
	useEffect(() => {
		fetch(
			`https://toy-marketplace-server-tau.vercel.app/subcategory/${subcategory}`
		)
			.then((res) => res.json())
			.then((data) => {
				setDisplayToys(data);
			})
			.catch((e) => console.log(e));
	}, [subcategory]);
	return (
		<div className="container mx-auto text-center py-20">
			<h1 className="my-10 text-2xl sm:text-5xl font-bold">
				Our Category of Toys
			</h1>
			<div className="divider w-1/2 mx-auto"></div>
			<Tab.Group>
				<Tab.List>
					<Tab as={Fragment}>
						{({ selected }) => (
							/* Use the `selected` state to conditionally style the selected tab. */
							<button
								onClick={() => setSubcategory('avengers')}
								className={
									selected
										? 'bg-orange-600 border-none text-white p-3 rounded-lg'
										: 'bg-base-300 rounded text-black p-3'
								}
							>
								Avengers
							</button>
						)}
					</Tab>
					<Tab as={Fragment}>
						{({ selected }) => (
							/* Use the `selected` state to conditionally style the selected tab. */
							<button
								onClick={() => setSubcategory('guardians')}
								className={
									selected
										? 'bg-orange-600 border-none text-white mx-10 p-3 rounded-lg my-2'
										: 'bg-base-300 rounded text-black mx-10 p-3 my-2'
								}
							>
								Guardians of the Galaxy
							</button>
						)}
					</Tab>
					<Tab as={Fragment}>
						{({ selected }) => (
							/* Use the `selected` state to conditionally style the selected tab. */
							<button
								onClick={() => setSubcategory('xmen')}
								className={
									selected
										? 'bg-orange-600 border-none text-white p-3 rounded-lg'
										: 'bg-base-300 rounded text-black p-3'
								}
							>
								X-Men
							</button>
						)}
					</Tab>
				</Tab.List>
				<div className="divider"></div>
				<Tab.Panels
					data-aos="fade-zoom-in"
					data-aos-offset="200"
					data-aos-easing="ease-in-sine"
					data-aos-duration="600"
				>
					<Tab.Panel>
						<div className="grid lg:grid-cols-3 place-items-center">
							{displayToys.slice(0, 3).map((toy) => (
								<Subcategory key={toy._id} toy={toy}></Subcategory>
							))}
						</div>
					</Tab.Panel>
					<Tab.Panel>
						<div className="grid lg:grid-cols-3 place-items-center">
							{displayToys.slice(0, 3).map((toy) => (
								<Subcategory key={toy._id} toy={toy}></Subcategory>
							))}
						</div>
					</Tab.Panel>
					<Tab.Panel>
						<div className="grid lg:grid-cols-3 place-items-center">
							{displayToys.slice(0, 3).map((toy) => (
								<Subcategory key={toy._id} toy={toy}></Subcategory>
							))}
						</div>
						{/* <btn className="btn bg-orange-600 border-none hover:shadow-2xl hover:bg-orange-600 mt-8">
								View All in Sub-Category
							</btn>
							for later maybe
							 */}
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
};

export default ShopByCategory;
