import React from 'react';

const ToyTable = ({ toy }) => {
	return (
		<tr>
			<td>
				<div>{toy?.seller_name}</div>
			</td>
			<td className="font-bold">{toy.name}</td>
			<td>{toy.sub_category}</td>
			<td>${toy.price}</td>
			<td>{toy.quantity}</td>
			<th>
				<button className="btn bg-orange-600 border-none hover:shadow-2xl btn-xs">
					View Details
				</button>
			</th>
		</tr>
	);
};

export default ToyTable;
