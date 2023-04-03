import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  return (
    <section
      className="login"
      initial={{
        x: "-100%",
      }}
      animate={{ y: 0 }}
    >
      <motion.button>
        <p>Login with Google</p>
        <FcGoogle />
      </motion.button>
    </section>
  );
};

export default Login;
