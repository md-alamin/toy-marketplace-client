import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Subcategory = ({ toy }) => {
	const { name, price, rating, image } = toy;
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();

	const loginModal = () => {
		Swal.fire({
			title: '<strong>You have to log in first to view details</strong>',
			icon: 'info',
			showCloseButton: true,
			focusConfirm: false,
			showConfirmButton: false,
			timer: 2000,
		});
		setTimeout(() => {
			navigate(`/toy/${toy._id}`);
		}, 2000);
	};
	return (
		<div className="card max-w-[280px] min-h-[512px] mt-4 md:w-96 bg-orange-50 shadow-xl border hover:scale-105 transition-all">
			<figure className="px-10 pt-10">
				<img
					src={image}
					loading="lazy"
					alt=""
					className="rounded-xl h-52 lg:w-40"
				/>
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title">{name}</h2>
				<div className="md:flex justify-between w-full my-4 gap-2">
					<p>Price: ${price}</p>
					<p>Rating: {rating} star</p>
				</div>
				<div className="card-actions">
					{user ? (
						<Link to={`/toy/${toy._id}`}>
							<button className="btn bg-orange-600 border-none hover:shadow-2xl hover:bg-orange-600">
								View Details
							</button>
						</Link>
					) : (
						<>
							<button
								onClick={loginModal}
								className="btn bg-orange-600 border-none hover:shadow-2xl hover:bg-orange-600"
							>
								View Details
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Subcategory;
