import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LanguageOption from "../FeatureComponents/LanguageOption";
import styles from '../../styles/LanguageOption.module.css';

const Header = (props) => {
  const [showLanguageOption, setShowLanguageOption] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();

  const handleLanguageOption = (lang) =>{
    setSelectedLanguage(lang);
  }


  const handleShowLanguageOption = () => {
    if(showLanguageOption){
      setShowLanguageOption(false);
    }
    else{
      setShowLanguageOption(true);
    }
  }

  return (
    <>
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
                <li >
                  <button
                    onClick={handleShowLanguageOption}
                    type="button"
                    className={styles.languageOptionButton}
                  >
                    <i className="ri-global-line" />{selectedLanguage}<i className="dropdown-toggle" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        { showLanguageOption && <LanguageOption onLanguageOptionData={handleLanguageOption}/>}
      </div>
    </>
  );
};
export default Header;
