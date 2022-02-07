import React from "react";

const TestimonialSlider = () => {
  return (
    <div className="review-slides-two owl-carousel owl-theme">
      <div
        className="single-review-card"
        data-aos="fade-up"
        data-aos-delay={50}
        data-aos-duration={500}
        data-aos-once="true"
      >
        <ul className="review-rating">
          <li>
            <i className="ri-star-line" />
          </li>
          <li>
            <i className="ri-star-line" />
          </li>
          <li>
            <i className="ri-star-line" />
          </li>
          <li>
            <i className="ri-star-line" />
          </li>
          <li>
            <i className="ri-star-line" />
          </li>
        </ul>
        <p>
          Vitae cras leo tellus lectus non fusce tate nibh massa. Quis ut odio
          quam in lorem nam felis sed. Eleifend euismod vitae parturient libero.
          Magna in parturient congue aliquam egestas.
        </p>
        <div className="review-info">
          <img src="assets/images/meherul.jpeg" alt="image" />
          <h3>Meherul</h3>
          <span>Member</span>
        </div>
        <div className="reviewquote-image">
          <img src="assets/images/quote-icon.png" alt="image" />
        </div>
      </div>
      <div
        className="single-review-card"
        data-aos="fade-up"
        data-aos-delay={60}
        data-aos-duration={600}
        data-aos-once="true"
      >
        <ul className="review-rating">
          <li>
            <i className="ri-star-line" />
          </li>
          <li>
            <i className="ri-star-line" />
          </li>
          <li>
            <i className="ri-star-line" />
          </li>
          <li>
            <i className="ri-star-line" />
          </li>
          <li>
            <i className="ri-star-line" />
          </li>
        </ul>
        <p>
          Vitae cras leo tellus lectus non fusce tate nibh massa. Quis ut odio
          quam in lorem nam felis sed. Eleifend euismod vitae parturient libero.
          Magna in parturient congue aliquam egestas.
        </p>
        <div className="review-info">
          <img src="assets/images/meher.jpg" alt="image" />
          <h3>Meher</h3>
          <span>Leader</span>
        </div>
        <div className="reviewquote-image">
          <img src="assets/images/quote-icon.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
