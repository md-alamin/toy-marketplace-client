import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const ToyTable = ({ toy, update, handleDelete, onSubmit }) => {
	const [showModal, setShowModal] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<tr>
			{update ? '' : <td>{toy?.seller_name}</td>}
			<td className="font-bold">{toy.name}</td>
			<td>{toy.sub_category}</td>
			<td>${toy.price}</td>
			<td>{toy.quantity}</td>
			<th>
				{update ? (
					<div className="flex gap-2">
						<div>
							<button
								className="btn bg-orange-600 hover:bg-green-600 border-none btn-xs"
								onClick={() => setShowModal(true)}
							>
								Update
							</button>

							<Modal
								open={showModal}
								onClose={() => setShowModal(false)}
								center
								styles={{ modal: { minWidth: '60vw' } }}
							>
								<h2 className="text-2xl font-bold mb-4 text-center">
									Update Toys
								</h2>
								<form onSubmit={handleSubmit(onSubmit)}>
									<div className="flex justify-around">
										<div className="mb-4">
											<label className="block text-gray-700 text-sm font-bold mb-2">
												Price <small className="text-red-600">*required</small>
											</label>
											<div className="flex items-center gap-1">
												<span>$</span>
												<input
													className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
													placeholder="Enter the price"
													defaultValue={toy?.price}
													{...register('price', {
														required: 'Price is required',
													})}
												/>
											</div>
											<span className="text-red-600">
												{errors.price?.message}
											</span>
										</div>
										<input
											className="hidden"
											defaultValue={toy?._id}
											{...register('id')}
										/>
										;
										<div className="mb-4">
											<label className="block text-gray-700 text-sm font-bold mb-2">
												Available Quantity{' '}
												<small className="text-red-600">*required</small>
											</label>
											<input
												className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
												placeholder="Enter quantity"
												defaultValue={toy?.quantity}
												{...register('quantity', {
													required: 'Quantity is required',
												})}
											/>
											<span className="text-red-600 block">
												{errors.quantity?.message}
											</span>
										</div>
									</div>
									<div className="my-4 md:px-20">
										<label className="block text-gray-700 text-sm font-bold mb-2 text-center">
											Description
										</label>
										<textarea
											className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline textarea-bordered"
											placeholder="Enter description"
											defaultValue={toy?.description}
											{...register('description')}
										/>
									</div>
									<div className="flex justify-end">
										<button
											onClick={() => setShowModal(false)}
											type="submit"
											className="btn bg-green-600 hover:bg-green-700 border-none mr-2"
										>
											Submit
										</button>
										<button
											type="button"
											className="btn bg-red-600 hover:bg-red-700 border-none"
											onClick={() => setShowModal(false)}
										>
											Cancel
										</button>
									</div>
								</form>
							</Modal>
						</div>

						<button
							onClick={() => handleDelete(toy._id)}
							className="btn bg-orange-600 hover:bg-red-600 border-none btn-xs"
						>
							Delete
						</button>
					</div>
				) : (
					<button className="btn bg-orange-600 border-none hover:shadow-2xl btn-xs">
						View Details
					</button>
				)}
			</th>
		</tr>
	);
};

export default ToyTable;
