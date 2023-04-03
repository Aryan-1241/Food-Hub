/* eslint-disable no-unused-vars */
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import PaymentSuccess from "./components/cart/PaymentSuccess.jsx";
import Login from "./components/login/Login.jsx";
import Profile from "./components/profile/Profile.jsx";
import Myorder from "./components/myOrders/Myorder.jsx";
import OrderDetails from "./components/myOrders/OrderDetails.jsx";
import Dashboard from "./components/admin/Dashboard.jsx";
import Users from "./components/admin/Users.jsx";
import Orders from "./components/admin/Orders.jsx";
import About from "./components/about/About.jsx";
import Notfound from "./components/layout/Notfound.jsx";

import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmOrder.scss";
import "./styles/paymentsuccess.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/dashboard.scss";
import "./styles/about.scss";
import "./styles/notFound.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/confirmmorder" element={<ConfirmOrder />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myorders" element={<Myorder />} />
        <Route path="/orderdetails" element={<OrderDetails />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/about" element={<About />} />

        {/* star ka matlb - agr upar se match kr liya toh theek hai nhi toh isse show kr dena  */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
