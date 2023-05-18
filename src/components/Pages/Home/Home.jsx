import React from 'react';
import GenerateTitle from '../../utils/GenerateTitle';
import Banner from './Banner';
import Gallery from './Gallery';

const Home = () => {
	GenerateTitle('Marvel Toys');
	return (
		<>
			<Banner />
			<Gallery></Gallery>
		</>
	);
};

export default Home;
