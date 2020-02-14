import React from "react";

// Images
import Logo from "../../assets/images/Logo_Bronte_Village.png";

const Navbar = () => { 
  return(
       <nav className="navbar">     
        <a
          className="navbar-brand"
          href="https://www.brontevillageapartments.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Logo}
            alt="Logo"
            style={{
              width:'150px',
              marginLeft: '15px'
            }}
          />
        </a>
      </nav>
  )
}


export default Navbar