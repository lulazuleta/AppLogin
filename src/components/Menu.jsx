import React from 'react';
import {Link} from 'react-router-dom';

 
export const Menu = () =>  {

return (
    <div>

     

    <nav>
        <ul> 
            <li className='nav-item'> <Link to='/'>Inicio</Link> </li>
            <li className='nav-item'>  <Link to='/login'>Login</Link>  </li>
            <li className='nav-item'>  <Link to='/admin'>Admin</Link> </li>
        </ul>
    </nav>

    </div>



)
}

