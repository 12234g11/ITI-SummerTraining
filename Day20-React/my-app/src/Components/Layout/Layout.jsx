import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

export default function Layout({ products, addNewProduct }) {
  return (
    <>
      <Navbar />
      <Outlet context={{ products, addNewProduct }} />
    </>
  );
}
