import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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
            <div className="dot-menu">
              <div className="inner">
                <div className="circle circle-one" />
                <div className="circle circle-two" />
                <div className="circle circle-three" />
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
    </>
  );
};
export default Navbar;
