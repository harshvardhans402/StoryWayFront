import React, { useEffect, useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../services/AuthContext';
import Navbar from './Navbar';
const StoryList = () => {
    const [stories, setStories] = useState([]);
    const [error, setError] = useState(null);

    const { isLoggedIn } = useContext(AuthContext);

    if (!isLoggedIn) {
        return <Navigate to='/login' />;
    }
    useEffect(() => {
        const token = localStorage.getItem('token');


        if (token) {
            fetch('http://localhost:8080/stories', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch stories');
                    }
                    return response.json();
                })
                .then(data => {
                    setStories(data);
                })
                .catch(error => {
                    setError(error.message);
                });
        } else {
            setError('No token found, please log in first.');
        }
    }, []);

    return (

        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 p-8">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">All Stories</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {stories.map(story => (
                            <div key={story.story_id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
                                <h2 className="text-2xl font-semibold text-gray-700 mb-4">{story.title}</h2>
                                <p className="text-gray-600 mb-4">{story.description}</p>
                                <p className="text-gray-500 italic">By {story.author}</p>
                                <div className="mt-4">
                                    <a
                                        href={`/stories/${story.storyId}`}
                                        className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default StoryList;
