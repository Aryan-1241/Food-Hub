import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import myself from "../../assets/myself.jpg";
const Profile = () => {
  const options = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    y: 0,
    opacity: 1,
  };
  return (
    <section className="profile">
      <main>
        <img src={myself} alt="User" {...options} />
        <h5 {...options} transition={{ delay: 0.3 }}>
          Aryan
        </h5>

        <div {...options} transition={{ delay: 0.5 }}>
          <Link
            to="/admin/dashboard"
            style={{
              borderRadius: 0,
              backgroundColor: "rgb(40,40,40)",
            }}
          >
            Dashboard
          </Link>
        </div>
        <motion.div
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
        >
          <Link to="/myorders">Orders</Link>
        </motion.div>

        <motion.button
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
        >
          Logout
        </motion.button>
      </main>
    </section>
  );
};

export default Profile;
