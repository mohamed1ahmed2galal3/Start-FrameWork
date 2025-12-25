import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import NotFound from './NotFound/NotFound';

const Routes = createBrowserRouter([
    {
      path: '/',element: <Layout /> , children: [
        { index: true, element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/portfolio', element: <Portfolio /> },
        { path: '/contact', element: <Contact /> },
        { path: '*', element: <NotFound /> },
      ]
    }]);

function App() {
  
  return <>
    <RouterProvider router={Routes}></RouterProvider>
  </>
}

export default App