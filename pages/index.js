import Head from "next/head";
import Image from "next/image";
import CurrencyForm from "../components/FeatureComponents/CurrencyForm";
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
              <CurrencyForm />
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
