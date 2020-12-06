import PropTypes from "prop-types";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import ProductSliderFive from "./ProductSliderFive";

const TabProductTwenty = ({
  spaceTopClass,
  spaceBottomClass,
  category,
  productTabClass,
  productGridStyleClass
}) => {
  return (
    <div
      className={`product-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <Tab.Container defaultActiveKey="bestSeller">
          <Nav
            variant="pills"
            className={`product-tab-list-7 justify-content-center mb-60 ${
              productTabClass ? productTabClass : ""
            }`}
          >
            <Nav.Item>
              <Nav.Link eventKey="newArrival">
                <h4>New Arrivals</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="bestSeller">
                <h4>Best Sellers</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="saleItems">
                <h4>Sale Items</h4>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="newArrival">
              <ProductSliderFive
                category={category}
                type="new"
                spaceBottomClass="mb-25"
                productGridStyleClass={productGridStyleClass}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="bestSeller">
              <ProductSliderFive
                category={category}
                type="bestSeller"
                spaceBottomClass="mb-25"
                productGridStyleClass={productGridStyleClass}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="saleItems">
              <ProductSliderFive
                category={category}
                type="saleItems"
                spaceBottomClass="mb-25"
                productGridStyleClass={productGridStyleClass}
              />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

TabProductTwenty.propTypes = {
  category: PropTypes.string,
  productTabClass: PropTypes.string,
  productGridStyleClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default TabProductTwenty;
