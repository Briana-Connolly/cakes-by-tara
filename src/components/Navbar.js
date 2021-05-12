import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import NavMenu from '../imgs/iconmonstr-menu.png';
import Logo from '../imgs/cakelogo.png';

export default class Navbar extends Component {
  state = {
      toggle:false
  }
  Toggle = () => {
      this.setState({toggle:!this.state.toggle})
  }
  render() {
      return (
        <>
            <div className="navbar-container">
              <div className="mobile-container">
                  <Link to='/' className='navbar-logo'>
                    <img src={Logo} alt="cakes by tara logo"></img>
                  </Link>

                  <button onClick={this.Toggle}>
                    <img src={NavMenu} alt="menu icon for mobile"></img>
                  </button>
                </div>
                  <ul className={this.state.toggle ? "nav-links show-nav" : "nav-links"}>
                    <li className='nav-item'>
                      <Link to='/About'> About </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/Services'> Menu </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/Gallery'> Gallery </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/Contact'> Contact </Link>
                    </li>
                  </ul>
            </div>
        </>
      );
  }
}

// import React, { useState, useEffect, Component } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.scss';

// import NavMenu from '../imgs/iconmonstr-menu.png';
// import Logo from '../imgs/cakelogo.png';


// function Navbar () {
//    const [showLinks, setShowLinks] = useState(false);


//   return (
//     <>
//       <nav className='navbar'>
//         <div className='navbar-container'>
//           <Link to='/' className='navbar-logo'>
//             <img src={Logo} alt="cakes by tara logo"></img>
//           </Link>
          
//           <div className="menu-btn">
//                 <button onClick={() => setShowLinks(!showLinks)}><img src={NavMenu} alt="menu icon for mobile"></img></button>
//               </div>
//           <ul className="menu" id={showLinks ? "hidden": ""}> 
//             <li className='nav-item'>
//               <Link to='/' className='nav-links'>
//                 Gallery
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link to='/services' className='nav-links'> About </Link>
//             </li>
//             <li className='nav-item'>
//               <Link to='/products' className='nav-links'> Menu </Link>
//             </li>
//             <li className='nav-item'>
//               <Link to='/products' className='nav-links'> Contact </Link>
//             </li>

//             </ul>
//         </div>
//       </nav>
//     </>
//   );

// }

// export default Navbar;