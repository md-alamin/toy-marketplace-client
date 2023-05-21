import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import ToyTable from '../AllToys/ToyTable';
import Swal from 'sweetalert2';
import GenerateTitle from '../../utils/GenerateTitle';
import Loader from '../../Shared/Loader';

const MyToys = () => {
	GenerateTitle('Marvel Toys | My Toys');
	const { user } = useContext(AuthContext);
	const [userToy, setUserToy] = useState([]);
	const [loader, setLoader] = useState(true);
	const [selectedValue, setSelectedValue] = useState('option1');

	useEffect(() => {
		fetch(`https://toy-marketplace-server-tau.vercel.app/user/${user.email}`)
			.then((res) => res.json())
			.then((data) => {
				setUserToy(data);
				setLoader(false);
			});
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
		const swalWithButtons = Swal.mixin({
			customClass: {
				confirmButton: 'btn bg-red-600 hover:bg-red-700 border-none',
				cancelButton: 'btn bg-green-600 hover:bg-green-700 border-none ml-2',
			},
			buttonsStyling: false,
		});

		swalWithButtons
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
								swalWithButtons.fire(
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

	const handleSort = (event) => {
		setLoader(true);
		setSelectedValue(event.target.value);
		if (event.target.value === 'option2') {
			fetch(
				`https://toy-marketplace-server-tau.vercel.app/sort/${user.email}?sort=1`
			)
				.then((res) => res.json())
				.then((data) => {
					setUserToy(data);
					setLoader(false);
				});
		} else if (event.target.value === 'option3') {
			fetch(
				`https://toy-marketplace-server-tau.vercel.app/sort/${user.email}?sort=-1`
			)
				.then((res) => res.json())
				.then((data) => {
					setUserToy(data);
					setLoader(false);
				});
		}
	};

	if (loader) {
		return <Loader></Loader>;
	}

	return (
		<div>
			<h1 className="my-10 text-2xl sm:text-5xl font-bold text-center">
				This is my toys
			</h1>
			{userToy.length !== 0 ? (
				<>
					<div className="text-center mb-4">
						<select
							onChange={handleSort}
							value={selectedValue}
							className="w-2/3 md:w-1/4 px-4 py-2 pr-8 leading-tight bg-white border border-orange-300 rounded-md appearance-none focus:outline-none focus:border-orange-600 text-center"
						>
							<option value="option1" disabled>
								Sort by Price
							</option>
							<option value="option2">Ascending order</option>
							<option value="option3">Descending order</option>
						</select>
					</div>
					<div className="overflow-x-auto mx-4 sm:mx-10 text-center mb-20">
						<table className="table-normal w-full text-center">
							{/* head */}
							<thead>
								<tr className="bg-base-300 rounded">
									<th></th>
									<th className="text-xl">Toy Name</th>
									<th className="text-xl">Sub-category</th>
									<th className="text-xl">Price</th>
									<th className="text-xl">Available Quantity</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{userToy.map((toy, idx) => (
									<ToyTable
										key={toy._id}
										toy={toy}
										idx={idx + 1}
										update={true}
										handleDelete={handleDelete}
										onSubmit={onSubmit}
									></ToyTable>
								))}
							</tbody>
						</table>
					</div>
				</>
			) : (
				<h4 className="text-center my-10 text-red-500 text-2xl font-bold">
					No toys added yet!
				</h4>
			)}
		</div>
	);
};

export default MyToys;
