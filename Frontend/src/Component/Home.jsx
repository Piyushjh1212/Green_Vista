import React from "react";
import "./HomePage.css";
import ShowcasePage from "./Plansthowcase/Plantshowcase";

export default function HomePage() {
  return (
    <>
      <div className="home-container">
        <img
          src="https://www.shutterstock.com/image-photo/raised-bed-various-herbs-lettuce-260nw-2479147867.jpg"
          alt="Profile"
          className="profile-image"
        />

        <div
          className="left-image"
          style={{
            backgroundImage: `url(${"https://plus.unsplash.com/premium_photo-1664116928607-896124327b11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZW4lMjBncmFzc3xlbnwwfHwwfHx8MA%3D%3D"})`,
          }}
        ></div>

        <div className="right-content">
          <div className="profile-card">
            <div className="text-content">
              <h4 className="subtitle">Green-Vista</h4>
              <h1 className="title">
                An Informational
                <br />
                Garden
              </h1>
              <p className="description">
                This group’s mission is “to train and prepare low-income,
                unemployed, underemployed, unskilled workforce for a career in
                the field of the emerging green-collar jobs industry with an
                emphasis on practices such as sustainability.
              </p>

              <button className="read-button">read more</button>
            </div>
          </div>
        </div>
      </div>
      <ShowcasePage/>
    </>
  );
}
