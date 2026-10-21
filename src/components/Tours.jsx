
import React from "react";
import styled from "styled-components";
import { BsFillStarFill } from "react-icons/bs";
import tour1 from "../assets/tour1.png";
import tour2 from "../assets/tour2.png";
import tour3 from "../assets/tour3.png";
import ellipse from "../assets/ellipse.png";
import one from "../assets/1.jpg"
import two from "../assets/2.jpg"
import three from "../assets/3.jpg"

export default function Tours({numberOfTours}) {
  const data = [
    {
      id: 1,
      image: one,
      title: "Santorini, Oia Greece",
      price: 2000,
      reviews: "5k Reviews",
    },
    {
      id: 2,
      image: two,
      title: "Lighthouse, Bellwood",
      price: 4000,
      reviews: "5k Reviews",
    },
    {
      id: 3,
      image: three,
      title: "Riverfront, Japan",
      price: 3000,
      reviews: "5k Reviews",
    },
    {
      id: 4,
      image: tour1,
      title: "Riverfront, Japan",
      price: 3000,
      reviews: "5k Reviews",
    },
    {
      id: 5,
      image: tour3,
      title: "Riverfront, Japan",
      price: 3000,
      reviews: "5k Reviews",
    },
    {
      id: 6,
      image: tour3,
      title: "Riverfront, Japan",
      price: 3000,
      reviews: "5k Reviews",
    },

    

  ];

  const toursToDisplay = data.slice(0, numberOfTours);

  return (
    <Section id="tour">
      <h2>Choose Your Destination</h2>
      <img src={ellipse} alt="ellipse" className="ellipse" />
      <div className="tours">
        {toursToDisplay.map(({ id, image, title, price, reviews }) => {
          return (
            <div className="tour" key={id}>
              <div className="image">
                <img src={image} alt="tour" />
              </div>
              <div className="info">
                <div className="details">
                  <h4>{title}</h4>
                  <div className="price-details">
                    <span className="price">${price}</span>
                    <div className="reviews">
                      <div className="stars">
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                      </div>
                      <span className="review">{reviews}</span>
                    </div>
                  </div>
                </div>
                <button>Book Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-top: 15rem;
  margin-bottom: 5rem;
  position: relative;

  .ellipse {
    position: absolute;
    right: -5rem;
    top: -20rem;
    height: 30rem;
  }

  h2 {
    text-align: center ;
    transform: translateY(-50px);
    font-size: 3rem;
    margin-bottom: 0.1rem;
  }

  .tours {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    justify-items: center;
    padding: 0 2rem;

    .tour {
      position: relative;
      width: 100%;
      max-width: 400px;
      border-radius: 8px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      background-color: white;

      .image {
        img {
          width: 100%;
          height: 25rem;
          object-fit: cover;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }
      }

      .info {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          .price-details {
            display: flex;
            justify-content: space-between;

            .price {
              color: var(--primary-color);
              font-weight: bold;
              font-size: 1.2rem;
            }

            .reviews {
              display: flex;
              gap: 0.5rem;
              align-items: center;

              .stars {
                svg {
                  color: #ffc01e;
                }
              }

              .review {
                color: var(--secondary-text);
                font-size: 0.9rem;
              }
            }
          }
        }

        button {
          background-color: green;
          color: white;
          border: none;
          padding: 0.8rem;
          border-radius: 5px;
          font-size: 1.1rem;
          cursor: pointer;
    

          &:hover {
            background-color: white;
          color: green;
          border: 2px solid green;
          padding: 0.8rem;
          border-radius: 5px;
          font-size: 1.1rem;
          cursor: pointer;
    

          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .tours {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }

  @media screen and (max-width: 768px) {
    .tours {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }
`;
