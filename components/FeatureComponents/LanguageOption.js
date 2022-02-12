import React, { useState } from "react";
import styles from "../../styles/LanguageOption.module.css";

const LanguageOption = (props) => {
    const [language, setLanguage] = useState('English');

    const handleLanguage = (lang) =>{
        setLanguage(lang);
    }

    props.onLanguageOptionData(language);

    return (
        <div className={styles.languageOptionBody}>  
            <a onClick={() => handleLanguage('English')} className={styles.dropdownItem} href="#">
                <img src="assets/images/uk.png" className={styles.flagStyle} alt="flag" />
              English
            </a>
            <a onClick={() => handleLanguage('简体中文')} className={styles.dropdownItem} href="#">
                <img src="assets/images/china.png" className={styles.flagStyle} alt="flag" />
              简体中文
            </a>
            <a onClick={() => handleLanguage('العربيّة')} className={styles.dropdownItem} href="#">
                <img src="assets/images/uae.png" className={styles.flagStyle} alt="flag" />
              العربيّة
            </a>
        </div>
    );
};

export default LanguageOption;
