import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";
import { connect } from "react-redux";
import { setCategoryID } from "../../../redux/actions/productActions";
import { setContent } from "../../../redux/actions/contentAction";
const MobileNavMenu = ({ strings, categories, contents, setCategoryID, setContent }) => {
  const onClickCategory = (item) => {
    setCategoryID(item.id)
  }
  const onClickContent = (item) => {
    setContent(item)
  }
  // console.log(contents);
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item">
          <Link to={"/"}>Home</Link>
        </li>

        {
          categories.map((item, index) => {

            return item.visible && <li className="menu-item-has-children" key={index}>
              <Link to={"/category/" + item.description.friendlyUrl} onClick={() => onClickCategory(item)}>
                {item.description.name}
              </Link>
              {
                item.children && item.children.length > 0 &&
                <ul className="sub-menu">
                  {
                    item.children.map((submenu, j) => {
                      return (
                        <li className="menu-item-has-children" key={j}>
                          <Link to={"/category/" + submenu.description.friendlyUrl} onClick={() => onClickCategory(submenu)}>
                            {strings[submenu.description.name] ? strings[submenu.description.name] : submenu.description.name}
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>
              }
            </li>

          })
        }
        {
          contents.map((content, index) => {
            return (
              content.displayedInMenu &&
              <li key={index}> <Link to={"/content/" + content.slug} onClick={() => onClickContent(content.code)}> {strings[content.name] ? strings[content.name] : content.name}</Link></li>
            )
          })
        }

      </ul>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  strings: PropTypes.object
};
const mapDispatchToProps = dispatch => {
  return {
    setCategoryID: (value) => {
      dispatch(setCategoryID(value));
    },
    setContent: (value) => {
      dispatch(setContent(value));
    }
  };
};
export default connect(null, mapDispatchToProps)(multilanguage(MobileNavMenu));
// export default multilanguage(MobileNavMenu);
