import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navBar'>
        <Link to='/' className='navitem'>Counter App</Link>
        <Link to='/About ' className='navitem'>About</Link>
    
      </nav>
    );
  };
  export default NavBar;