import React from "react";
import "./AboutUs.css";
import AdventureImage from "../assets/about.jpg"; // Import your image

const AboutUs = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <header className="about-header">
          <h1>About Us</h1>
          <br />
          <p>
            Discover the unparalleled beauty of Pakistan with <b>Summit Trails</b>, your trusted partner for trekking and expedition tours.
          </p>
          <br />
        </header>

        <section className="about-content">
          <h2>Who We Are</h2>
          <p>
            At <b>Summit Trails</b>, we are passionate about exploring the majestic landscapes of Pakistan. From the towering peaks of the Karakoram to the serene valleys of the Himalayas, we specialize in creating unforgettable experiences for adventurers of all levels.
          </p>
        </section>
        <br />

        <section className="about-mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make trekking and expeditions accessible to everyone, while promoting sustainable tourism. We aim to showcase the rich cultural heritage and natural wonders of Pakistan, ensuring safety and enjoyment every step of the way.
          </p>
        </section>
        <br />

        <section className="about-offerings">
          <h2>What We Offer</h2>
          <ul>
            <li>Guided trekking tours to iconic destinations like K2 Base Camp.</li>
            <li>Expedition tours for experienced mountaineers.</li>
            <li>Customized adventure packages tailored to your needs.</li>
            <li>Expert guides and comprehensive safety protocols.</li>
          </ul>
        </section>

        <footer className="about-footer">
          <p>
            Ready for your next adventure? Contact <b>Summit Trails</b> today and let us guide you to the trip of a lifetime!
          </p>
        </footer>
      </div>

      <div className="about-image-container">
        <img src={AdventureImage} alt="Adventure" className="about-image" />
      </div>
    </div>
  );
};

export default AboutUs;