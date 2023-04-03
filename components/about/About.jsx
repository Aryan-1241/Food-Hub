import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/myself.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>FoodHub</h4>
          <p>
            This is FoodHub. We tend to provide food at affordable rates. Our
            goal is to make spread smiles from our tasty food.
          </p>

          <p>Explore the various type of food. Click below to see the menu</p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Aryan Behal</h3>
            </div>

            <p>
              Hi, I am Aryan Behal, maker of FoodHub website. Me and my
              colleages has been working really hard to bring some smiles by our
              food items at low rates. So do try and please revert back to us,
              in case of any suggestion.
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
