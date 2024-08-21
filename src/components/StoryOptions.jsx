import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../services/AuthContext';
import Navbar from './Navbar';

const StoryOptions = () => {

    const { isLoggedIn } = useContext(AuthContext);

    if (!isLoggedIn) {
        return <Navigate to='/login' />;
    }

    const startNewStory = () => {
        // Route for starting a new story
    };

    const resumeStory = () => {
        // Route for resuming an existing story
    };

    const createCustomStory = () => {
        // Route for creating a custom story
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
                <h1 className="text-4xl font-bold text-white mb-10">Welcome to StoryWay</h1>
                <div className="flex space-x-4">
                    <button
                        onClick={startNewStory}
                        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-300"
                    >
                        Start New Story
                    </button>
                    <button
                        onClick={resumeStory}
                        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-300"
                    >
                        Resume Story
                    </button>
                    <button
                        onClick={createCustomStory}
                        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-300"
                    >
                        Create Custom Story
                    </button>
                </div>
            </div>
        </>
    );
};

export default StoryOptions;
