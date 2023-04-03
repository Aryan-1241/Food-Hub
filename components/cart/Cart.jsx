// import React from "react";
// import momos from "../../assets/momos.png";
// import burger1 from "../../assets/burger1.png";
// import burger2 from "../../assets/burger2.png";
// import burger3 from "../../assets/burger3.png";
// import pizza1 from "../../assets/pizza1.jpg";
// import pizza2 from "../../assets/pizza2.jpg";
// import pasta from "../../assets/pasta.jpg";
// import fries from "../../assets/fries.jpg";
// import cake from "../../assets/cake.jpg";

// const CartItem = ({ value, title, img, increment, decrement }) => {
//   <div className="cardItem">
//     <div>
//       <h4>{title}</h4>
//       <img src="{img}" alt="item" />
//     </div>
//     <div>
//       <button onClick={decrement}>-</button>
//       <input type="number" readOnly value={value} />
//       <button onClick={increment}>+</button>
//     </div>
//   </div>;
// };

// const Cart = () => {
//   const increment = (item) => {};
//   const decrement = (item) => {};

//   return (
//     <section className="cart">
//       <main>
//         <CartItem
//           title={"Veg Burger"}
//           value={0}
//           img={burger1}
//           increment={() => increment(1)}
//           decrement={() => decrement(1)}
//         />
//         <CartItem
//           title={"Momos"}
//           img={momos}
//           value={1}
//           increment={() => increment(2)}
//           decrement={() => decrement(2)}
//         />
//         <CartItem
//           title={"Non-Veg Burger"}
//           img={burger2}
//           value={3}
//           increment={() => increment(3)}
//           decrement={() => decrement(3)}
//         />
//         <CartItem
//           title={"Maharaja Mac"}
//           img={burger3}
//           value={4}
//           increment={() => increment(4)}
//           decrement={() => decrement(4)}
//         />
//         <CartItem
//           title={"Veg Pizza"}
//           img={pizza1}
//           value={5}
//           increment={() => increment(5)}
//           decrement={() => decrement(5)}
//         />
//         <CartItem
//           title={"Non-Veg Pizza"}
//           img={pizza2}
//           value={6}
//           increment={() => increment(6)}
//           decrement={() => decrement(6)}
//         />
//         <CartItem
//           title={"Pasta"}
//           img={pasta}
//           value={7}
//           increment={() => increment(7)}
//           decrement={() => decrement(7)}
//         />
//         <CartItem
//           title={"Cake"}
//           img={cake}
//           value={8}
//           increment={() => increment(8)}
//           decrement={() => decrement(8)}
//         />
//         <CartItem
//           title={"French-Fries"}
//           img={fries}
//           value={9}
//           increment={() => increment(9)}
//           decrement={() => decrement(9)}
//         />
//       </main>
//     </section>
//   );
// };

// export default Cart;

import React from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import pizza1 from "../../assets/pizza1.jpg";
import pizza2 from "../../assets/pizza2.jpg";
import pasta from "../../assets/pasta.jpg";
import fries from "../../assets/fries.jpg";
import cake from "../../assets/cake.jpg";
import momos from "../../assets/momos.png";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const increment = (item) => {};

  const decrement = (item) => {};

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Veg Cheese Burger"}
          img={burger2}
          value={0}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Cheese Burger with French Fries"}
          img={burger3}
          value={0}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />
        <CartItem
          title={"Veg Pizza"}
          img={pizza1}
          value={4}
          increment={() => increment(4)}
          decrement={() => decrement(4)}
        />
        <CartItem
          title={"Non-Veg Pizza"}
          img={pizza2}
          value={5}
          increment={() => increment(5)}
          decrement={() => decrement(5)}
        />
        <CartItem
          title={"Pasta"}
          img={pasta}
          value={6}
          increment={() => increment(6)}
          decrement={() => decrement(6)}
        />
        <CartItem
          title={"Cake"}
          img={cake}
          value={7}
          increment={() => increment(7)}
          decrement={() => decrement(7)}
        />
        <CartItem
          title={"French-Fries"}
          img={fries}
          value={8}
          increment={() => increment(8)}
          decrement={() => decrement(8)}
        />
        <CartItem
          title={"Momos"}
          img={momos}
          value={9}
          increment={() => increment(9)}
          decrement={() => decrement(9)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
