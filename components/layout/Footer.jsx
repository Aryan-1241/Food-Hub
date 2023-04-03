import React from "react";
import "../../styles/footer.scss";
import { AiFillInstagram, AiFillFacebook, AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Eating Hub</h2>
        <h5>Adding tasty food in our life at affordable rates</h5>
        <br />
        <em>Feedback</em>
        <strong>All right received @EatingHub</strong>
      </div>
      <aside>
        <h4>Connect with us on</h4>
        <a href="https://www.instagram.com/aryan_1241/">
          <AiFillInstagram />
        </a>
        <a href="https://www.facebook.com/">
          <AiFillFacebook />
        </a>
        <a href="https://www.github.com/aryan_1241/">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
