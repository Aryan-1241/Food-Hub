import React from "react";
import "../../styles/menu.scss";
import MenuCard from "./MenuCard";
import momos from "../../assets/momos.png";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import pizza1 from "../../assets/pizza1.jpg";
import pizza2 from "../../assets/pizza2.jpg";
import pasta from "../../assets/pasta.jpg";
import fries from "../../assets/fries.jpg";
import cake from "../../assets/cake.jpg";

const Menu = () => {
  const addToCartHandler = (itemNo) => {};

  return (
    <section id="menu">
      <h1>Menu</h1>
      <div>
        <MenuCard
          itemNo={1}
          picSrc={momos}
          price={100}
          title="Steam Momos"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNo={2}
          picSrc={burger1}
          price={60}
          title="Veg Burger"
          handler={addToCartHandler}
          delay={0.3}
        />
        <MenuCard
          itemNo={3}
          picSrc={cake}
          price={120}
          title="Chockolate Cake"
          handler={addToCartHandler}
          delay={0.6}
        />
        <MenuCard
          itemNo={4}
          picSrc={burger2}
          price={110}
          title="Non-Veg Burger"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNo={5}
          picSrc={burger3}
          price={150}
          title="Maharaja Mac"
          handler={addToCartHandler}
          delay={0.3}
        />
        <MenuCard
          itemNo={6}
          picSrc={pizza1}
          price={200}
          title="Veg Pizza"
          handler={addToCartHandler}
          delay={0.6}
        />
        <MenuCard
          itemNo={7}
          picSrc={pizza2}
          price={250}
          title="Non-Veg Pizza"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNo={8}
          picSrc={fries}
          price={50}
          title="French-Fries"
          handler={addToCartHandler}
          delay={0.3}
        />
        <MenuCard
          itemNo={9}
          picSrc={pasta}
          price={130}
          title="Pasta"
          handler={addToCartHandler}
          delay={0.6}
        />
      </div>
    </section>
  );
};

export default Menu;
