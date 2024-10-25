import React from 'react';
import './Main.css';

const Main = () => {
    return (
        <div className='relative mt-[350px] '>
            <div className="main z-30 absolute top-[-300px] rounded-lg p-5 bg-gradient-to-r from-blue-200 via-white to-yellow-200 text-center ">
            
                <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
                <p className="text-gray-600 mb-6">Get the latest updates and news right in your inbox!</p>
                
                <form className="flex justify-center items-center gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full max-w-xs p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-gradient-to-r from-yellow-300 to-orange-400 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition">
                        Subscribe
                    </button>
                </form>
            </div>
        
        </div>
    );
};

export default Main;
