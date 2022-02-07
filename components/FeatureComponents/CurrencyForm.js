import React, { useState } from "react";

const CurrencyForm = () => {
    const [currencyType, setCurrencyType] = useState('usd');
    let applyFee;

    const writeAmount = (convertedAmount, rate) => {
        document.getElementById('convertedAmount').innerText = convertedAmount;
        document.getElementById('convertedAmountRate').innerText = rate;
        document.getElementById('recipientGetAmount').value = convertedAmount;
    }

    const handleChange = (e) =>{
        let sendValue = e.target.value;

        if(sendValue>5){
            applyFee = sendValue - 2.07;
        }
        else{
            applyFee = 0;
        }

        var convertedAmount;

        if(currencyType === 'usd'){
            convertedAmount = applyFee * 10;
            writeAmount(convertedAmount, 10);
        }
        else if(currencyType === 'gbp'){
            convertedAmount = applyFee * 20;
            writeAmount(convertedAmount, 20);
        }
        else if(currencyType === 'eur'){
            convertedAmount = applyFee * 30;
            writeAmount(convertedAmount, 30);
        }
        else if(currencyType === 'aed'){
            convertedAmount = applyFee * 40;
            writeAmount(convertedAmount, 40);
        }
        else if(currencyType === 'aud'){
            convertedAmount = applyFee * 50;
            writeAmount(convertedAmount, 50);
        }
        else if(currencyType === 'cad'){
            convertedAmount = applyFee * 60;
            writeAmount(convertedAmount, 60);
        }
        else if(currencyType === 'jpy'){
            convertedAmount = applyFee * 70;
            writeAmount(convertedAmount, 70);
        }
        else if(currencyType === 'myr'){
            convertedAmount = applyFee * 80;
            writeAmount(convertedAmount, 80);
        }
        else if(currencyType === 'nzd'){
            convertedAmount = applyFee * 90;
            writeAmount(convertedAmount, 90);
        }
        else if(currencyType === 'try'){
            convertedAmount = applyFee * 100;
            writeAmount(convertedAmount, 100);
        }
    }

    const handleCurrency = (type) => {
        setCurrencyType(type);
    }

    return (
        <div>
            <form className="money-transfer-form-two">
                <div className="money-transfer-content">
                    <div className="form-group">
                        <label>You Send</label>
                        <input
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        
                        />
                        <div className="dropdown amount-currency-select">
                            <button
                                className="dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                            >
                            <img src="assets/images/USD.png" alt="flag" />
                            <span className="currency-name" />
                            </button>

                            <div className="dropdown-menu currency-dropdown-menu">
                                <a onClick={() => handleCurrency('usd')} className="dropdown-item" href="#">
                                    <img src="assets/images/USD.png" alt="flag" />
                                USD
                                </a>

                                <a onClick={() => handleCurrency('gbp')} className="dropdown-item" href="#">
                                    <img src="assets/images/GBP.png" alt="flag" />
                                GBP
                                </a>
                                <a onClick={() => handleCurrency('eur')} className="dropdown-item" href="#">
                                    <img src="assets/images/EUR.png" alt="flag" />
                                EUR
                                </a>
                                <a onClick={() => handleCurrency('aed')} className="dropdown-item" href="#">
                                    <img src="assets/images/AED.png" alt="flag" />
                                AED
                                </a>
                                <a onClick={() => handleCurrency('aud')} className="dropdown-item" href="#">
                                    <img src="assets/images/AUD.png" alt="flag" />
                                AUD
                                </a>
                                <a onClick={() => handleCurrency('cad')} className="dropdown-item" href="#">
                                    <img src="assets/images/CAD.png" alt="flag" />
                                CAD
                                </a>
                                <a onClick={() => handleCurrency('jpy')} className="dropdown-item" href="#">
                                    <img src="assets/images/JPY.png" alt="flag" />
                                JPY
                                </a>
                                <a onClick={() => handleCurrency('myr')} className="dropdown-item" href="#">
                                    <img src="assets/images/MYR.png" alt="flag" />
                                MYR
                                </a>
                                <a onClick={() => handleCurrency('nzd')} className="dropdown-item" href="#">
                                    <img src="assets/images/NZD.png" alt="flag" />
                                NZD
                                </a>
                                <a onClick={() => handleCurrency('try')} className="dropdown-item" href="#">
                                    <img src="assets/images/TRY.png" alt="flag" />
                                TRY
                                </a>
                            </div>
                        </div>
                    </div>
                    <ul className="amount-currency-info">
                        <li className="d-flex justify-content-between align-items-center">
                            <div className="info-icon">
                                <i className="ri-subtract-line" /> <span>2.07 GBP</span>
                            </div>
                            <div className="info-right">
                                <span>Fee</span>
                            </div>
                        </li>
                        <li className="d-flex justify-content-between ">
                            <div className="info-icon">
                                <i className="ri-pause-line" /> <span id="convertedAmount"></span>
                            </div>
                            <div className="info-right">
                                <span>Ammount Will Convert</span>
                            </div>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                            <div className="info-icon">
                                <i className="ri-close-fill" /> <span id="convertedAmountRate"> </span>
                            </div>
                            <div className="info-right">
                                <span>Rate</span>
                            </div>
                        </li>
                    </ul>

                    <div className="form-group">
                        <label>Recipient Gets</label>
                        <input
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        id="recipientGetAmount"
                        />
                        <div className="dropdown amount-currency-select">
                            <button
                                className="dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                            >
                                <img src="assets/images/AUD.png" alt="flag" />
                                <span className="currency-name" />
                            </button>
                            <div className="dropdown-menu currency-dropdown-menu">
                                <a className="dropdown-item" href="#">
                                    <img src="assets/images/AUD.png" alt="flag" />
                                AUD
                                </a>
                                <a className="dropdown-item" href="#">
                                    <img src="assets/images/EUR.png" alt="flag" />
                                EUR
                                </a>
                                <a className="dropdown-item" href="#">
                                    <img src="assets/images/GBP.png" alt="flag" />
                                GBP
                                </a>
                                <a className="dropdown-item" href="#">
                                    <img src="assets/images/AED.png" alt="flag" />
                                AED
                                </a>
                                <a className="dropdown-item" href="#">
                                    <img src="assets/images/CAD.png" alt="flag" />
                                CAD
                                </a>
                                <a className="dropdown-item" href="#">
                                    <img src="assets/images/JPY.png" alt="flag" />
                                JPY
                                </a>
                                <a className="dropdown-item" href="#">
                                    <img src="assets/images/MYR.png" alt="flag" />
                                MYR
                                </a>
                                <a className="dropdown-item" href="#">
                                    <img src="assets/images/NZD.png" alt="flag" />
                                NZD
                                </a>
                                <a className="dropdown-item" href="#">
                                    <img src="assets/images/TRY.png" alt="flag" />
                                TRY
                                </a>
                                <a className="dropdown-item" href="#">
                                    <img src="assets/images/USD.png" alt="flag" />
                                USD
                                </a>
                            </div>
                        </div>
                        <div className="lock-icon">
                        <i className="ri-lock-line" />
                        </div>
                    </div>
                <div className="amount-delivery-time" />
                    <ul className="amount-btn-group">
                        <li>
                            <a
                                href="send-money.html"
                                className="optional-btn"
                                style={{ width: 255 }}
                            >
                                Get Started
                            </a>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    );
};

export default CurrencyForm;
