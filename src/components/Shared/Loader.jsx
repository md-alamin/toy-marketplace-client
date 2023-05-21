import React from 'react';

const Loader = () => {
	return (
		<div className="grid place-items-center h-80">
			<progress className="progress w-2/3 md:w-96"></progress>
		</div>
	);
};

export default Loader;
