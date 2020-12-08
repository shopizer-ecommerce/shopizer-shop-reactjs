import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu, categories, contents }) => {
  console.log(categories)




  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
        } `}
    >
      <nav>
        <ul>
          <li>
            <Link to={"/"}>
              {strings["home"]}
            </Link>
          </li>
          {
            categories.map((item, index) => {
              return (
                item.visible &&
                <li key={index}>
                  <Link to={"/category/" + item.description.friendlyUrl}>{item.description.name}
                    {item.children && item.children.length > 0 ?
                      sidebarMenu ? (
                        <span>
                          <i className="fa fa-angle-right"></i>
                        </span>
                      ) : (
                          <i className="fa fa-angle-down" />
                        )
                      : ''
                    }

                  </Link>
                  {
                    item.children && item.children.length > 0 &&
                    <ul className="submenu">
                      {
                        item.children.map((submenu, index) => {
                          return (<li key={index}>
                            <Link to={"/category/" + submenu.description.friendlyUrl}>
                              {submenu.description.name}
                            </Link>
                          </li>)
                        })
                      }

                    </ul>
                  }
                </li>
              )
            })
          }
          {
            contents.map((content, index) => {
              return (
                content.displayedInMenu &&
                <li key={index}> <Link to={"/content/" + content.slug} >{content.name}</Link></li>
              )
            })
          }
          <li>
            <Link to={"/contact"}>
              {strings["contact_us"]}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object
};

export default multilanguage(NavMenu);
