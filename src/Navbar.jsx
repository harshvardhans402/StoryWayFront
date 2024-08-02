import React from "react"
import { Link } from "react-router-dom";
function Navbar() {

    return (<>

        <div>
            <div className="mx-auto max-w-screen-xl px-6 lg:px-8 relative fixed ">
                <div className="relative flex h-16 space-x-10 w-full">
                    <div className="flex justify-start">
                        <img className="block h-8 w-auto mt-4" height="32" src="https://www.svgrepo.com/show/303650/neo-logo.svg" />

                    </div>
                    <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8 flex-1 justify-end justify-self-end ">
                        <Link to='/login' className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-purple-600 transition duration-300">
                            Sign In
                        </Link>
                        <Link to='/signup' className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-purple-600 transition duration-300">
                            Sign Up
                        </Link>

                    </div>
                </div>
            </div></div>

    </>);
}



export default Navbar;