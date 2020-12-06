import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavMenu from "../../components/header/NavMenu";
import IconGroup from "../../components/header/IconGroup";
import MobileMenu from "../../components/header/MobileMenu";

const HeaderFour = () => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".sticky-bar");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header
      className={`header-area sticky-bar header-padding-3 header-res-padding clearfix transparent-bar ${
        scroll > headerTop ? "stick" : ""
      }`}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-6 d-none d-lg-block">
            {/* Nav menu */}
            <NavMenu menuWhiteClass="menu-white" />
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-4">
            <div className="logo text-center logo-hm5">
              <Link className="sticky-none" to={process.env.PUBLIC_URL + "/"}>
                <img alt="" src="assets/img/logo/logo-2.png" />
              </Link>
              <Link className="sticky-block" to={process.env.PUBLIC_URL + "/"}>
                <img alt="" src="assets/img/logo/logo.png" />
              </Link>
            </div>
          </div>
          <div className="col-xl-5 col-lg-4 col-md-6 col-8">
            {/* Icon group */}
            <IconGroup iconWhiteClass="header-right-wrap-white" />
          </div>
        </div>
        {/* mobile menu */}
        <MobileMenu />
      </div>
    </header>
  );
};

export default HeaderFour;
