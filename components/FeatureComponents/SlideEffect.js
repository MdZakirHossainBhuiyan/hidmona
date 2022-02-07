import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import slideOne from '../../public/assets/images/choose-3.jpg';
import slideTwo from '../../public/assets/images/hidmona_services_woman.jpg';
import slideThree from '../../public/assets/images/banner-bg.jpg';
import Image from 'next/image';

const SlideEffect = () => {
    const slideImages = [
        {
          url: slideOne,
          caption: 'Slide 1'
        },
        {
          url: slideTwo,
          caption: 'Slide 2'
        },
        {
          url: slideThree,
          caption: 'Slide 3'
        },
    ];

    return (
        <div>
            <div className="slide-container">
                <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div className="each-slide" key={index}>
                        <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                            <Image src={slideImage.url} alt='slider' width={1150} height={500} />
                            <span>{slideImage.caption}</span>
                            <p>{slideImage.caption} ban {index+2}</p>
                        </div>
                    </div>
                ))} 
                </Slide>
            </div>
        </div>
    );
};

export default SlideEffect;