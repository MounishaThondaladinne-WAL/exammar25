import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-md-12 text-center">
          <p className="menu">
            <a href="#/">Home</a>
            <a href="#/">Products</a>
            <a href="#/">About</a>
            <a href="#/">Listing</a>
            <a href="#/">Blog</a>
            <a href="#/">Contact</a>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <p>
            <a className="copyright-link" href="#/">
              Conditions of Use & Sale
            </a>
            <a className="copyright-link" href="#/">
              Privacy Notice
            </a>
            <a className="copyright-link" href="#/">
              Interest-Based Ads
            </a>
            <a className="copyright-link" href="#/">
              &copy; 1996-2022, Amazon.com, Inc.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
