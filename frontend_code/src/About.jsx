import React from "react";
import "./aboutus.css";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import aboutUs from "./assets/about-us.svg";
import webdev from "./assets/webdev.svg";
import data from "./assets/data.svg";
import growth from "./assets/growth.svg";

function About() {
  return (
    <div className="about-us-page">
      <div className="about-us-card-div">
        <div className="about-us-card">
          <div className="about-us-card-content">
            <div className="about-content-head">Get Know About Us</div>
            <div className="about-content-text">
              <p>
                Welcome to our e-learning platform! We provide top-notch courses
                on web development, personal finance, and digital marketing. Our
                team of experts has years of experience in these fields and are
                passionate about sharing their knowledge with others.
              </p>
              <p>
                We believe that everyone should have access to quality
                education, and our platform is designed to make learning
                accessible to people from all backgrounds.
              </p>
            </div>
            <div className="about-content-points">
              <p className="about-content-point">
                <AiOutlineSafetyCertificate className="about-point-icon" />
                Safe & Secured our services and every step of process.
              </p>
              <p className="about-content-point">
                <BiLock className="about-point-icon" />
                It's completely risk free to buy our course.
              </p>
              <p className="about-content-point">
                <CgNotes className="about-point-icon" />
                Our Content will help you every step.
              </p>
            </div>
          </div>
          <div className="about-us-card-img">
            <img src={aboutUs} alt="about us" />
          </div>
        </div>
      </div>
      <div className="aboutus-courses-div">
        <div className="aboutus-courses-head">About Our Courses</div>
        <div className="aboutus-courses-cards">
          <div className="aboutus-courses-card">
            <div className="aboutus-courses-card-content">
              <div className="aboutus-courses-card-head">Web Development</div>
              <div className="aboutus-courses-card-content-text">
                Our web development courses cover a range of topics, including
                HTML, CSS, JavaScript, and more. You'll learn the skills needed
                to build and design your own website, as well as how to use
                popular web development tools.
              </div>
            </div>
            <div className="aboutus-courses-card-img">
              <img
                src={webdev}
                alt="course"
                className="aboutus-course-img-web"
              />
            </div>
          </div>
          <div className="aboutus-courses-card">
            <div className="aboutus-courses-card-content">
              <div className="aboutus-courses-card-head">Digital Marketing</div>
              <div className="aboutus-courses-card-content-text">
                Our digital marketing courses will help you learn how to
                effectively promote your business or personal brand online.
                You'll learn about SEO, social media marketing, and more, and
                how to create a comprehensive digital marketing strategy.
              </div>
            </div>
            <div className="aboutus-courses-card-img">
              <img
                src={data}
                alt="course"
                className="aboutus-course-img-data"
              />
            </div>
          </div>
          <div className="aboutus-courses-card">
            <div className="aboutus-courses-card-content">
              <div className="aboutus-courses-card-head">Personal Finance</div>
              <div className="aboutus-courses-card-content-text">
                Our personal finance courses are designed to help you better
                understand how to manage your money and reach your financial
                goals. From budgeting and saving to investing and retirement
                planning, our courses cover it all.
              </div>
            </div>
            <div className="aboutus-courses-card-img">
              <img
                src={growth}
                alt="course"
                className="aboutus-course-img-growth"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="contactus-div">
        <div className="contact-us-head">Contact Us</div>
        <div className="contactus-card-div">
          <div className="contact-us-title">Get In Touch</div>
          <div className="contactus-row">
            <div className="contactus-bg-div">
              <p>
                We value your feedback and are here to assist you with any
                questions or concerns you may have.
              </p>
              <p>You can reach us by: </p>
              <p>Email: support@elearningplatform.com</p>
              <p>Phone: 555-555-5555 (Monday-Friday, 9am-5pm EST)</p>
              <p>Live Chat: Available on our website during business hours</p>
              <p>
                Mailing Address: E-Learning Platform 123 Main Street Anytown,
                USA 12345
              </p>
            </div>
            <div className="getintouch-form-div">
              <div className="contact-us-content">
                Alternatively, you can also fill out the contact form on this
                page with your name, email, and message and we will respond to
                you as soon as possible.
              </div>
              <div className="contact-us-form">
                <div className="form-row">
                  <div className="form-col">
                    <input
                      type="text"
                      placeholder="Your Name*"
                      className="contact-form-input"
                      required
                    />
                  </div>
                  <div className="form-col">
                    <input
                      type="text"
                      placeholder="Your Email*"
                      className="contact-form-input"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    placeholder="Subject*"
                    className="contact-form-input"
                    required
                  />
                </div>
                <div className="form-row">
                  <textarea
                    rows={7}
                    placeholder="Type your Message*"
                    className="contact-form-input textarea"
                    required
                  />
                </div>
                <div className="form-row">
                  <div
                    className="form-submit-btn"
                    onClick={() =>
                      (window.location = "mailto:shradhapagal86@gmail.com")
                    }
                  >
                    Send Mail
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="thankyou-txt">
            Thank you for visiting our contact us page.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
