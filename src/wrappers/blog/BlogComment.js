import React, { Fragment } from "react";

const BlogComment = () => {
  return (
    <Fragment>
      <div className="blog-comment-wrapper mt-55">
        <h4 className="blog-dec-title">comments : 02</h4>
        <div className="single-comment-wrapper mt-35">
          <div className="blog-comment-img">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/blog/comment-1.jpg"}
              alt=""
            />
          </div>
          <div className="blog-comment-content">
            <h4>Anthony Stephens</h4>
            <span>October 14, 2018 </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim
              ad minim veniam,{" "}
            </p>
          </div>
        </div>
        <div className="single-comment-wrapper mt-50 ml-120">
          <div className="blog-comment-img">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/blog/comment-2.jpg"}
              alt=""
            />
          </div>
          <div className="blog-comment-content">
            <h4>DX Joxova</h4>
            <span>October 14, 2018 </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim
              ad minim veniam,{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="blog-reply-wrapper mt-50">
        <h4 className="blog-dec-title">post a comment</h4>
        <form className="blog-form">
          <div className="row">
            <div className="col-md-6">
              <div className="leave-form">
                <input type="text" placeholder="Full Name" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="leave-form">
                <input type="email" placeholder="Email Address " />
              </div>
            </div>
            <div className="col-md-12">
              <div className="text-leave">
                <textarea placeholder="Message" defaultValue={""} />
                <input type="submit" defaultValue="SEND MESSAGE" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default BlogComment;
