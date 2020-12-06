import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import sliderData from "../../data/hero-sliders/scroll-slider.json";
import { SectionsContainer, Section, Header } from "react-fullpage";
import HeaderOne from "../../wrappers/header/HeaderOne";

const HomeOnepageScroll = () => {
  const anchors = [];
  sliderData.forEach(element => {
    anchors.push(element.id);
  });
  const options = {
    activeClass: "active", // the class that is appended to the sections links
    anchors: anchors, // the anchors for each sections
    arrowNavigation: false, // use arrow keys
    className: "SectionsContainer", // the class name for the section container
    delay: 1000, // the scroll animation speed
    navigation: true, // use dots navigatio
    scrollBar: false, // use the browser default scrollbar
    sectionClassName: "Section", // the section class name
    sectionPaddingTop: "0", // the section top padding
    sectionPaddingBottom: "0", // the section bottom padding
    verticalAlign: true // align the content of each section vertical
  };
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Fashion Home</title>
        <meta
          name="description"
          content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <div className="fullpage-slider-wrapper">
        <Header>
          <HeaderOne
            layout="container-fluid"
            headerPaddingClass="header-padding-1"
            headerBgClass="bg-white"
          />
        </Header>
        <SectionsContainer {...options} className="bg-purple-2">
          {sliderData &&
            sliderData.map((single, key) => {
              return (
                <Section key={key}>
                  <div className="slider-section flone-fp-section">
                    <div className="container">
                      <div className="row fullpage-slider-wrap-mrg">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex align-items-center">
                          <div className="slider-content-11 slider-animated-1 fullpage-slider-mrg fullpage-content">
                            <h3 className="animated">{single.title}</h3>
                            <h1
                              className="animated"
                              dangerouslySetInnerHTML={{
                                __html: single.subtitle
                              }}
                            />
                            <div className="slider-btn-11 btn-hover">
                              <Link
                                className="animated"
                                to={process.env.PUBLIC_URL + single.url}
                              >
                                SHOP NOW
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="slider12-img-1 slider-animated-1">
                            <img
                              className="animated"
                              alt=""
                              src={process.env.PUBLIC_URL + single.image}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Section>
              );
            })}
        </SectionsContainer>
      </div>
    </Fragment>
  );
};

export default HomeOnepageScroll;
