import React from 'react';
import { WEBSITE_NAME, WEBSITE_URL } from '../constants/constants';
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top py-3 block" data-navbar-on-scroll="data-navbar-on-scroll">
      <div className="container mx-auto">
        <a className="navbar-brand" href="index.html">
          {/* <img src="assets/img/gallery/logo-n.png" height="45" alt="logo" /> */}
          <p>{ WEBSITE_NAME} </p>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse border-t mt-4 lg:mt-0 lg:border-0" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto pt-2 lg:pt-0 font-base">
            <li className="nav-item px-2">
              <a className="nav-link active" aria-current="page" href="index.html">Home</a>
            </li>
            <li className="nav-item px-2 dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Content
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/pages/sfdemoorgs.html">Salesforce Demo Orgs</a></li>
                <li><a className="dropdown-item" href="/pages/sflearningpaths.html">Salesforce Learning Paths</a></li>
              </ul>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="about-us.html">About Us</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
