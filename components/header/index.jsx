import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LanguageOption from "../FeatureComponents/LanguageOption";

const Header = () => {
  // const [showLanguageOption, setShowLanguageOption] = useState(false);

  // console.log("state value: ", showLanguageOption);

  // const handleShowLanguageOption = () => {
  //   console.log("showing before");
  //   showLanguageOption?setShowLanguageOption(false):setShowLanguageOption(true);
  //   console.log("showing after");
  // }

  return (
    <div className="topbar-area">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <ul className="topbar-information">
              <li>
                <a href="tel:+1 607 354 4284">+1 607 354 4284</a>
              </li>
              <li>
                <span style={{ color: "#fff" }}>support@hidmona.ch</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-6">
            <ul className="topbar-action">
              <li>
                <a href="#">Help</a>
              </li>
              <li className="dropdown language-option">
                <button
                  // onClick={handleShowLanguageOption}
                  className="dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="ri-global-line" />
                  <span className="lang-name" />
                </button>

                {/* { showLanguageOption && <LanguageOption /> } */}
                <LanguageOption />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
