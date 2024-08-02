import React from "react";
import { motion } from "framer-motion";
function Features() {


    return (
        <div className="text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-80% p-20 pb-48">
            <h1 className="text-4xl font-bold text-yellow-300 mb-20 ">Features</h1>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">

                <motion.div className="bg-blue-100  flex flex-col items-center w-72 p-2 rounded-xl "
                    whileInView={{ opacity: 1, x: "calc(100vw - 100vw)" }}
                    transition={{ duration: 0.5 }}
                    initial={{ x: "-100%", opacity: 0 }}
                >
                    <img src="./src/project01.jpg" alt="" className="w-full h-72 object-cover mb-4 rounded-xl" />
                    <div className="text-gray-700 font-bold text-xl mb-2">Interactive Stories</div>
                    <p className="text-gray-700 text-base text-center">
                        Shape the story with your choices.
                    </p>
                </motion.div>

                <motion.div className="bg-blue-100  flex flex-col items-center w-72 p-2 rounded-xl"
                    whileInView={{ opacity: 1, x: "calc(100vw - 100vw)" }}
                    transition={{ duration: 0.5 }}
                    initial={{ x: "-100%", opacity: 0 }}
                >
                    <img src="./src/project06.jpg" alt="" className="w-full h-72 object-cover mb-4 rounded-xl" />
                    <div className="text-gray-700 font-bold text-xl mb-2">User-Created Content</div>
                    <p className="text-gray-700 text-base text-center">
                        Create and share your own stories.
                    </p>
                </motion.div>

                <motion.div className="bg-blue-100 flex flex-col items-center w-72 p-2 rounded-xl"
                    whileInView={{ opacity: 1, x: "calc(100vw - 100vw)" }}
                    transition={{ duration: 0.5 }}
                    initial={{ x: "-100%", opacity: 0 }}
                >
                    <img src="./src/project14.jpg" alt="" className=" rounded-xl w-full h-72 object-cover mb-4" />
                    <div className="text-gray-700 font-bold text-xl mb-2">Connect & Collaborate</div>
                    <p className="text-gray-700 text-base text-center">
                        Connect and collaborate with others.
                    </p>
                </motion.div>

            </div>
        </div>
    );
}

export default Features;
