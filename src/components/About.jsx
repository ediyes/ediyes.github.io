import React from "react";
import resumeFile from "documents/resume.pdf";
import {
  ABOUT,
  KNOW_MORE,
  ABOUT_HELLO,
  ABOUT_P1,
  ABOUT_P2,
  ABOUT_LINKS,
  ABOUT_CV_TEXT,
  ABOUT_STATS,
} from "config/constants/constants.about";

const AboutUs = ({ classicHeader, darkTheme }) => {
  const renderLinks =
    ABOUT_LINKS &&
    ABOUT_LINKS.map((i) => (
      <li key={i.id}>
        <span className="fw-600 me-2">{i.id}:</span>
        {i.type === "email" ? (
          <a href={`mailto:${i.text}`}>{i.text}</a>
        ) : (
          i.text
        )}
      </li>
    ));
  const renderStats =
    ABOUT_STATS &&
    ABOUT_STATS.map((i, k) => (
      <div className="col-6 col-md-3" key={k}>
        <div className="featured-box text-center">
          <h4
            className={
              "text-12  mb-0 " + (darkTheme ? "text-white-50" : "text-muted")
            }
          >
            {i.number}
          </h4>
          <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>{i.text}</p>
        </div>
      </div>
    ));
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            {ABOUT}
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {KNOW_MORE}
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              {ABOUT_HELLO}
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>{ABOUT_P1}</p>
            <p className={darkTheme ? "text-white-50" : ""}>{ABOUT_P2}</p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                {renderLinks}
              </ul>
              {ABOUT_CV_TEXT && (
                <a
                  href={resumeFile}
                  download
                  className="btn btn-primary rounded-pill"
                >
                  {ABOUT_CV_TEXT}
                </a>
              )}
            </div>
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
        <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }
        >
          <div className="row">{renderStats}</div>
        </div>
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
