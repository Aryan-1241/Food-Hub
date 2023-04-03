import React from "react";
import { motion } from "framer-motion";
import myself from "../../assets/myself.jpg";
import "../../styles/founder.scss";

const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={myself} height={200} width={200} alt="" />
        <h3>Aryan Behal</h3>
        <p>
          Hey , welcome to my website <br />
          Here, you can order food items. And we will make shure you recieve it
          as fast as possible
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
