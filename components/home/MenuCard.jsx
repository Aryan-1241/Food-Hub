import React from "react";
import { motion } from "framer-motion";
const MenuCard = ({ itemNo, picSrc, price, title, handler, delay = 0 }) => {
  return (
    <motion.div
      className="menuCard"
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay,
      }}
    >
      <div>Item {itemNo}</div>
      <main>
        <img src={picSrc} alt={itemNo} />
        <h5>₹{price}</h5>
        <p>{title}</p>
        <button onClick={() => handler(itemNo)}>Buy now</button>
      </main>
    </motion.div>
  );
};

export default MenuCard;
