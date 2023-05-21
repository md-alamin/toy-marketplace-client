import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import MainLayout from './components/layout/MainLayout.jsx';
import Blogs from './components/Pages/Blogs/Blogs';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import AuthProvider from './components/providers/AuthProvider';
import PrivateRoute from './components/routes/PrivateRoute';
import ErrorPage from './components/Pages/ErrorPage/ErrorPage';
import Home from './components/Pages/Home/Home';
import Loader from './components/Shared/Loader';
import AllToys from './components/Pages/AllToys/AllToys';
import AddAToy from './components/Pages/AddAToy/AddAToy';
import MyToys from './components/Pages/MyToys/MyToys';
import ViewDetails from './components/Shared/ViewDetails';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout></MainLayout>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: 'blogs',
				element: <Blogs></Blogs>,
			},
			{
				path: 'login',
				element: <Login></Login>,
			},
			{
				path: 'register',
				element: <Register></Register>,
			},
			{
				path: 'allToys',
				element: <AllToys></AllToys>,
			},
			{
				path: 'addAToy',
				element: (
					<PrivateRoute>
						<AddAToy></AddAToy>
					</PrivateRoute>
				),
			},
			{
				path: 'myToys',
				element: (
					<PrivateRoute>
						<MyToys></MyToys>
					</PrivateRoute>
				),
			},
			{
				path: 'toy/:id',
				element: (
					<PrivateRoute>
						<ViewDetails></ViewDetails>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(
						`https://toy-marketplace-server-tau.vercel.app/toy/${params.id}`
					),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
