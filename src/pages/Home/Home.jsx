// import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import images from "./images";

/*
array of food by category, category leads to a page with all the food in that category
*/

const Home = () => {
  return (
    <div className="home-main-container">
      <div className="home-title-container">
        <h1>Joey&apos;s Cookbook</h1>
      </div>
      <div className="home-cat-container">
        <div className="cat-links-container">
          <div className="cat-link-container">
            <Link
              to="/breakfast"
              className="cat-link"
              style={{
                backgroundImage: `url(${images.breakfast})`,
                backgroundSize: "cover",
              }}
            >
              Breakfast
            </Link>
            <Link
              to="/lunch"
              className="cat-link"
              style={{
                backgroundImage: `url(${images.lunch})`,
                backgroundSize: "cover",
              }}
            >
              Lunch
            </Link>
            <Link
              to="/dinner"
              className="cat-link"
              style={{
                backgroundImage: `url(${images.dinner})`,
                backgroundSize: "cover",
              }}
            >
              Dinner
            </Link>{" "}
            <Link
              to="/dessert"
              className="cat-link"
              style={{
                backgroundImage: `url(${images.dessert})`,
                backgroundSize: "cover",
              }}
            >
              Dessert
            </Link>
          </div>
        </div>
      </div>
      <div className="home-recipe-form-container">
        <Link to="/recipe-from" className="home-recipe-form-link">
          Add A Recipe!
        </Link>
      </div>
    </div>
  );
};

export default Home;
