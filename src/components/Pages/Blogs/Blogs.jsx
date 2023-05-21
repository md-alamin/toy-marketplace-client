import React from 'react';
import GenerateTitle from '../../utils/GenerateTitle';

const Blogs = () => {
	GenerateTitle('Marvel Toys | Blogs');
	return (
		<div className="mb-10">
			<h1 className="my-10 text-2xl sm:text-5xl font-bold text-center">
				This is My Blogs
			</h1>
			<div className="grid sm:grid-cols-2 gap-10 px-10 place-items-start">
				<div
					tabIndex={0}
					className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-full"
				>
					<input type="checkbox" />
					<div className="collapse-title text-xl font-medium">
						What is an access token and refresh token? How do they work and
						where should we store them on the client-side?
					</div>
					<div className="collapse-content">
						<p>
							Access Token is a credential used for authentication and
							authorization to access protected resources. It's a short-lived
							token for making authenticated API requests. Refresh Token is a
							credential used to obtain a new access token when the current one
							expires. It's a long-lived token securely stored on the
							client-side.
							<br />
							<br />
							It is important to store access tokens and refresh tokens securely
							on the client-side to prevent unauthorized access. Common
							approaches include using secure HTTP-only cookies, which are sent
							automatically with each request to the server, or storing them in
							secure client-side storage mechanisms such as browser's local
							storage or session storage.{' '}
						</p>
					</div>
				</div>
				<div
					tabIndex={0}
					className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-full"
				>
					<input type="checkbox" />
					<div className="collapse-title text-xl font-medium">
						Compare SQL and NoSQL databases.
					</div>
					<div className="collapse-content">
						<div className="grid lg:grid-cols-2 gap-5">
							<div>
								<h4 className="font-bold text-xl">SQL databases:</h4>
								<ul className="list-disc">
									<li>Follow a structured, tabular data model.</li>
									<li>Use SQL for querying and manipulating data.</li>
									<li>
										Provide strong data consistency and enforce rigid schemas.
									</li>
									<li>
										Suitable for applications with relational data and complex
										queries.
									</li>
								</ul>
							</div>
							<div>
								<h4 className="font-bold text-xl">NoSQL databases:</h4>
								<ul className="list-disc">
									<li>
										Use various data models such as key-value, document,
										columnar, or graph.
									</li>
									<li>Use query languages specific to their data model.</li>
									<li>
										Offer flexibility in data representation and schema design.
									</li>
									<li>
										Suitable for handling unstructured or rapidly changing data,
										real-time analytics, and high scalability needs.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div
					tabIndex={0}
					className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-full"
				>
					<input type="checkbox" />
					<div className="collapse-title text-xl font-medium">
						What is Express JS? What is Nest JS?
					</div>
					<div className="collapse-content">
						<p>
							Express JS is a web application framework for Node.js that
							provides a simple and flexible approach to building web
							applications and APIs.
							<br />
							<br />
							Nest JS is a progressive Node.js framework built on Express.js
							that offers additional features and architectural patterns
							inspired by Angular. It provides a modular and opinionated
							structure for building scalable and maintainable server-side
							applications.
						</p>
					</div>
				</div>
				<div
					tabIndex={0}
					className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-full"
				>
					<input type="checkbox" />
					<div className="collapse-title text-xl font-medium">
						What is MongoDB aggregate and how does it work?
					</div>
					<div className="collapse-content">
						<p>
							MongoDB's aggregate function allows for advanced data processing
							and analysis. It works by applying a sequence of stages to the
							data, including filtering, reshaping, grouping, and sorting. Each
							stage operates on the output of the previous stage, enabling
							powerful data transformations and aggregations.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
