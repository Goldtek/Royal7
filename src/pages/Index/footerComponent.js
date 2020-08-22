import React from "react";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <footer className="site-footer">
      <div className="footer-menu">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-4 col-xs-12">
              <div className="Footer-nav">
                <h3>Our company</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetuer adipiscing elit
                  Suspendisse et justo Praesent mattis commodo augue Aliquam
                  ornare hendrerit augue Cras tellus In pulvinar lectus a est
                  Curabitur eget orci.{" "}
                </p>
                <div className="paymentM">
                  <img src="images/payment-method.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-xs-12">
              <div className="Footer-nav">
                <h3>Campaign</h3>
                <ul className="footer-link">
                  <li>
                    <a href="#">
                      <i className="fas fa-long-arrow-alt-right"></i> Pricing{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-long-arrow-alt-right"></i> Support
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-long-arrow-alt-right"></i> Discover
                    </a>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-long-arrow-alt-right"></i> Terms of
                      Use
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-xs-12">
              <div className="Footer-nav">
                <h3>Explore </h3>
                <ul className="footer-link">
                  <li>
                    <a href="#">
                      <i className="fas fa-long-arrow-alt-right"></i>{" "}
                      Environment
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-long-arrow-alt-right"></i> Fashion
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-long-arrow-alt-right"></i> Health
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-long-arrow-alt-right"></i> Innovation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-xs-12">
              <div className="Footer-nav newsletter">
                <h3>Newsletter</h3>
                <form
                  action="https://preview.templatehouse.net/getfund/s"
                  method="POST"
                  id="newsletterForm"
                >
                  <input
                    type="text"
                    name="s"
                    placeholder="Enter your email..."
                  />
                  <button type="submit">
                    <span className="fa fa-paper-plane"></span>
                  </button>
                </form>
                <div className="follow">
                  <h3>Follow us</h3>
                  <ul>
                    <li>
                      <a
                        target="_Blank"
                        href="https://www.facebook.com/"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_Blank"
                        href="https://www.twitter.com/"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_Blank"
                        href="https://www.google.com/"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_Blank"
                        href="https://www.linkedin.com/"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_Blank"
                        href="https://www.instagram.com/"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- .footer-menu --> */}
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <p className="copyright">
                &copy; {new Date().getFullYear()} Royal Tech. All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterComponent;
