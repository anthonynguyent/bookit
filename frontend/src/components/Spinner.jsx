import React from 'react';

const Spinner = () => {
	return (
		<div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping w-16 h-16 rounded-full bg-sky-600'></div>
	);
};

export default Spinner;
