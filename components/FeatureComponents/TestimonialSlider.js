import meher from "../../public/assets/images/meher.jpg";
import meherul from "../../public/assets/images/meherul.jpeg";
import tusher from "../../public/assets/images/review-2.jpg";
import sabina from "../../public/assets/images/review-1.jpg";
import Image from "next/image";

const TestimonialSlider = () => {

  const slidesData = [
    {
      "clientName": "Meherul",
      "clientStatus": "Member",
      "clientImage": meherul,
      "review": "Vitae cras leo tellus lectus non fusce tate nibh massa. Quis ut odio quam in lorem nam felis sed. Eleifend euismod vitae parturient libero. Magna in parturient congue aliquam egestas."
    },
    {
      "clientName": "Meher",
      "clientStatus": "Leader",
      "clientImage": meher,
      "review": "Vitae cras leo tellus lectus non fusce tate nibh massa. Quis ut odio quam in lorem nam felis sed. Eleifend euismod vitae parturient libero. Magna in parturient congue aliquam egestas."
    },
    {
      "clientName": "Tusher Imran",
      "clientStatus": "Client",
      "clientImage": tusher,
      "review": "Vitae cras leo tellus lectus non fusce tate nibh massa. Quis ut odio quam in lorem nam felis sed. Eleifend euismod vitae parturient libero. Magna in parturient congue aliquam egestas."
    },
    {
      "clientName": "Sabina",
      "clientStatus": "Client",
      "clientImage": sabina,
      "review": "Vitae cras leo tellus lectus non fusce tate nibh massa. Quis ut odio quam in lorem nam felis sed. Eleifend euismod vitae parturient libero. Magna in parturient congue aliquam egestas."
    },
  ]

  return (
    <div className="review-slides-two owl-carousel owl-theme">
      {
        slidesData.map((slide, index) => {
          return (
            <div className="single-review-card" data-aos="fade-up" data-aos-delay={50} data-aos-duration={500} data-aos-once="true" >
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
                {slide.review}
              </p>
              <div className="review-info">
                <Image src={slide.clientImage} alt="image" />
                <h3>{slide.clientName}</h3>
                <span>{slide.clientStatus}</span>
              </div>
              <div className="reviewquote-image">
                <img src="assets/images/quote-icon.png" alt="image" />
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default TestimonialSlider;
