import React from 'react';
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <ul>
       <Link to ='/'>Home</Link>
       <Link to ='/projects'>Projects</Link>
       
    
    </ul>
  );
}

export default Nav;