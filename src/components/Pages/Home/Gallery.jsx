import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
	useEffect(() => {
		AOS.init({
			// AOS configuration options (if needed)
		});
	}, []);
	return (
		<div className="py-10">
			<div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8">
				<h2 className="text-center text-3xl md:text-5xl font-bold mb-10 text-gray-800 mt-16">
					Our Top Collections
				</h2>
				<div
					data-aos="fade-zoom-in"
					data-aos-offset="200"
					data-aos-easing="ease-in-sine"
					data-aos-duration="600"
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-20"
				>
					<div>
						<img
							className="w-full h-80 object-contain rounded-lg shadow-2xl py-10 bg-orange-50"
							src="https://i.ibb.co/GTZmC29/Spider-Gwen-Action-Figure.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="w-full h-80 object-contain rounded-lg shadow-2xl py-10 bg-orange-50"
							src="https://i.ibb.co/zfBgPgj/Black-Panther-Mask.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="w-full h-80 object-contain rounded-lg shadow-2xl py-10 bg-orange-50"
							src="https://i.ibb.co/QvGSDCH/Rocket-Raccoon-Action-Figure.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="w-full h-80 object-contain rounded-lg shadow-2xl py-10 bg-orange-50"
							src="https://i.ibb.co/LYqrgKX/Thor-Action-Figure.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="w-full h-80 object-contain rounded-lg shadow-2xl py-10 bg-orange-50"
							src="https://i.ibb.co/k22bSC1/Jean-Grey-Statue.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="w-full h-80 object-contain rounded-lg shadow-2xl py-10 bg-orange-50"
							src="https://i.ibb.co/0qM0Bb0/Thanos-Infinity-Gauntlet-Replica.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
