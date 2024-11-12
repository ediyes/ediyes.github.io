import React, { useState } from "react";
import { Tooltip } from "./Tooltip";
import { Link } from "react-scroll";
import {
  PHOTO_URL,
  NAME,
  LINKS,
  SOCIAL_LINKS,
} from "config/constants/constants.sidebar";

const Header = ({ classicHeader, darkTheme, homeRef, handleNavClick }) => {
  const [isNavModalClose, setIsNavModalClose] = useState(true);

  const renderSidebarLinks = (LINKS || []).map((i) => (
    <li className="nav-item" key={i.id}>
      <Link
        className="nav-link "
        smooth
        duration={500}
        style={{ cursor: "pointer" }}
        activeClass="active"
        spy
        to={i.id}
        onClick={(e) => {
          e.preventDefault();
          setIsNavModalClose(true);
        }}
      >
        {i.text}
      </Link>
    </li>
  ));

  const renderSocialLinks = (SOCIAL_LINKS || []).map((i) => (
    <li key={i.id} className={`social-icons-${i.id}`}>
      <Tooltip text={i.id} placement="top">
        <a href={i.link} target="_blank" rel="noopener noreferrer">
          <i className={i.iconClass} />
        </a>
      </Tooltip>
    </li>
  ));

  return (
    <header id="header" className="sticky-top">
      {/* Navbar */}
      <nav className="primary-menu navbar navbar-expand-lg navbar-dark bg-dark border-bottom-0">
        <div className="container-fluid position-relative h-100 flex-lg-column ps-3 px-lg-3 pt-lg-3 pb-lg-2">
          {/* Logo */}
          <Link
            smooth
            duration={500}
            style={{ cursor: "pointer" }}
            to="home"
            className="mb-lg-auto mt-lg-4"
            onClick={(e) => {
              e.preventDefault();
              setIsNavModalClose(true);
            }}
          >
            <span className="bg-dark-2 rounded-pill p-2 mb-lg-1 d-none d-lg-inline-block">
              <img
                className="img-fluid rounded-pill d-block"
                src={PHOTO_URL}
                title={`I'm ${NAME}`}
                alt="profile"
              />
            </span>
            <h1 className="text-5 text-white text-center mb-0 d-lg-block">
              {NAME}
            </h1>
          </Link>
          {/* Logo End */}
          <div
            id="header-nav"
            className={
              isNavModalClose
                ? "collapse navbar-collapse w-100 my-lg-auto "
                : "show navbar-collapse w-100 my-lg-auto"
            }
          >
            <ul className="navbar-nav text-lg-center my-lg-auto py-lg-3">
              {renderSidebarLinks}
            </ul>
          </div>
          <ul className="social-icons social-icons-muted social-icons-sm mt-lg-auto ms-auto ms-lg-0 d-flex">
            {renderSocialLinks}
          </ul>
          <button
            onClick={(e) => {
              setIsNavModalClose(!isNavModalClose);
            }}
            className={
              isNavModalClose ? "navbar-toggler" : "navbar-toggler show"
            }
            id="navbar-toggler"
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      {/* Navbar End */}
    </header>
  );
};

export default Header;
