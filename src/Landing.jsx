import React, { useEffect, useRef } from 'react';
import './App.css';
import { motion } from "framer-motion";
import './meri.jpg';
import { useInView } from "framer-motion"
import { animate } from "framer-motion"
// import ThreeDModel from './ThreeDModel.jsx'
import HomePage from './Home.jsx';
import VideoBackground from './VideoBackground.jsx';
import Features from './Features.jsx';

function Landing() {

    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {

        if (isInView) {
            const mydiv = document.getElementById("first");
            animate(mydiv, { x: ["60vw", 0] }, { type: "spring", duration: 2 })
        }

    }, [isInView]);





    return (
        <div className=" " >
            <HomePage />
            <VideoBackground />
            <Features />


        </div>
    );
};

export default Landing;




{/*
      <motion.div
        whileInView={{ opacity: 1, x: "calc(100vw - 100vw)" }}
        transition={{ duration: 0.5 }}
        initial={{ x: "-100%", opacity: 0 }}
        className="p-4 bg-blue-300 m-2" id="first"><img src="./src/meri.jpg" height={400} /></motion.div>

*/}