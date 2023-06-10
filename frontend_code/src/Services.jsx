import React, { useEffect, useState } from "react";
import "./services.css";
import { useNavigate } from "react-router-dom";
import gif from "./assets/services.gif";
import { AiOutlineSend } from "react-icons/ai";
import webdev from "./assets/webdev.svg";
import data from "./assets/data.svg";
import growth from "./assets/growth.svg";

function Services() {
  const [popup2, setpopup2] = useState(true);
  const [popup3, setpopup3] = useState(true);
  const [popup4, setpopup4] = useState(true);
  const [popup1, setpopup1] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setpopup1(false);
    }, 10);
    let oldValue1 = 0;
    let newValue1 = 0;
    window.addEventListener("scroll", function (e) {
      newValue1 = window.pageYOffset;
      console.log(oldValue1, "old", newValue1, "new");
      if (oldValue1 > 300) {
        setpopup2(false);
      }
      if (oldValue1 > 750) {
        setpopup3(false);
      }
      if (oldValue1 > 1000) {
        setpopup4(false);
      }
      oldValue1 = newValue1;
    });
  }, []);
  const navigate = useNavigate();
  return (
    <div className="services-page">
      <div className="services-page-head">
        <div
          // className="services-page-head-text"
          className={`headtext-animate services-page-head-text ${
            popup1 ? "" : "is-visible"
          } `}
        >
          We also provide best services for our specified domains.
        </div>
        <div className="services-page-head-gif">
          <img src={gif} alt="gif" />
        </div>
      </div>
      <div className="services-page-content">
        <div
          // className="web-services"
          className={`web-services headtext-animate services-page-head-text ${
            popup2 ? "" : "is-visible"
          } `}
        >
          <div className="web-services-head">Web Development</div>
          <div className="web-services-content">
            <div className="web-services-content-text">
              <p>
                We are a One-Stop Solution for delivering the best web design
                and development services. We render customized and affordable
                web design facilities to suit your requirements.
              </p>
              <div className="web-services-content-points">
                <p>
                  <AiOutlineSend className="bullet-icon" />
                  Persuasive web designs contribute to the quality conversion of
                  leads into a potential pond of traffic, elevating the success
                  of your business operations.
                </p>
                <p>
                  <AiOutlineSend className="bullet-icon" />
                  Create custom e-commerce websites with excellent APIs and
                  design structures to boost your overall growth.
                </p>
                <p>
                  <AiOutlineSend className="bullet-icon" />
                  We provide custom web development services to suit your cost
                  utilization needs to meet the goals you have set for your
                  business.
                </p>
              </div>
            </div>
            <div className="web-services-content-img">
              <img
                src={webdev}
                alt="course"
                className="aboutus-course-img-web"
              />
            </div>
          </div>
        </div>
        <div
          // className="web-services"
          className={`web-services headtext-animate services-page-head-text ${
            popup3 ? "" : "is-visible"
          } `}
        >
          <div className="web-services-head">Digital Marketing</div>
          <div className="web-services-content">
            <div className="web-services-content-text">
              <p>
                Digital marketing agency services are is an essential part of
                growing your business in digital age, These are some of the
                digital marketing services we provide that help your
                businessgrow in these fast-paced mordern times.
              </p>
              <div className="web-services-content-points">
                <p>
                  <AiOutlineSend className="bullet-icon" /> Search Engine
                  Optimisation & Marketing (SEO & SEM).
                </p>
                <p>
                  <AiOutlineSend className="bullet-icon" /> Search Engine Social
                  Media Marketing & Email Outreach.
                </p>
                <p>
                  <AiOutlineSend className="bullet-icon" /> Search Engine
                  Content Generation and Optimiszation & Quality Link Building.
                </p>
                <p>
                  <AiOutlineSend className="bullet-icon" />
                  Affilate Marketing & Integrated Online Marketing Strategies
                </p>
              </div>
            </div>
            <div className="web-services-content-img">
              <img
                src={data}
                alt="course"
                className="aboutus-course-img-data"
              />
            </div>
          </div>
        </div>
        <div
          // className="web-services"
          className={`web-services headtext-animate services-page-head-text ${
            popup4 ? "" : "is-visible"
          } `}
        >
          <div className="web-services-head">Personal Finance Services</div>
          <div className="web-services-content">
            <div className="web-services-content-text">
              <p>
                Personal finance, as aterm, covers the concepts of managing your
                money, saving, and investing. It also includes banking,
                Budgeting, Mortages, Investments, Insurance, retirement planning
                and tax planning
              </p>
              <div className="web-services-content-points">
                <p>
                  <AiOutlineSend className="bullet-icon" />
                  Areas of service in personal finance are income, saving,
                  spending, investing, and protection.
                </p>
                <p>
                  <AiOutlineSend className="bullet-icon" />
                  Mutual Funds.
                </p>
                <p>
                  <AiOutlineSend className="bullet-icon" />
                  Insurance.
                </p>
                <p>
                  <AiOutlineSend className="bullet-icon" />
                  Stock Market.
                </p>
                <p>
                  <AiOutlineSend className="bullet-icon" />
                  Treasury/Debt Instruments.
                </p>
                <p>
                  <AiOutlineSend className="bullet-icon" />
                  Tax/Audit Consulting.
                </p>
              </div>
            </div>
            <div className="web-services-content-img">
              <img
                src={growth}
                alt="course"
                className="aboutus-course-img-growth"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="PageNotFound">
    //   <div className="not-found-content">
    //     <img src={notFoundBG} alt="notFoundBG" className="notFoundBG" />
    //     <div className="not-found-text">
    //       The page you requested was not found!
    //     </div>
    //     <div
    //       className="backhome-btn"
    //       onClick={() => {
    //         navigate("/");
    //       }}
    //     >
    //       Back to Home
    //     </div>
    //   </div>
    // </div>
  );
}

export default Services;
