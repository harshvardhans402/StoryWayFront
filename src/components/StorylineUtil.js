
export async function fetchStorylines(storyId) {
    const cacheKey = `storylines_hierarchy_${storyId}`;
    const cachedData = localStorage.getItem(cacheKey);


    // if (cachedData) {
    //     // If cached data exists, return it
    //     return JSON.parse(cachedData);
    // }

    // Retrieve token from localStorage
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('No token found, please log in first.');
    }


    try {
        const response = await fetch(`http://localhost:8080/getStoryline/${storyId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            // Handle errors from the server
            throw new Error('Failed to fetch storylines');
        }

        const storylines = await response.json();

        const hierarchicalData = buildHierarchy(storylines);

        // Store the fetched data in localStorage
        localStorage.setItem(cacheKey, JSON.stringify(hierarchicalData));
        return hierarchicalData;
    } catch (error) {
        console.error(error.message);
        throw error; // Re-throw the error to be handled by the calling code
    }
}



const buildHierarchy = (storylines) => {
    const map = {};
    const roots = [];

    // Initialize the map with storylines
    storylines.forEach(storyline => {
        map[storyline.storylineId] = { ...storyline, children: [] };
    });

    // Build the hierarchy
    storylines.forEach(storyline => {
        // Check if storyline has a parent ID
        if (storyline.pid === 0 || storyline.pid === undefined) {
            // No parent ID, add as root
            roots.push(map[storyline.storylineId]);
        } else {
            // Parent ID exists, add to parent's children
            const parent = map[storyline.pid];
            if (parent) {
                parent.children.push(map[storyline.storylineId]);
            } else {
                console.warn(`Parent with ID ${storyline.pid} not found for storyline ${storyline.storylineId}`);
            }
        }
    });
    console.log(roots);
    return roots;
};



export function findStoryline(storylineId, storylines) {
    for (let storyline of storylines) {
        if (storyline.storylineId === parseInt(storylineId)) {
            return storyline;
        }
        const childStoryline = findStoryline(storylineId, storyline.children);
        if (childStoryline) {
            return childStoryline;
        }
    }
    return null;
}