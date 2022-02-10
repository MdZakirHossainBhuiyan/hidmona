import { useEffect } from 'react';
import styles from '../../styles/SliderTest.module.css';
import meher from "../../public/assets/images/meher.jpg";
import meherul from "../../public/assets/images/meherul.jpeg";
import tusher from "../../public/assets/images/review-2.jpg";
import sabina from "../../public/assets/images/review-1.jpg";
import quote from '../../public/assets/images/quote-icon.png';
import Image from 'next/image';

const SliderTest = (props) => {
    const {mainSliderContainer, sliderIcon, left, right, slider, sliderCard, reviewRating, starStyle, cardDescription, clientImage, clientInfo, personalInfo} = styles;

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

    // const slideRotation = (direction) => {
    //     if(direction==='left'){
    //         var sliderRotation = document.getElementById("sliderRotation");
    //         sliderRotation.scrollLeft = sliderRotation.scrollLeft + 570;
    //     }
    //     else if(direction==='right'){
    //         var sliderRotation = document.getElementById("sliderRotation");
    //         sliderRotation.scrollLeft = sliderRotation.scrollLeft - 570;
    //     }
    // }

    useEffect(() => {
        let moveForward = true;
        let count = 0;
        setInterval(() => {
            if(moveForward){
                var sliderRotation = document.getElementById("sliderRotation");
                sliderRotation.scrollLeft += 569;
                count++;
                if(count==3){
                    moveForward = false;
                }
            }
            else{
                var sliderRotation = document.getElementById("sliderRotation");
                sliderRotation.scrollLeft -= 569;
                count--;
                if(count==0){
                    moveForward = true;
                }
            }
        }, 3000);
    }, []);

    return (
        <div className={mainSliderContainer}>
            <div onClick={() => slideRotation('left')} className={`${sliderIcon} ${left}`}>l</div>
            <div className={slider} id="sliderRotation">
                {
                    slidesData.map((slide, index) => {
                        return (
                            <div className={sliderCard}>
                                <ul className={reviewRating}>
                                    <li className={starStyle}>
                                        <i className="ri-star-line" />
                                    </li>
                                    <li className={starStyle}>
                                        <i className="ri-star-line" />
                                    </li>
                                    <li className={starStyle}>
                                        <i className="ri-star-line" />
                                    </li>
                                    <li className={starStyle}>
                                        <i className="ri-star-line" />
                                    </li>
                                    <li className={starStyle}>
                                        <i className="ri-star-line" />
                                    </li>
                                </ul>
                                <div className={cardDescription}>
                                    {/* <span>{slide.review}</span> */}
                                </div>
                                <div className={clientInfo}>
                                    <div className={personalInfo}>
                                        <div>
                                            <Image className={clientImage} src={slide.clientImage} alt="image" width={50} height={50}/>
                                        </div>
                                        <div>
                                            <h3>{slide.clientName}</h3>
                                            <span>{slide.clientStatus}</span>
                                        </div>
                                    </div>
                                    <div className="reviewquote-image">
                                        <img src="assets/images/quote-icon.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div onClick={() => slideRotation('right')} className={`${sliderIcon} ${right}`}>r</div>
        </div>
    );
};

export default SliderTest;