import { useEffect } from 'react';
import styles from '../../styles/SliderTest.module.css';
import imgOne from '../../public/assets/images/meherul.jpeg';
import imgTwo from '../../public/assets/images/meher.jpg';
import quote from '../../public/assets/images/quote-icon.png';

const SliderTest = (props) => {
    const {mainSliderContainer, sliderIcon, left, right, slider, sliderCard} = styles;

    const slides = [
        {
            "star": 5,
            "description": "Vitae cras leo tellus lectus non fusce tate nibh massa. Quis ut odio quam in lorem nam felis sed. Eleifend euismod vitae parturient libero. Magna in parturient congue aliquam egestas.",
            "image": imgOne,
            "name": "Meherul",
            "status": "Member",
            "quote": quote,
        },
        {
            "star": 4,
            "description": "Vitae cras leo tellus lectus non fusce tate nibh massa. Quis ut odio quam in lorem nam felis sed. Eleifend euismod vitae parturient libero. Magna in parturient congue aliquam egestas.",
            "image": imgTwo,
            "name": "Meher",
            "status": "Leader",
            "quote": quote,
        },
    ];

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
                if(count==6){
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
                    slides.map((slide, index) => {
                        return (
                            <div className={sliderCard}>
                                
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