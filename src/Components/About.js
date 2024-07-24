import React from "react";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var bio = data.bio;
    var resumeDownload = data.resumedownload;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="main-col">
          <h2>About Me</h2>
          <p>{bio}</p>
          <div className="contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>{name}</span>
              <br />
            </p>
          </div>
          <div className="download">
            <p>
              <a href={resumeDownload} className="button">
                <i className="fa fa-download"></i>Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
