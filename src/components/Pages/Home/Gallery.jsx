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
				{/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-20">
					<div>
						<img
							data-aos="fade-zoom-in"
							data-aos-offset="200"
							data-aos-easing="ease-in-sine"
							data-aos-duration="600"
							className="w-full h-80 object-contain rounded-lg shadow-2xl py-10 bg-orange-50"
							src="https://i.ibb.co/GTZmC29/Spider-Gwen-Action-Figure.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							data-aos="fade-zoom-in"
							data-aos-offset="200"
							data-aos-easing="ease-in-sine"
							data-aos-duration="600"
							className="w-full h-80 object-contain rounded-lg shadow-2xl py-10 bg-orange-50"
							src="https://i.ibb.co/zfBgPgj/Black-Panther-Mask.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							data-aos="fade-zoom-in"
							data-aos-offset="200"
							data-aos-easing="ease-in-sine"
							data-aos-duration="600"
							className="w-full h-80 object-contain rounded-lg shadow-2xl py-10 bg-orange-50"
							src="https://i.ibb.co/QvGSDCH/Rocket-Raccoon-Action-Figure.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							data-aos="fade-zoom-in"
							data-aos-offset="200"
							data-aos-easing="ease-in-sine"
							data-aos-duration="600"
							className="w-full h-80 object-contain rounded-lg shadow-2xl py-10 bg-orange-50"
							src="https://i.ibb.co/LYqrgKX/Thor-Action-Figure.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							data-aos="fade-zoom-in"
							data-aos-offset="200"
							data-aos-easing="ease-in-sine"
							data-aos-duration="600"
							className="w-full h-80 object-contain rounded-lg shadow-2xl py-10 bg-orange-50"
							src="https://i.ibb.co/k22bSC1/Jean-Grey-Statue.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							data-aos="fade-zoom-in"
							data-aos-offset="200"
							data-aos-easing="ease-in-sine"
							data-aos-duration="600"
							className="w-full h-80 object-contain rounded-lg shadow-2xl py-10 bg-orange-50"
							src="https://i.ibb.co/0qM0Bb0/Thanos-Infinity-Gauntlet-Replica.jpg"
							alt=""
						/>
					</div>
				</div> */}
				<div className="grid sm:grid-cols-2 gap-10">
					<div>
						<img
							data-aos="fade-zoom-in"
							data-aos-offset="200"
							data-aos-easing="ease-in-sine"
							data-aos-duration="600"
							className="object-fill rounded-lg shadow-2xl py-10 bg-orange-50"
							src="https://i.ibb.co/zfBgPgj/Black-Panther-Mask.jpg"
							alt=""
						/>
					</div>
					<div
						data-aos="fade-zoom-in"
						data-aos-offset="200"
						data-aos-easing="ease-in-sine"
						data-aos-duration="600"
						className="grid grid-cols-2 gap-2"
					>
						<img
							className="w-full h-80 object-contain rounded-lg shadow-2xl py-10 bg-orange-50"
							src="https://i.ibb.co/GTZmC29/Spider-Gwen-Action-Figure.jpg"
							alt=""
						/>
						<img
							className="w-full h-80 object-contain rounded-lg shadow-2xl py-10 bg-orange-50"
							src="https://i.ibb.co/zGm1Gq4/Drax-the-Destroyer-Dagger-Set.jpg"
							alt=""
						/>
						<img
							className="w-full h-80 object-contain rounded-lg shadow-2xl py-10 bg-orange-50"
							src="https://i.ibb.co/LgYwgjG/Groot-Dancing-Speaker.jpg"
							alt=""
						/>
						<img
							className="w-full h-80 object-contain rounded-lg shadow-2xl py-10 bg-orange-50"
							src="https://i.ibb.co/QvGSDCH/Rocket-Raccoon-Action-Figure.jpg"
							alt=""
						/>
					</div>
					<div
						data-aos="fade-zoom-in"
						data-aos-offset="200"
						data-aos-easing="ease-in-sine"
						data-aos-duration="600"
						className="grid grid-cols-2 gap-2"
					>
						<img
							className="w-full h-80 object-contain rounded-lg shadow-2xl py-10 bg-orange-50"
							src="https://i.ibb.co/v409t9t/Thor-Hammer-Replica.jpg"
							alt=""
						/>
						<img
							className="w-full h-80 object-contain rounded-lg shadow-2xl py-10 bg-orange-50"
							src="https://i.ibb.co/dprbMN9/Cyclops-Action-Figure.jpg"
							alt=""
						/>
						<img
							className="w-full h-80 object-contain rounded-lg shadow-2xl py-10 bg-orange-50"
							src="https://i.ibb.co/P9k4Sk8/Hulk-Smash-Hands.jpg"
							alt=""
						/>
						<img
							className="w-full h-80 object-contain rounded-lg shadow-2xl py-10 bg-orange-50"
							src="https://i.ibb.co/PZK6RVp/Gamora-Figure.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							data-aos="fade-zoom-in"
							data-aos-offset="200"
							data-aos-easing="ease-in-sine"
							data-aos-duration="600"
							className="h-fit object-contain rounded-lg shadow-2xl py-10 bg-orange-50"
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
