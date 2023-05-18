import React from 'react';
import avatar1 from '../../../assets/avatar-1.avif';
import avatar2 from '../../../assets/avatar-2.avif';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonial = () => {
	return (
		<>
			<h1 className="mt-0 mb-10 sm:mt-10 sm:mb-20 text-2xl sm:text-5xl font-bold text-center">
				Our Testimonial
			</h1>
			<div className="grid md:grid-cols-2 gap-32 md:gap-20 place-items-center mb-20 sm:mb-40 px-4">
				<div className="card md:w-96 h-96 bg-orange-100 shadow-xl relative">
					<FaQuoteLeft className="absolute left-10 sm:left-1/4 top-1/4"></FaQuoteLeft>
					<div className="avatar mx-auto pt-20">
						<div className="w-36 rounded-full">
							<img src={avatar1} />
						</div>
					</div>
					<div className="card-body items-center text-center bg-orange-200 m-6 rounded-2xl px-2 py-0 sm:py-10 max-w-sm sm:min-h-[220px] pt-4">
						<p>
							I can't recommend this website enough! The toys I ordered for my
							child arrived promptly and were exactly as described. The smile on
							my little one's face was priceless.
						</p>
						<h2 className="card-title pb-4 sm:pb-0 text-right ml-auto">
							- Emily T., Parent
						</h2>
					</div>
				</div>
				<div className="card md:w-96 h-96 bg-orange-100 shadow-xl relative">
					<FaQuoteLeft className="absolute left-10 sm:left-1/4 top-1/4"></FaQuoteLeft>
					<div className="avatar mx-auto pt-20">
						<div className="w-36 rounded-full">
							<img src={avatar2} />
						</div>
					</div>
					<div className="card-body items-center text-center bg-orange-200 m-6 rounded-2xl px-2 py-0 sm:py-10 max-w-sm pt-4">
						<p>
							I stumbled upon this website while searching for unique and
							engaging toys, and I'm so glad I did! The selection is fantastic,
							and the toys have exceeded my expectations. My kids are constantly
							engaged and entertained.
						</p>
						<h2 className="card-title pb-4 sm:pb-0 text-right ml-auto">
							- David R., Parent
						</h2>
					</div>
				</div>
			</div>
		</>
	);
};

export default Testimonial;
