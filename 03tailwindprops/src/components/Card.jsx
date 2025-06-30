import React from 'react';

const Card = ({ username = 'HC', post = 'SDE' }) => {
    // console.log(props)
    return (
        <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
            <div>
                <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/29421579/pexels-photo-29421579.jpeg" />
            </div>
            <div className="flex items-center md:items-start">
                <span className="text-xl font-medium">{username || 'Raj'}</span>
                <span className="font-medium text-sky-500">{post || 'SWE'}</span>
                <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
                    <span>No. 4</span>
                    <span>·</span>
                    <span>2025</span>
                </span>
            </div>
        </div>
    );
};

export default Card;
