import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowLogin = () => {
    showButtons?setShowButtons(false):setShowButtons(true);
  }

  const handleShowMenu = () => {
    showNavbar?setShowNavbar(false):setShowNavbar(true);
  }

  return (
    <>
      <div className="navbar-area">

        <div className="main-responsive-nav">
          <div className="container">
            <div className="main-responsive-menu">
              <div className="logo">
                <a href="index.html">
                  <Image src="/assets/images/logo.png" alt="Hidmona"  width={300} height={100}/>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="main-navbar">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="index.html">
              <Image src="/assets/images/logo.png" alt="Hidmona"  width={300} height={100}/>
              </a>
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      {" "}
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="others-options d-flex align-items-center">
                  <div className="option-item">
                    <a href="login.html" className="optional-btn">
                      Log In
                    </a>
                  </div>
                  <div className="option-item">
                    <a href="register.html" className="default-btn">
                      signUp Now
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="others-option-for-responsive">
          <div className="container">
            <div style={{"display": "flex"}}>
              <div onClick={handleShowLogin} className="dot-menu" style={{"marginRight": "30px"}}>
                <div className="inner">
                  <div className="circle circle-one" />
                  <div className="circle circle-two" />
                  <div className="circle circle-three" />
                </div>
              </div>
              <div onClick={handleShowMenu} className="dot-menu">
                <p style={{"width": "25px", "height": "25px"}}><FontAwesomeIcon icon={faBars} /></p>
              </div>
            </div>

            
            
            <div className="container">
              <div className="option-inner">
                <div className="others-options d-flex align-items-center">
                  <div className="option-item">
                    <a href="login.html" className="optional-btn">
                      Log In
                    </a>
                  </div>
                  <div className="option-item">
                    <a href="register.html" className="default-btn">
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {showButtons && 
        <div className="container">
          <div className="option-inner">
            <div className="others-options d-flex align-items-center">
              <div className="option-item">
                <a href="login.html" className="optional-btn">
                  Log In
                </a>
              </div>
              <div className="option-item">
                <a href="register.html" className="default-btn">
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      }
      {
        showNavbar &&
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      }
    </>
  );
};
export default Navbar;
