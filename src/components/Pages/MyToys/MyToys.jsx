import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import ToyTable from '../AllToys/ToyTable';
import Swal from 'sweetalert2';
import GenerateTitle from '../../utils/GenerateTitle';

const MyToys = () => {
	GenerateTitle('Marvel Toys | My Toys');
	const { user } = useContext(AuthContext);
	const [userToy, setUserToy] = useState([]);

	useEffect(() => {
		fetch(`https://toy-marketplace-server-tau.vercel.app/user/${user.email}`)
			.then((res) => res.json())
			.then((data) => setUserToy(data));
	}, []);

	const onSubmit = (data) => {
		console.log(data);
		fetch(`https://toy-marketplace-server-tau.vercel.app/update/${data.id}`, {
			method: 'PUT',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					Swal.fire({
						icon: 'success',
						title: 'Successfully Updated Toy',
						showConfirmButton: false,
						timer: 2000,
					});
					fetch(
						`https://toy-marketplace-server-tau.vercel.app/user/${user.email}`
					)
						.then((res) => res.json())
						.then((data) => setUserToy(data));
				} else {
					Swal.fire({
						icon: 'error',
						title: 'No updates were made',
						showConfirmButton: false,
						timer: 2000,
					});
				}
			})
			.catch((e) => {
				Swal.fire({
					icon: 'error',
					title: 'Error occured',
					showConfirmButton: false,
					timer: 2000,
				});
			});
	};

	const handleDelete = (id) => {
		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
				confirmButton: 'btn bg-red-600 hover:bg-red-700 border-none',
				cancelButton: 'btn bg-green-600 hover:bg-green-700 border-none ml-2',
			},
			buttonsStyling: false,
		});

		swalWithBootstrapButtons
			.fire({
				title: 'Are you sure you want to delete?',
				text: "You won't be able to revert this!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Delete',
				cancelButtonText: 'Cancel!',
			})
			.then((result) => {
				if (result.isConfirmed) {
					fetch(`https://toy-marketplace-server-tau.vercel.app/delete/${id}`, {
						method: 'DELETE',
					})
						.then((res) => res.json())
						.then((data) => {
							if (data.deletedCount > 0) {
								swalWithBootstrapButtons.fire(
									'Deleted!',
									'Your toy has been deleted.',
									'success'
								);
								const remaining = userToy.filter((toy) => toy._id !== id);
								setUserToy(remaining);
							} else
								Swal.fire({
									icon: 'error',
									title: 'Oops...',
									text: 'Something went wrong! Could not delete the file',
								});
						});
				}
			});
	};
	return (
		<div>
			<h1 className="my-10 text-2xl sm:text-5xl font-bold text-center">
				This is my toys
			</h1>
			{userToy.length !== 0 ? (
				<div className="overflow-x-auto mx-4 sm:mx-10 text-center mb-20">
					<table className="table w-full table-zebra text-center">
						{/* head */}
						<thead>
							<tr>
								<th className="text-xl">Toy Name</th>
								<th className="text-xl">Sub-category</th>
								<th className="text-xl">Price</th>
								<th className="text-xl">Available Quantity</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{userToy.map((toy) => (
								<ToyTable
									key={toy._id}
									toy={toy}
									update={true}
									handleDelete={handleDelete}
									onSubmit={onSubmit}
								></ToyTable>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<h4 className="text-center my-10 text-red-500 text-2xl font-bold">
					No toys added yet!
				</h4>
			)}
		</div>
	);
};

export default MyToys;
