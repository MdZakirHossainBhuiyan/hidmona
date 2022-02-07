import Head from "next/head";
import Image from "next/image";
import TestimonialSlider from "../components/FeatureComponents/TestimonialSlider";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <div className="main-hero-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div
              className="col-lg-4 col-md-12"
              data-aos="fade-left"
              data-aos-delay={50}
              data-aos-duration={500}
              data-aos-once="true"
            >
              <form className="money-transfer-form-two">
                <div className="money-transfer-content">
                  <div className="form-group">
                    <label>You Send</label>
                    <input
                      type="text"
                      className="form-control"
                      autoComplete="off"
                      defaultValue="1,000"
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
                        <a className="dropdown-item" href="#">
                          <img src="assets/images/USD.png" alt="flag" />
                          USD
                        </a>
                        <a className="dropdown-item" href="#">
                          <img src="assets/images/GBP.png" alt="flag" />
                          GBP
                        </a>
                        <a className="dropdown-item" href="#">
                          <img src="assets/images/EUR.png" alt="flag" />
                          EUR
                        </a>
                        <a className="dropdown-item" href="#">
                          <img src="assets/images/AED.png" alt="flag" />
                          AED
                        </a>
                        <a className="dropdown-item" href="#">
                          <img src="assets/images/AUD.png" alt="flag" />
                          AUD
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
                        <i className="ri-pause-line" /> <span>1,147 GBP</span>
                      </div>
                      <div className="info-right">
                        <span>Ammount Will Convert</span>
                      </div>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <div className="info-icon">
                        <i className="ri-close-fill" /> <span>1.0539874 </span>
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
                      defaultValue="1,024.25"
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
            <div
              className="col-lg-8 col-md-12"
              data-aos="fade-right"
              data-aos-delay={50}
              data-aos-duration={500}
              data-aos-once="true"
            >
              <div className="main-hero-content">
                <h1>Send &amp; Receive Money</h1>
                <h2 style={{ color: "#fff" }}>
                  Quickly, safely and easily with Hidmona.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="global-transfers-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2>Why should you choose Hidmona Money Transfer?</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-global-transfers-card"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={500}
                data-aos-once="true"
              >
                <div className="icon">
                  <i className="flaticon-envelope" />
                </div>
                <h3>Low Transfer Fee</h3>
                <p>Fair fees on your money transfer services.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-global-transfers-card"
                data-aos="fade-up"
                data-aos-delay={60}
                data-aos-duration={600}
                data-aos-once="true"
              >
                <div className="icon">
                  <i className="flaticon-money-transfer" />
                </div>
                <h3>Full Geographical Coverage</h3>
                <p>We have pay-out locations in all major cities.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-global-transfers-card"
                data-aos="fade-up"
                data-aos-delay={70}
                data-aos-duration={700}
                data-aos-once="true"
              >
                <div className="icon">
                  <i className="flaticon-income" />
                </div>
                <h3>Fast &amp; Secure</h3>
                <p>Send money to family &amp; friends within minutes.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-global-transfers-card"
                data-aos="fade-up"
                data-aos-delay={80}
                data-aos-duration={800}
                data-aos-once="true"
              >
                <div className="icon">
                  <i className="flaticon-conversion" />
                </div>
                <h3>Convert And Hold Currencies</h3>
                <p>Convert And Hold Currencies nim etus arcu porta viverra.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="why-choose-us-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="why-choose-us-content with-padding-left"
                data-aos="fade-left"
                data-aos-delay={50}
                data-aos-duration={500}
                data-aos-once="true"
              >
                <h3>We provide the following services</h3>
                <ul className="choose-us-list">
                  <li>
                    <i className="ri-checkbox-circle-line" />
                    International Money Transfer
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-line" />
                    Cash and account remittances
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-line" />
                    Online Portal and Mobile app for ease of use
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-image">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-sm-6">
                    <div
                      className="choose-image"
                      data-aos="fade-down"
                      data-aos-delay={50}
                      data-aos-duration={500}
                      data-aos-once="true"
                    >
                      <img
                        src="assets/images/hidmona_services_woman.jpg"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div
                      className="choose-image mb-25"
                      data-aos="fade-left"
                      data-aos-delay={50}
                      data-aos-duration={500}
                      data-aos-once="true"
                    >
                      <img src="assets/images/choose-3.jpg" alt="image" />
                    </div>
                    <div
                      className="choose-image"
                      data-aos="fade-up"
                      data-aos-delay={50}
                      data-aos-duration={500}
                      data-aos-once="true"
                    >
                      <img
                        src="assets/images/hidmona_services_woman.jpg"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="review-area bg-F4F5F5 ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>What Our Customers Says</h2>
          </div>
          <TestimonialSlider />
        </div>
      </div>

      <div className="app-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="app-content"
                data-aos="fade-right"
                data-aos-delay={50}
                data-aos-duration={500}
                data-aos-once="true"
              >
                <h3>Download Our Mobile App</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Volutpat nisl bibendum vitae consequat. Nisl ut sed accumsan.
                </p>
                <div className="app-btn-box">
                  <a href="#" className="appstore-btn" target="_blank">
                    <img src="assets/images/app-store.png" alt="image" />
                  </a>
                  <a href="#" className="google-btn" target="_blank">
                    <img
                      src="assets/images/google-play-store.png"
                      alt="image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="app-image"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={500}
                data-aos-once="true"
              >
                <img src="assets/images/app.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
