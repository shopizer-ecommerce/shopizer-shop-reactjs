import React from "react";
import { Link } from "react-router-dom";

const BlogSidebar = () => {
  return (
    <div className="sidebar-style">
      <div className="sidebar-widget">
        <h4 className="pro-sidebar-title">Search </h4>
        <div className="pro-sidebar-search mb-55 mt-25">
          <form className="pro-sidebar-search-form" action="#">
            <input type="text" placeholder="Search here..." />
            <button>
              <i className="pe-7s-search" />
            </button>
          </form>
        </div>
      </div>
      <div className="sidebar-widget">
        <h4 className="pro-sidebar-title">Recent Projects </h4>
        <div className="sidebar-project-wrap mt-30">
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/sidebar-1.jpg"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>Photography</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  T- Shart And Jeans
                </Link>
              </h4>
            </div>
          </div>
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/sidebar-2.jpg"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>Branding</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  T- Shart And Jeans
                </Link>
              </h4>
            </div>
          </div>
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/sidebar-3.jpg"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>Design</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  T- Shart And Jeans
                </Link>
              </h4>
            </div>
          </div>
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/sidebar-2.jpg"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>Photography</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  T- Shart And Jeans
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-widget mt-35">
        <h4 className="pro-sidebar-title">Categories</h4>
        <div className="sidebar-widget-list sidebar-widget-list--blog mt-20">
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue />{" "}
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  Women <span>4</span>{" "}
                </Link>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue />{" "}
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  Men <span>4</span>{" "}
                </Link>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue />{" "}
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  Bags <span>4</span>{" "}
                </Link>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue />{" "}
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  Accessories <span>4</span>{" "}
                </Link>
                <span className="checkmark" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-widget mt-50">
        <h4 className="pro-sidebar-title">Tag </h4>
        <div className="sidebar-widget-tag mt-25">
          <ul>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                Clothing
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                Accessories
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                For Men
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>Women</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                Fashion
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
