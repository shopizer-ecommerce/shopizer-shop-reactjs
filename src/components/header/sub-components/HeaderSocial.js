import React from "react";

const HeaderSocial = () => {
  return (
    <div className="side-social">
      <ul>
        <li>
          <a
            className="facebook"
            href="//www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook" />
          </a>
        </li>
        <li>
          <a
            className="dribbble"
            href="//www.dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-dribbble" />
          </a>
        </li>
        <li>
          <a
            className="pinterest"
            href="//www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-pinterest-p" />
          </a>
        </li>
        <li>
          <a
            className="twitter"
            href="//www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter" />
          </a>
        </li>
        <li>
          <a
            className="linkedin"
            href="//www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderSocial;
