import React from "react";
import Typewriter from "typewriter-effect";
import {
  WELCOME,
  IAM_A,
  BASE_ON,
  CONTACT_ME,
  IMAGE_BG,
} from "config/constants/constants.home";

const Home = ({ classicHeader, darkTheme, handleNavClick }) => {
  return (
    <section id="home">
      <div className="hero-wrap">
        <div className="hero-mask opacity-8 bg-dark" />
        <div
          className="hero-bg parallax"
          style={{ backgroundImage: `url("${IMAGE_BG}")` }}
        ></div>

        <div className="hero-content section d-flex min-vh-100">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <p className="text-7 fw-500 text-white mb-2 mb-md-3">
                  {WELCOME}
                </p>
                {IAM_A && IAM_A.length && (
                  <h2 className="text-16 fw-600 text-white mb-2 mb-md-3">
                    <Typewriter
                      options={{
                        strings: IAM_A,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h2>
                )}
                <p className="text-5 text-light mb-4">{BASE_ON}</p>
                {CONTACT_ME && (
                  <a
                    href="#contact"
                    className="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("contact");
                    }}
                  >
                    {CONTACT_ME}
                  </a>
                )}
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="scroll-down-arrow text-white smooth-scroll"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
          >
            <span className="animated">
              <i className="fa fa-chevron-down" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
