import React from "react";

import "./Author.scss";

export const Author = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer slide-in-bottom">
        <div className="social-container">
          <a
            href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in social" />
          </a>
          <a
            href="https://github.com/Paulina594"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github social" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=48575363003"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-whatsapp social" />
          </a>
          <a
            href="https://www.paulinadrozdz.me"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pd social">
              <span className="p">p</span>
              <span className="d">d</span>
            </div>
          </a>
        </div>
        <p className="copyrights">© Designed and build by Paulina Drożdż</p>
        <div className="line left" />
        <div className="line right" />
      </div>
    </div>
  );
};
