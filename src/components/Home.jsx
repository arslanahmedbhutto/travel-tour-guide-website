import React, { useState } from "react";
import styled from "styled-components";
import HeroImage from "../assets/hero.jpg"
import Button from "./Button";
import Services from "./Services";
import Tours from "./Tours";
export default function Home() {
  const [value, setValue] = useState("$500 - $10,000");
  return (
    <>
    <Section>
    <div className="background">
  <div className="video-container">
    <img src={HeroImage} alt="Trekkers on a mountain trail" className="hero-video" />
    <div className="video-overlay"></div>
  </div>
</div>
      <div className="content">
        <div className="info">
          <br/><br/><br/><br/><br/>
          <h1>Let's Explore </h1>
          <h1>The Beauty of Pakistan</h1>
          <Button class="btn-main" text="Plan Trip With Us" />
        </div>

        <div className="planner">
          <form>
            <div className="row">
              <label>Destinations</label>
              <select>
                <option>K2 Base</option>
                <option>Islamabad</option>
              </select>
            </div>
            <div className="row">
              <label>Check In</label>
              <input type="date" />
            </div>
            <div className="row">
              <label>Price Range</label>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="row">
              <Button text="Discover More" />
            </div>
          </form>
        </div>
      </div>
    </Section>
     <div>
     <Services />
     <Tours numberOfTours={5} />
   </div>
   </>
  );
}

const Section = styled.section`

.btn-main{

background-color : white;
width:100px;
}

.background {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px; /* Adds spacing around the video */
}

.video-container {
  position: relative;
  width: 100%; /* Compact size */
  max-width: 1900px; /* Restrict max size */
  border-radius: 15px;
  overflow: hidden; /* Ensures the video and overlay stay within the border radius */
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.0); /* Adds subtle shadow */
}

.hero-video {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 155, 0, 0.3); /* Green overlay with 10% opacity */
  pointer-events: none; /* Allows interactions with the video */
}

  margin-top: 2rem;
  position: relative;
  .background {
    img {
      height: 90vh;
      width: 100%;
    }
  }
  .content {
    .info {
      position: absolute;
      color:white;
      top: 5rem;
      margin-left: 8rem;
      h1 {
        font-size: 5rem;
        margin-bottom: 2rem;
      }
    }
    .planner {
      position: absolute;
      bottom: -2rem;
      right: 0;
      background-color: white;
      padding: 2rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      border-radius:10px;
      form {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 3rem;
        .row {
          display: flex;
          flex-direction: column;
          text-align: start;
          label {
            font-size: 0.7rem;
            color: var(--secondary-text);
          }
          input[type="date"]::-webkit-calendar-picker-indicator {
            cursor: pointer;
            filter: invert(58%) sepia(69%) saturate(2588%) hue-rotate(325deg)
              brightness(105%) contrast(101%);
          }
          input:focus {
            outline: none;
          }
          input,
          select {
            border: none;
            width: 100%;
            color: var(--primary-color);
            margin-top: 0.5rem;
            background-color: white;
            font-size: 1.1rem;
            border-bottom: 1px solid #f5ebe9;
            padding-bottom: 0.3rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      img {
        height: 50vh;
      }
    }

    .background {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .background img.hero-video {
      width: 100%;
      height: 60vh;
      object-fit: cover; /* Ensures the image covers the whole hero area */
    }
    .content {
      .info {
        top: 12rem;
        margin-left: 2.5rem;
        color: white;
        br {
          display: none;
        }
        h1 {
          font-size: 1.7rem;
          margin-bottom: 1rem;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
        }
      }
      .planner {
        position: initial;
        margin: 2rem;
        form {
          align-items: flex-start;
          flex-direction: column;
        }
      }
    }
  }
`;
