import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/beams-basic.png'
import navProfileIcon from '../assets/navProfileIcon.png'
import {toast} from "react-toastify"
function Navbar(props) {
  const [defaultCountry, selectedCountry] = useState('India');
  const toggleCountry = (countryCode, countryName) => {
    props.setCountry(countryCode);
    selectedCountry(countryName);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border sticky-top "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'center',
       paddingRight:'1rem',
       paddingLeft:'1rem'
      }}>
      <div className="container-fluid">
        <Link className="navbar-brand mx-4" href="#"><h5>InsigtStream</h5></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <ul className="navbar-nav  ">
            <li className="nav-item mt-1">
              <h5>
                <Link className="nav-link active mx-2 " aria-current="page" to='/'>Home</Link>
              </h5>
            </li>
            <li className="nav-item mt-1">
              <h5>
                <Link className="nav-link active mx-2" aria-current="page" to="/about">About</Link>
              </h5>
            </li>
            <li className="nav-item mt-1">
              <h5>
                <Link className="nav-link mx-2 " to="/subscribe">Subscribe</Link>
              </h5>
            </li>
            <li>
              <div className="btn-group p-1">
                
                <ul className="dropdown-menu ">
                  <li><Link className="dropdown-item" onClick={() => toggleCountry('in', 'India')}>India</Link></li>
                  <li><Link className="dropdown-item" onClick={() => toggleCountry('us', 'USA')}>USA</Link></li>
                  <li><Link className="dropdown-item" onClick={() => toggleCountry('ch', 'China')}>China</Link></li>
                  <li><Link className="dropdown-item" onClick={() => toggleCountry('ru', 'Russia')}>Russia</Link></li>
                  <li><Link className="dropdown-item" onClick={() => toggleCountry('jp', 'Japan')}>Japan</Link></li>
                  <li><Link className="dropdown-item" onClick={() => toggleCountry('fr', 'France')}>France</Link></li>
                  <li><Link className="dropdown-item" onClick={() => toggleCountry('ca', 'Canada')}>Canada</Link></li>
                  <li><Link className="dropdown-item" onClick={() => toggleCountry('br', 'Brazil')}>Brazil</Link></li>
                  <li><Link className="dropdown-item" onClick={() => toggleCountry('hk', 'Hong Kong')}>Hong Kong</Link></li>
                  <li><Link className="dropdown-item" onClick={() => toggleCountry('ae', 'UAE')}>UAE</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;
