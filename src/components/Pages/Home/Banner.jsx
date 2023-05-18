import React from 'react';
import banner from '../../../assets/banner.jpg';

const Banner = () => {
	return (
		<div
			className="hero min-h-[60vh]"
			style={{
				backgroundImage: `url(${banner})`,
			}}
		>
			<div className="hero-overlay bg-opacity-90"></div>
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-xl text-orange-200">
					<h1 className="mb-5 text-2xl sm:text-5xl font-bold">
						Welcome, Where Imagination Comes to Life!
					</h1>
					<p className="mb-5 font-bold">
						Step into a world where dreams become reality, where little hearts
						ignite with joy, and where every moment is an adventure waiting to
						unfold.
						<br />
						At{' '}
						<span className="font-extrabold text-orange-500">Marvel Toys</span>,
						we are on a mission to bring smiles to the faces of children and
						unleash their boundless creativity.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Banner;
