import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer-area pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={500}
                data-aos-once="true"
              >
                <div className="widget-logo">
                  <a href="index.html">
                    <img src="assets/images/logo.png" alt="image" />
                  </a>
                </div>
                <p>To get exclusive updates and benefits.</p>
                <ul className="widget-social">
                  <li>
                    <a href="#" target="_blank">
                      <i className="ri-facebook-fill" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="ri-twitter-fill" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="ri-instagram-line" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="ri-linkedin-line" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget ps-5"
                data-aos="fade-up"
                data-aos-delay={60}
                data-aos-duration={600}
                data-aos-once="true"
              >
                <h3>Usefull Links</h3>
                <ul className="quick-links">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ's</a>
                  </li>
                  <li>
                    <a href="privacy-policy.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget ps-5"
                data-aos="fade-up"
                data-aos-delay={70}
                data-aos-duration={700}
                data-aos-once="true"
              >
                <h3>Quick Links</h3>
                <ul className="quick-links">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ's</a>
                  </li>
                  <li>
                    <a href="privacy-policy.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget"
                data-aos="fade-up"
                data-aos-delay={80}
                data-aos-duration={800}
                data-aos-once="true"
              >
                <h3>Contact Us</h3>
                <ul className="info-links">
                  <li>
                    <span>Support (USA) : +1 607 354 4284</span>
                  </li>
                  <li>
                    <span>Support (UK) : +44 1244 94 0789</span>
                  </li>
                  <li>
                    <span>Support(Sweden) : +46 40-693 98 96</span>
                  </li>
                  <li>
                    <span>Email:</span>support@hidmona.ch
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="copyright-area-content">
              <p>
                Copyright © 2022 Hidmona Money Transfer - All Rights Reserved
                <a href="#" target="_blank"></a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="go-top">
        <i className="ri-arrow-up-s-line" />
      </div>
    </>
  );
};

export default Footer;
