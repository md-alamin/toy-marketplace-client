import React from 'react';
import GenerateTitle from '../../utils/GenerateTitle';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopByCategory from './ShopByCategory';
import Newsletter from './Newsletter';
import Testimonial from './Testimonial';

const Home = () => {
	GenerateTitle('Marvel Toys');
	return (
		<>
			<Banner />
			<Gallery></Gallery>
			<ShopByCategory></ShopByCategory>
			<Testimonial></Testimonial>
			<Newsletter></Newsletter>
		</>
	);
};

export default Home;
