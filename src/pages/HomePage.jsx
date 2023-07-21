import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../component/FooterComponent"; 

const HomePage = () => {
  const token = localStorage.getItem("token");
  const [slider, setSlider] = useState([]);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch(`https://test-react.agiletech.vn/galleries`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSlider(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const lastIndex = slider.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, slider]);

  useEffect(() => {
    let slide = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slide);
    };
  }, [index]);

  const handleLogout = () => {
    fetch("https://test-react.agiletech.vn/auth/logout", {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then(() => {
        localStorage.removeItem("token");
        alert("Đăng xuất thành công");
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <div className="wrapper-home">
        <header>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="66"
            height="41"
            viewBox="0 0 66 41"
            fill="none"
          >
            <rect
              y="17.2877"
              width="26.8156"
              height="23.0502"
              rx="11.5251"
              fill="#9C69E2"
            />
            <rect
              x="38.8828"
              width="26.8156"
              height="40.3378"
              rx="13.4078"
              fill="#F063B8"
            />
          </svg>
          <div className="header-right">
            {!token && (
              <button
                className="btn btn-login"
                onClick={() => navigate("/signin")}
              >
                Sign In
              </button>
            )}
            {token && (
              <div className="token">
                <button
                  className="btn btn-profile"
                  onClick={() => navigate("/profile")}
                >
                  Profile
                </button>
                <button className="btn btn-logout" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>

        <section className="section-save">
          <div className="save-img">
            <img src="/image/image1.png" />
          </div>
          <div className="save-left">
            <h2 className="save-title">Save your data storage here.</h2>
            <p className="save-desc">
              Data Warehouse is a data storage area that has been tested for
              security, so you can store your data here safely but not be afraid
              of being stolen by others.
            </p>
            <button className="btn btn-learn">Learn more</button>
          </div>
        </section>

        <section className="section-features">
          <h3 className="features-title">Features </h3>
          <p className="feature-desc">
            Some of the features and advantages that we provide for those of you
            who store data in this Data Warehouse.
          </p>
          <div className="feature-lists">
            <div className="feature-item">
              <div className="feature-before">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="427"
                  height="353"
                  viewBox="0 0 427 353"
                  fill="none"
                >
                  <path
                    opacity="0.1"
                    d="M43.733 41.784C47.7703 17.6952 68.6204 0.048645 93.0453 0.048645H376.922C404.536 0.048645 426.922 22.4344 426.922 50.0486V302.608C426.922 330.222 404.536 352.608 376.922 352.608H50.7169C19.8016 352.608 -3.7054 324.833 1.40467 294.343L43.733 41.784Z"
                    fill="#68C9BA"
                  />
                </svg>
              </div>
              <div className="feature-after">
                <img src="/image/image3.png" width={228} height={207} />
                <div className="feature-right">
                  <h4 className="feature-right-title">Search Data</h4>
                  <p className="feature-right-desc">
                    Don’t worry if your data is very large, the Data Warehoue
                    provides a search engine, which is useful for making it
                    easier to find data effectively saving time.
                  </p>
                  <Link to={"/"} className="feature-learn">
                    Learn more
                    <span>
                      <svg
                        width="23"
                        height="17"
                        viewBox="0 0 23 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.1864 15.2014L21.0952 8.30774L15.1864 1.41412"
                          stroke="#9C69E2"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.0955 8.30774H1.39941"
                          stroke="#9C69E2"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-before">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="427"
                  height="353"
                  viewBox="0 0 427 353"
                  fill="none"
                >
                  <path
                    opacity="0.1"
                    d="M43.8112 41.784C47.8484 17.6951 68.6985 0.048584 93.1234 0.048584H377C404.615 0.048584 427 22.4343 427 50.0486V302.608C427 330.222 404.615 352.608 377 352.608H50.7951C19.8797 352.608 -3.62727 324.833 1.48279 294.343L43.8112 41.784Z"
                    fill="#9C69E2"
                  />
                </svg>
              </div>
              <div className="feature-after">
                <img src="/image/image4.png" width={237} height={182} />
                <div className="feature-right">
                  <h4 className="feature-right-title">24 Hours Access</h4>
                  <p className="feature-right-desc">
                    Access is given 24 hours a full morning to night and meet
                    again in the morning, giving you comfort when you need data
                    when urgent.
                  </p>
                  <Link to={"/"} className="feature-learn">
                    Learn more
                    <span>
                      <svg
                        width="23"
                        height="17"
                        viewBox="0 0 23 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.1864 15.2014L21.0952 8.30774L15.1864 1.41412"
                          stroke="#9C69E2"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.0955 8.30774H1.39941"
                          stroke="#9C69E2"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-before">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="427"
                  height="354"
                  viewBox="0 0 427 354"
                  fill="none"
                >
                  <path
                    opacity="0.1"
                    d="M43.733 42.5833C47.7703 18.4944 68.6204 0.8479 93.0453 0.8479H376.922C404.536 0.8479 426.922 23.2337 426.922 50.8479V303.407C426.922 331.021 404.536 353.407 376.922 353.407H50.7169C19.8016 353.407 -3.7054 325.633 1.40467 295.142L43.733 42.5833Z"
                    fill="#F063B8"
                  />
                </svg>
              </div>
              <div className="feature-after">
                <img src="/image/image5.png" width={241} height={178} />
                <div className="feature-right">
                  <h4 className="feature-right-title">Print Out</h4>
                  <p className="feature-right-desc">
                    Print out service gives you convenience if someday you need
                    print data, just edit it all and just print it.
                  </p>
                  <Link to={"/"} className="feature-learn">
                    Learn more
                    <span>
                      <svg
                        width="23"
                        height="17"
                        viewBox="0 0 23 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.1864 15.2014L21.0952 8.30774L15.1864 1.41412"
                          stroke="#9C69E2"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.0955 8.30774H1.39941"
                          stroke="#9C69E2"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-before">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="427"
                  height="354"
                  viewBox="0 0 427 354"
                  fill="none"
                >
                  <path
                    opacity="0.1"
                    d="M43.8102 42.5833C47.8474 18.4944 68.6976 0.8479 93.1224 0.8479H376.999C404.614 0.8479 426.999 23.2337 426.999 50.8479V303.407C426.999 331.021 404.614 353.407 376.999 353.407H50.7941C19.8788 353.407 -3.62825 325.633 1.48182 295.142L43.8102 42.5833Z"
                    fill="#2D9CDB"
                  />
                </svg>
              </div>
              <div className="feature-after">
                <img src="/image/image6.png" width={226} height={197} />
                <div className="feature-right">
                  <h4 className="feature-right-title">Security Code</h4>
                  <p className="feature-right-desc">
                    Data Security is one of our best facilities. Allows for your
                    files to be safer. The file can be secured with a code or
                    password that you created, so only you can open the file.
                  </p>
                  <Link to={"/"} className="feature-learn">
                    Learn more
                    <span>
                      <svg
                        width="23"
                        height="17"
                        viewBox="0 0 23 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.1864 15.2014L21.0952 8.30774L15.1864 1.41412"
                          stroke="#9C69E2"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.0955 8.30774H1.39941"
                          stroke="#9C69E2"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-testimonials">
          <div className="box">
            <h3 className="testimonials-title">Testimonials</h3>
            <div className="testimonials-lists">
              {slider?.map((item, indexSlide) => {
                let position = "nextSlide ";
                if (indexSlide === index) {
                  position = "activeSlide";
                }
                if (
                  indexSlide === index - 1 ||
                  (index === 0 && indexSlide === slider.length - 1)
                ) {
                  position = "lastSlide";
                }
                return (
                  <article className={position} key={item.id}>
                    <span>
                      <svg
                        width="43"
                        height="17"
                        viewBox="0 0 43 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ cursor: "pointer" }}
                        onClick={() => setIndex(index - 1)}
                      >
                        <path
                          d="M7.06298 1.70128L1.05225 8.7138L7.06298 15.7263"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1.05247 8.71374L41.124 8.71375"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div className="testimonials-items">
                      <div className={"testimonials-items-box"}>
                        <div className="testimonials-items-img">
                          <img src={item.imageUrl} />
                        </div>
                        <div className="testimonials-items-profile">
                          <h3 className="profile-name">John Fang</h3>
                          <Link
                            to={"https://wordfaang.com"}
                            className="profile-link"
                          >
                            wordfaang.com
                          </Link>
                          <p className="profile-desc">{item.desctiption}</p>
                        </div>
                      </div>
                    </div>
                    <span>
                      <svg
                        width="43"
                        height="17"
                        viewBox="0 0 43 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => setIndex(index + 1)}
                        style={{ cursor: "pointer" }}
                      >
                        <path
                          d="M35.9263 1.12874L41.937 8.14127L35.9263 15.1538"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M41.9374 8.14124L1.86572 8.14124"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </article>
                );
              })}
            </div>
            <div className="dot-list">
              {slider?.map((item, indexSlide) => {
                let position = "";
                if (indexSlide === index) {
                  position = "active";
                }
                return (
                  <span key={item.id} className={"dot" + " " + position}></span>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
