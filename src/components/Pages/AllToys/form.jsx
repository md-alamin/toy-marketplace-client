<form onSubmit={handleSubmit(onSubmit)}>
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
			Available Quantity <small className="text-red-600">*required</small>
		</label>
		<input
			className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			placeholder="Enter quantity"
			{...register('quantity', {
				required: 'Quantity is required',
			})}
		/>
		<span className="text-red-600 block">{errors.quantity?.message}</span>
	</div>
	<div className="my-4">
		<label className="block text-gray-700 text-sm font-bold mb-2">
			Description
		</label>
		<textarea
			className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline textarea-bordered"
			placeholder="Enter description"
			{...register('description')}
		/>
	</div>

	<div className="flex justify-end">
		<button type="submit" className="btn btn-primary mr-2">
			Submit
		</button>
		<button
			type="button"
			className="btn btn-secondary"
			onClick={() => setShowModal(false)}
		>
			Cancel
		</button>
	</div>
</form>;
