import React, { useContext } from 'react';
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import userProfile from '../../assets/default-avatar.png';
import Swal from 'sweetalert2';

const Header = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(Swal.fire('Successfully logged out!'))
			.catch((error) => console.log(error));
	};

	return (
		<div className="bg-base-300 md:sticky top-0 z-10">
			<div className="navbar container mx-auto">
				<div>
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<NavLink to="/">Home</NavLink>
							</li>
							<li>
								<NavLink to="/allToys">All toys</NavLink>
							</li>
							{user ? (
								<li>
									<NavLink to="/myToys">My toys</NavLink>
								</li>
							) : (
								''
							)}
							{user ? (
								<li>
									<NavLink to="/addAToy">Add A Toy</NavLink>
								</li>
							) : (
								''
							)}
							<li>
								<NavLink to="/blogs">Blogs</NavLink>
							</li>
							{user ? (
								<div className="flex flex-col sm:flex-row items-center justify-between mt-4 sm:mt-0">
									<div
										className="tooltip tooltip-bottom mr-4"
										data-tip={user.displayName && user.displayName}
									>
										{user.photoURL ? (
											<img
												className="ml-5 h-10 w-10 rounded-full"
												src={user.photoURL}
												alt=""
											/>
										) : (
											<img
												className="ml-5 h-10 w-10 rounded-full"
												src={userProfile}
												alt=""
											/>
										)}
									</div>
									<Link
										onClick={handleLogOut}
										className="btn bg-orange-500 border-none hover:bg-orange-600 hover:shadow-xl"
									>
										Log Out
									</Link>
								</div>
							) : (
								<li>
									<NavLink to="/login">Log in</NavLink>
								</li>
							)}
						</ul>
					</div>
					<img src={logo} className="w-16" alt="" />
					<h1 className="text-2xl font-bold min-w-max sm:font-extrabold text-orange-600">
						Marvel Toys
					</h1>
				</div>
				<div className="navbar-end w-full hidden lg:flex">
					<ul className="menu menu-horizontal px-1 items-center font-bold">
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/allToys">All toys</NavLink>
						</li>
						{user ? (
							<li>
								<NavLink to="/myToys">My toys</NavLink>
							</li>
						) : (
							''
						)}
						{user ? (
							<li>
								<NavLink to="/addAToy">Add A Toy</NavLink>
							</li>
						) : (
							''
						)}
						<li>
							<NavLink to="/blogs">Blogs</NavLink>
						</li>
						{user ? (
							<div className="flex items-center justify-between">
								<div
									className="tooltip tooltip-bottom mr-4"
									data-tip={user.displayName && user.displayName}
								>
									{user.photoURL ? (
										<img
											className="ml-5 h-10 w-10 rounded-full"
											src={user.photoURL}
											alt=""
										/>
									) : (
										<img
											className="ml-5 h-10 w-10 rounded-full"
											src={userProfile}
											alt=""
										/>
									)}
								</div>
								<Link
									onClick={handleLogOut}
									className="btn bg-orange-500 border-none hover:bg-orange-600 hover:shadow-xl"
								>
									Log Out
								</Link>
							</div>
						) : (
							<li>
								<NavLink to="/login">Log in</NavLink>
							</li>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
