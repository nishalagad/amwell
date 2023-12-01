import React from "react";
import "./dashboard.css";
import VideoConsultation from "../../assets/instantVideoConsultation.png";
import logo from "../../assets/Logo.png";
import robo from "../../assets/robo.png";
import secureYourFamily from "../../assets/secureYourFam.png";
import { useNavigate } from "react-router-dom";
import bookDocAppointment from "../../assets/BookDocAppointment.png";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="div">
      <div className="div-5">
        <div className="div-6">
          <img loading="lazy" srcSet={logo} className="img-4" />
        </div>
        <div className="div-7">
          <div className="div-name-section">
            <span className="div-name-section">Hello, </span>
          </div>
          <div className="div-subtitle-section">
            Let's prioritize your health today!
          </div>
        </div>
      </div>
      <div className="div-10">
        <div className="div-book-app1" onClick={() => navigate("/chatbot")}>
          <div className="div-book-app2">
            <div className="div-book-app3">
              <div className="div-book-app4">
                Find your specialist at one go.
              </div>
              <div className="div-book-app5">
                Our AI Bot, Medly is ready to help you
              </div>
            </div>
            <img
              loading="lazy"
              srcSet={bookDocAppointment}
              className="book-img"
            />
          </div>
          <div className="div-book-app6">Book your Appointment</div>
        </div>
        <div className="div-features-17">
          <div className="div-insta-vid-consult">
            <div className="div-insta-vid-consult2">
              <div className="div-insta-vid-consult3">
                Instant Video Consultation
              </div>
              <img
                loading="lazy"
                src="..."
                className="div-insta-vid-consult-img"
              />
            </div>
            <div className="div-insta-vid-consult4">Experts available 24/7</div>
            <img
              loading="lazy"
              srcSet={VideoConsultation}
              className="div-insta-vid-consult-img-2"
            />
          </div>
          <div className="div-insta-vid-consult">
            <div className="div-insta-vid-consult2">
              <div className="div-insta-vid-consult3">Secure your family</div>
              <img
                loading="lazy"
                src="..."
                className="div-insta-vid-consult-img"
              />
            </div>
            <div className="div-insta-vid-consult4">
              Insure your family with amazing benefits
            </div>
            <img
              loading="lazy"
              srcSet={secureYourFamily}
              className="div-insta-vid-consult-img-2"
            />
          </div>
        </div>
      </div>
      <div className="div-features27">
        <div className="div-features28">
          <div className="div-features29">
            <div className="div-features30">
              Refer your friend and earn points
            </div>{" "}
            <div className="div-features31">
              <span
                style={{ fontFamily: "poppins,sans-serif", fontWeight: "400" }}
              >
                For every successful referral, earn 50 points and get closure to
                achieve
              </span>
              <span
                style={{ fontFamily: "poppins,sans-serif", fontWeight: "500" }}
              >
                Milestone 1
              </span>
            </div>
            <div className="div-features32">Emergency</div>
          </div>
          <div className="div-features33">Refer a Friend</div>
          <div className="div-features34">
            <button type="button" class="btn btn-danger sticky-lg-bottom">
              Emergency
            </button>
            <img
              loading="lazy"
              src={robo}
              className="chatbot"
              onClick={() => navigate("/chatbot")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
