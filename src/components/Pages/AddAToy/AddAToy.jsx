import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const AddAToy = () => {
	const { user } = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		fetch('http://localhost:5000/addToy', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
		reset();
		Swal.fire({
			icon: 'success',
			title: 'Successfully Added Toy',
			showConfirmButton: false,
			timer: 2000,
		});
	};

	// console.log(watch('example')); // watch input value by passing the name of it

	return (
		<div>
			<h1 className="my-10 text-2xl sm:text-5xl font-bold text-center">
				Add your toy here!
			</h1>
			<form className="w-3/4 mx-auto py-10" onSubmit={handleSubmit(onSubmit)}>
				<div className="grid grid-cols-2 gap-10">
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Picture URL <small className="text-red-600">*required</small>
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Enter the picture"
							{...register('image', {
								required: 'Photo is required',
							})}
						/>
						<span className="text-red-600">{errors.photo?.message}</span>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Name <small className="text-red-600">*required</small>
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Enter name of toy"
							{...register('name', {
								required: 'Name is required',
							})}
						/>
						<span className="text-red-600">{errors.name?.message}</span>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Seller Name <small className="text-red-600">*required</small>
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Enter your name"
							defaultValue={user?.displayName}
							{...register('seller_name', {
								required: 'Name is required',
							})}
						/>
						<span className="text-red-600">{errors.seller?.message}</span>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Seller Email <small className="text-red-600">*required</small>
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Enter your name"
							defaultValue={user?.email}
							{...register('seller_email', {
								required: 'Email is required',
							})}
						/>
						<span className="text-red-600">{errors.seller?.message}</span>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Sub-category <small className="text-red-600">*required</small>
						</label>
						<select {...register('sub_category')}>
							<option value="Avengers">Avengers</option>
							<option value="Guardians of the Galaxy">
								Guardians of the Galaxy
							</option>
							<option value="X-Men">X-Men</option>
						</select>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Price <small className="text-red-600">*required</small>
						</label>
						<div className="flex items-center gap-1">
							<span>$</span>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								placeholder="Enter the price"
								{...register('price', {
									required: 'Pirce is required',
								})}
							/>
						</div>
						<span className="text-red-600">{errors.price?.message}</span>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Rating
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Enter toy rating"
							{...register('rating')}
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Available Quantity{' '}
							<small className="text-red-600">*required</small>
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Enter quantity"
							{...register('quantity', {
								required: 'Quantity is required',
							})}
						/>
						<span className="text-red-600">{errors.quantity?.message}</span>
					</div>
				</div>
				<div className="my-10">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Description
					</label>
					<textarea
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline textarea-bordered"
						placeholder="Enter description"
						{...register('description')}
					/>
				</div>
				<div className="text-center">
					<input
						className="btn btn-wide bg-orange-600 border-none hover:bg-orange-600 hover:shadow-xl mt-2"
						type="submit"
						value="Add Toy"
					/>
				</div>
			</form>
		</div>
	);
};

export default AddAToy;
