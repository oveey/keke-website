import React, { useEffect } from "react";
import { Nav } from "../component/Nav";
import { Link } from "react-router-dom";
import "../styles/home.css";
import AOS from "aos";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "aos/dist/aos.css";
import axios from "axios";

export const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duration of the animation in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
      startEvent: "DOMContentLoaded", // Trigger animations when the DOM is fully loaded
      offset: 120, // Adjust this value as needed
    });
  }, []);

  return (
    <>
      <section className="header__section" id="home">
        <Nav />

        <div className="header">
          <div
            className="header__text__con"
            data-aos="zoom-in-down"
            data-aos-duration="3000"
          >
            <h1 className="header__text">Ride Smart, Ride Keke</h1>
            <p className="text">
              <span className="text_1">KEKE</span> is more than just a ride;
              it's a community-driven service that connects people with
              convenience and affordability.
            </p>
            <div className="btn-container ">
              <ScrollLink to="contact" smooth={true} duration={500}>
                <div>
                  <div className="btn">
                    {" "}
                    <p>GET STARTED </p>
                  </div>
                </div>
              </ScrollLink>
            </div>


          </div>
          <div className="/" data-aos="fade-up" data-aos-duration="3000">
              <div className="hero_image">
                <img
                  src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1724857317/keke_hero_cxu1s9.svg"
                  alt=""
                />
              </div>
            </div>
        </div>
      </section>

      <section className="keke_section" id="Home">
        <h1 className="keke_title">Why Choose Keke?</h1>

        <div className="keke_container">
          <img
            src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1724857320/sure_ride_giq3cf.svg"
            alt=""
            data-aos="fade-up"
          />

          <img
            src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1724857319/Sharp_sharp_mernff.svg"
            alt=""
            data-aos="fade-up"
          />

          <img
            src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1724857320/sure_ride_giq3cf.svg"
            alt=""
            data-aos="fade-up"
          />
        </div>
      </section>

      <section className="step_section" id="Home">
        <h1 className="keke_title">How keke Works</h1>

        <div className="step_container">
          <div className="step_content" data-aos="fade-right">
            <h3 className="step">Step 1: "Download the App"</h3>
            <p className="step_p">
              Available on Android and iOS, our app lets you book a keke in
              seconds.
            </p>

            <h3 className="step">Step 2: "Book Your Ride""</h3>
            <p className="step_p">
              Enter your location and destination, and choose your preferred
              keke.
            </p>

            <h3 className="step">Step 3: "Enjoy the Ride"</h3>
            <p className="step_p">
              Sit back, relax, and enjoy the ride to your destination.
            </p>
          </div>

          <img
            src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1724857317/keke_ufz21u.svg"
            alt=""
            class="step_img"
            data-aos="fade-left"
          />
        </div>
      </section>

      <section className="download">
        <div className="download_container">
          <div className="download_section">
            <div className="download_content">
              <h1 className="download_title">Download Keke App Today!</h1>
              <div className="download_btn">
                <img
                  src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1724857314/App_Store_hhhta8.svg"
                  alt=""
                  class="download_img"
                  data-aos="fade-left"
                />
                <img
                  src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1724857316/Google_Play_nstxz1.svg"
                  alt=""
                  class="download_img"
                  data-aos="fade-left"
                />
              </div>

              <div className="button">
                <a href="#" class="btn">
                  {" "}
                  Start Your Journey Now
                </a>
              </div>
            </div>

            <img
              src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1724857319/download_g6llgz.svg"
              alt=""
              className="download_img"
              data-aos="fade-left"
            />
          </div>
        </div>
      </section>

      <footer className="footer_section">
        <div className="footer">
          <div className="footer_content">
            <div className="footer_logo" data-aos="fade-up">
              <img
                src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1724857318/kekelogo_ww5qlb.svg"
                alt=""
                data-aos="fade-left"
              />
            </div>

            <p>Contact Us</p>

            <div className="socials" data-aos="fade-up">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1724857316/instagram_trwxcb.svg"
                  alt=""
                />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1724857319/linkedin_yhmilk.svg"
                  alt=""
                />
              </a>

              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1724857320/tiktok_gbmjwt.svg"
                  alt=""
                />
              </a>

              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1724857322/twitter_qq1e2b.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className="footer_bottom">
          <p>&copy; copyright 2024, All right reserved</p>
        </div>
      </footer>
    </>
  );
};
