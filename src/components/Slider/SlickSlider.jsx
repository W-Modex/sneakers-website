import React, { useRef, useState, useEffect } from 'react';
import Slider from "react-slick";
import firstImg from "../../assets/images/image-product-1.jpg";
import secondImg from "../../assets/images/image-product-2.jpg";
import thirdImg from "../../assets/images/image-product-3.jpg";
import fourthImg from "../../assets/images/image-product-4.jpg";
import iconNext from '../../assets/images/icon-next.svg';
import iconPrevious from '../../assets/images/icon-previous.svg';
import './responsiveSlider.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleThumbnail } from '../../store/thumbnailSlice';

function SlickSlider() {
  let sliderRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const images = [firstImg, secondImg, thirdImg, fourthImg]
  const dispatch = useDispatch();
  const showThumbnail = useSelector(state => state.thumbnail.showThumbnail)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const next = () => {
    sliderRef.slickNext();
  };
  
  const previous = () => {
    sliderRef.slickPrev();
  };

  const handleThumbnail = () => {
    dispatch(toggleThumbnail({showThumbnail}))
  }
  
  var settings = {
    dots: windowWidth > 1024 ? true : false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'responsiveSlider max-h-[400px] md:max-h-[600px]',
    dotsClass: "slick-dots",
    customPaging: i => {
      if (windowWidth > 1024) {
        return (
            <img src={images[i]} />
        );
      }
    }    
  };
  
  return (
    <div className="slider-container xl:-translate-x-20 max-w-full overflow-hidden lg:overflow-visible left-0 right-0 mx-auto">
      <img src={iconPrevious} className={`absolute cursor-pointer hover:scale-95 top-[30%] md:top-[40%] left-2 transform -translate-y-1/2 z-30 w-10 p-4 bg-white rounded-[50%] ${showThumbnail ? 'lg:translate-y-4' : 'lg:hidden'}`} onClick={previous} />
      <Slider ref={slider => { sliderRef = slider; }} {...settings}>
        <div>
          <img src={firstImg} className='lg:rounded-xl cursor-pointer' onClick={handleThumbnail}/>
        </div>
        <div>
          <img src={secondImg} className='lg:rounded-xl cursor-pointer' onClick={handleThumbnail}/>
        </div>
        <div>
          <img src={thirdImg} className='lg:rounded-xl cursor-pointer' onClick={handleThumbnail}/>
        </div>
        <div>
          <img src={fourthImg} className='lg:rounded-xl cursor-pointer' onClick={handleThumbnail}/>
        </div>
      </Slider>
      <img src={iconNext} onClick={next} className={`absolute cursor-pointer hover:scale-95 top-[30%] md:top-[40%] right-2 transform -translate-y-1/2 z-30 w-10 p-4 bg-white rounded-[50%] ${showThumbnail ? 'lg:translate-y-4' : 'lg:hidden'}`} />
    </div>
  );
}

export default SlickSlider;