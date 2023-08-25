import React, { useState } from "react";
import Button from "../../Common/Button";
import "./styles.css";
import gradient from "../../../assets/gradient.png";
import iPhone from "../../../assets/iphone.png";
import {motion} from 'framer-motion';
import { RWebShare } from "react-web-share";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../../../firebase";
import BasicModal from "../../../Authentication/BasicModal";
import {useAuthState} from 'react-firebase-hooks/auth';


function LandingPageComponent() {
  const [user, loading]=useAuthState(auth);
  const [isModalOpen, setIsModalOpen]= useState(false);

  const openModal=()=>{
    setIsModalOpen(true);
  }

  const closeModal=()=>{
    setIsModalOpen(false);
  };
  return (
    <div className="landing-wrapper">
      <div className="landing-left">
        <motion.h1
          className="heading-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="heading-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="para"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>



        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
        {user ? (
            <Link to='/dashboard'>
              <Button text='Dashboard' />
                </Link>
  ) : (
    <>
            <Button text="Get Started" onClick={openModal} />

            {/* BasicModal */}
            {isModalOpen && <BasicModal onClose={closeModal} />}
          </>
  )}




          <RWebShare
            data={{
              text: "Crypto Dashboard made using React JS.",
              url: "https://crypto-dashboard-dec.netlify.app/",
              title: "CryptoDashboard.",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <Button text="Share App" outlined={true} />
          </RWebShare>



        </motion.div>
      </div>

      <div className="landing-right">
        <img src={gradient} className="gradient" />
        <motion.img
          src={iPhone}
          className="iphone"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
}

export default LandingPageComponent;
