import React from 'react';

const Newsletter = () => {
	return (
		<div className="py-20 sm:pt-10">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="text-2xl sm:text-5xl font-bold mb-10">
						Subscribe to Our Newsletter
					</h2>
					<p className="mt-4 font-bold text-gray-800">
						Stay up-to-date with our latest shipments and latest model of toys!
					</p>
					<div className="mt-8 sm:flex sm:justify-center">
						<input
							type="email"
							placeholder="Enter your email address"
							className="p-2 border border-gray-400 focus:outline-none rounded-full sm:max-w-xs sm:mt-0 sm:ml-4"
						/>
						<button className="mt-4 sm:mt-0 sm:ml-4 bg-orange-600 text-white font-bold py-2 px-6 rounded-3xl">
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
