import PropTypes from "prop-types";
import React from "react";
const HeroSliderStatic = ({ string, pitch1, pitch2, pitch3, sliderText, sliderImage }) => {
  return (
<div className="acceuil">
<div className="row">
      <div className="col-md-8 col-sm-12">
          <img src="assets/img/slider/F45-Website-1.jpg" alt="Image" className="img-fluid"/>
      </div>
      <div className="col-md-4 col-sm-12">
      <h2>Perfecto poele et foyer</h2>
      <h4>Ventes et installations de poeles et foyers</h4>
      </div>
    </div>
</div>


    

  );
};

HeroSliderStatic.propTypes = {
  pitch1: PropTypes.string,
  pitch2: PropTypes.string,
  pitch3: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string
};

export default HeroSliderStatic;
