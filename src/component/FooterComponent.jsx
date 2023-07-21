import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="wrapper-ft border">
      <footer className="wrapper-home">
        <div className="footer-top">
          <div className="footer-contact">
            <div className="contact-header" >
              <div className="contact-logo">
                <img src="/image/logo.jpg" alt="logo" />
              </div>
              <h3 className="contact-title">DataWarehouse</h3>
            </div>
            <div className="contact-bottom">
              <address>
                Warehouse Society, 234 Bahagia Ave Street PRBW 29281
              </address>
              <a href="mailto:info@warehouse.project" className="footer-email">
                info@warehouse.project
              </a>
              <a href="tel:1-232-3434" className="footer-phone">
                1-232-3434 (Main)
              </a>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-ahs">
              <h3 className="title">About</h3>
              <ul>
                <li>
                  <Link to="/profile"> Profile</Link>
                </li>
                <li>
                  <Link to="#"> Features</Link>
                </li>
                <li>
                  <Link to="#"> Careers</Link>
                </li>
                <li>
                  <Link to="#"> DW News</Link>
                </li>
              </ul>
            </div>
            <div className="footer-ahs">
              <h3 className="title">Help</h3>
              <ul>
                <li>
                  <Link to="#"> Support</Link>
                </li>
                <li>
                  <Link to="#"> Sign up</Link>
                </li>
                <li>
                  <Link to="#"> Guide</Link>
                </li>
                <li>
                  <Link to="#"> Guide</Link>
                </li>
                <li>
                  <Link to="#"> Q&A</Link>
                </li>
              </ul>
            </div>
            <div className="footer-ahs">
              <h3 className="title">Social</h3>
              <div className="social">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoZHtqhFAiypAzagdDbWZ2cd_mv_6ORjXtbA-wlMSkbQ&s"
                  width={50}
                  height={50}
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoZHtqhFAiypAzagdDbWZ2cd_mv_6ORjXtbA-wlMSkbQ&s"
                  width={50}
                  height={50}
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoZHtqhFAiypAzagdDbWZ2cd_mv_6ORjXtbA-wlMSkbQ&s"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="company">
            <span>© Datawarehouse™, 2020. All rights reserved.</span>
            <span>Company Registration Number: 21479524.</span>
          </div>
          <span>
            <svg
              width="61"
              height="61"
              viewBox="0 0 61 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.2"
                cx="30.9194"
                cy="30.7212"
                r="30.0806"
                fill="#9C69E2"
              />
              <path
                d="M15.8789 26.6836C15.8789 21.1607 20.3561 16.6836 25.8789 16.6836H35.9595C41.4823 16.6836 45.9595 21.1607 45.9595 26.6836V30.7481C45.9595 36.2709 41.4823 40.7481 35.9595 40.7481H15.8789V26.6836Z"
                fill="#9C69E2"
              />
              <circle cx="24.9038" cy="28.7158" r="2.00537" fill="white" />
              <circle cx="30.9204" cy="28.7158" r="2.00537" fill="white" />
              <circle cx="36.936" cy="28.7158" r="2.00537" fill="white" />
              <path
                d="M25.9058 39.7454H15.8789V42.2291C15.8789 43.7837 17.5748 44.7439 18.9079 43.9441L25.9058 39.7454Z"
                fill="#9C69E2"
              />
            </svg>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
