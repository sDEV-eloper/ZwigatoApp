import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Error from './components/Error'
import About from './components/Navbar/About';
import Contact from './components/Navbar/Contact';
import Services from './components/Navbar/Services';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router=createBrowserRouter([
  {
     path:'/',
     element:<App/>,
     errorElement:<Error/>
 },
 {
     path:'about',
     element:<About/>
 },
 {
     path:'contact',
     element:<Contact/>
 },
 {
     path:'services',
     element:<Services/>
 },
 ])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

