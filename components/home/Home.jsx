import React from "react";
import "../../styles/home.scss";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";
import Footer from "../layout/Footer";

const Home = () => {
  const movementX = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  const movementY = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <section className="home">
        <div>
          <motion.h1 {...movementX}>BurgerHub</motion.h1>
          <motion.p {...movementX} transition={{ delay: 0.2 }}>
            Get a treat at our BurgerHub
          </motion.p>
        </div>
        <motion.a {...movementY} transition={{ delay: 0.5 }} href="#menu">
          Explore menu
        </motion.a>
      </section>

      <Founder />
      <Menu />
      <Footer />
    </>
  );
};

export default Home;
