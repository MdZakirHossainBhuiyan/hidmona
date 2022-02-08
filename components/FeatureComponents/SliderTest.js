import styles from '../../styles/SliderTest.module.css';

const SliderTest = (props) => {
    const {mainSliderContainer, sliderIcon, left, right, slider, sliderCard} = styles;

    const slides = [1,2,3,4,5,6,7,8];

    const slideRotation = (direction) => {
        if(direction==='left'){
            var sliderRotation = document.getElementById("sliderRotation");
            sliderRotation.scrollLeft = sliderRotation.scrollLeft + 570;
        }
        else if(direction==='right'){
            var sliderRotation = document.getElementById("sliderRotation");
            sliderRotation.scrollLeft = sliderRotation.scrollLeft - 570;
        }
    }

    return (
        <div className={mainSliderContainer}>
            <div onClick={() => slideRotation('left')} className={`${sliderIcon} ${left}`}>l</div>
            <div className={slider} id="sliderRotation">
                {
                    slides.map((slide, index) => {
                        return (
                            <div className={sliderCard}>
                                <p>{index}</p>
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