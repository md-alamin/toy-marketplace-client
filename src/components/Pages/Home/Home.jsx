import React from 'react';
import GenerateTitle from '../../utils/GenerateTitle';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopByCategory from './ShopByCategory';
import Newsletter from './Newsletter';

const Home = () => {
	GenerateTitle('Marvel Toys');
	return (
		<>
			<Banner />
			<Gallery></Gallery>
			<ShopByCategory></ShopByCategory>
			<Newsletter></Newsletter>
		</>
	);
};

export default Home;
