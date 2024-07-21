import React, { useState } from 'react';

function App() {
    const [clickCount, setClickCount] = useState(0);
    const [isClicked, setIsClicked] = useState(false);

    const handleImageClick = () => {
        setClickCount(clickCount + 1);
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 70);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
            <div className="absolute top-4 left-4 bg-white p-2 rounded shadow text-gray-900 font-bold">
                Clicks: {clickCount}
            </div>
            <div className="flex items-center justify-center w-full h-full">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Clickable"
                    className={`w-32 h-32 object-cover rounded-full shadow-lg transition-transform duration-200 ${isClicked ? 'scale-90 filter brightness-75' : ''}`}
                    onClick={handleImageClick}
                />
            </div>
        </div>
    );
}

export default App;
