import React from "react";
import { motion } from "framer-motion";

function Features() {
    return (
        <div className="text-center bg-purple-100 p-20 pb-48">
            <h1 className="text-4xl font-bold text-blue-400 mb-20">Features</h1>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">

                <motion.div
                    className="bg-white flex flex-col items-center w-72 p-2 rounded-xl"
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    initial={{ y: "100%", opacity: 0 }}
                >
                    <img
                        src="./project01.jpg"
                        alt=""
                        className="w-full h-72 object-cover mb-4 rounded-xl"
                    />
                    <div className="text-gray-800 font-bold text-xl mb-2">Interactive Stories</div>
                    <p className="text-gray-700 text-base text-center">
                        Shape the story with your choices.
                    </p>
                </motion.div>

                <motion.div
                    className="bg-white flex flex-col items-center w-72 p-2 rounded-xl"
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    initial={{ y: "100%", opacity: 0 }}
                >
                    <img
                        src="./project06.jpg"
                        alt=""
                        className="w-full h-72 object-cover mb-4 rounded-xl"
                    />
                    <div className="text-gray-800 font-bold text-xl mb-2">User-Created Content</div>
                    <p className="text-gray-700 text-base text-center">
                        Create and share your own stories.
                    </p>
                </motion.div>

                <motion.div
                    className="bg-white flex flex-col items-center w-72 p-2 rounded-xl"
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    initial={{ y: "100%", opacity: 0 }}
                >
                    <img
                        src="./project14.jpg"
                        alt=""
                        className="w-full h-72 object-cover mb-4 rounded-xl"
                    />
                    <div className="text-gray-800 font-bold text-xl mb-2">Connect & Collaborate</div>
                    <p className="text-gray-700 text-base text-center">
                        Connect and collaborate with others.
                    </p>
                </motion.div>

            </div>
        </div>
    );
}

export default Features;
