import React, { useState } from "react";

const LanguageOption = () => {
  const [language, setLanguage] = useState('English');

  const handleLanguage = (lang) =>{
      setLanguage(lang);
      console.log("selected language: ", language);
  }

  return (
    <div className="dropdown-menu language-dropdown-menu">
      <a onClick={() => handleLanguage('English')} className="dropdown-item" href="#">
        <img src="assets/images/uk.png" alt="flag" />
        English
      </a>
      <a onClick={() => handleLanguage('简体中文')} className="dropdown-item" href="#">
        <img src="assets/images/china.png" alt="flag" />
        简体中文
      </a>
      <a onClick={() => handleLanguage('العربيّة')} className="dropdown-item" href="#">
        <img src="assets/images/uae.png" alt="flag" />
        العربيّة
      </a>
    </div>
  );
};

export default LanguageOption;
