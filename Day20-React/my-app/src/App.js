import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import AddProduct from './Components/AddProduct/AddProduct';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import ProductDetailes from './Components/ProductDetailes/ProductDetailes';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import NotFound from './Components/NotFound/NotFound';

function App() {
  const [products, setProducts] = useState([]);

  function addNewProduct(product) {
    setProducts(prev => [...prev, product]);
  }

  let Routing = createBrowserRouter([
    {
      path: '/',
      element: <Layout products={products} addNewProduct={addNewProduct} />,
      children: [
        { index: true, element: <Home /> },
        { path: 'add-product', element: <AddProduct /> },
        { path: 'about', element: <About /> },
        { path: 'products', element: <Products /> },
        { path: 'productdetailes/:id', element: <ProductDetailes /> },
        { path: 'login', element: <Login /> },
        { path: 'signup', element: <SignUp /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={Routing} />;
}

export default App;
