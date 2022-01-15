import React from 'react'
import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';


  export const Header =()=> {
  
    
      return (
        <header>
          <nav>
          <ul>
            <li>
              <Link to='/map'>Карта</Link>
            </li>
            
            <li>
              <Link to='/profile'>Профиль</Link>
            </li>
            <li>
             <Link to='/'>Выйти</Link>
            </li>
          </ul>
          </nav>
        </header>
      )
     
    }
    Header.propTypes={
      navigate: PropTypes.func,
      logOut: PropTypes.func,
    }
   