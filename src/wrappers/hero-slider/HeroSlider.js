import React, { useEffect, useState } from "react";
import HeroSliderStatic from "../../components/hero-slider/HeroSliderStatic.js";
import WebService from '../../util/webService';
import constant from '../../util/constant';
const HeroSlider = ({ }) => {

  const [sliderText, setSliderText] = useState('')
  const [sliderImage, setSliderImage] = useState('')
  const [sliderData, setSliderData] = useState([])

  useEffect(() => {
    getBannerImage();
    getBannerText();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getBannerImage = async () => {
    setSliderImage('');
    //get slider default image
    //let action = constant.ACTION.CONTENT + constant.ACTION.IMAGES;
    //try {
      //console.log(action);
      //let response = await WebService.get(action);
      //console.log(response);
      //if (response) {
        //setSliderData(response.content);
        
      //}
    //} catch (error) {
    //}
  }
  const getBannerText = async () => {
    let action = constant.ACTION.CONTENT + constant.ACTION.BOXES + constant.ACTION.BANNER_TEXT;
    try {
      let response = await WebService.get(action);
      console.log(response);
      if (response) {
        setSliderText(response);
      }
    } catch (error) {
    }
  }
  return (
    <div className="site-blocks-cover">
      <div className="container">
      <HeroSliderStatic
        sliderText={sliderText}
        sliderImage={sliderImage}
      />
      </div>
    </div>
  );
};

export default HeroSlider;
