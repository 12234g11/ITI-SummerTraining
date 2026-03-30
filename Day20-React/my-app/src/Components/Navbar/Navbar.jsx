import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
<nav>
  <ul style={{ listStyle: 'none', display: 'flex', gap: '15px', padding: 0 ,justifyContent:'center'}}>
    <li><Link to="" style={{ textDecoration: 'none', color: 'black' ,fontWeight:'600' }}>Home</Link></li>
    <li><Link to="/about" style={{ textDecoration: 'none', color: 'black' ,fontWeight:'600' }}>About</Link></li>
    <li><Link to="/products" style={{ textDecoration: 'none', color: 'black' ,fontWeight:'600' }}>Products</Link></li>
    <li><Link to="/add-product" style={{ textDecoration: 'none', color: 'black',fontWeight:'600'  }}>Add Products</Link></li>
    <li><Link to="/login" style={{ textDecoration: 'none', color: 'black',fontWeight:'600'  }}>Login</Link></li>
    <li><Link to="/signup" style={{ textDecoration: 'none', color: 'black' ,fontWeight:'600' }}>Signup</Link></li>
  </ul>
</nav>

  );
}
