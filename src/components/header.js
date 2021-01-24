import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="sticky top-0 rounded-br-lg rounded-bl-lg shadow-2xl bg-gradient-to-r from-green-400 to-blue-500">
            <ul className="p-4 space-x-4">
                <li className="inline text-3xl hover:text-gray-600"><Link to="/">Home</Link></li>
                <li className="inline text-3xl">|</li>
                {/* <li className="inline text-3xl hover:text-gray-600"><Link to="/instructions">How To Play</Link></li>
                <li className="inline text-3xl">|</li> */}
                <li className="inline text-3xl hover:text-gray-600"><Link to="/leaderboard">Leaderboard</Link></li>
            </ul>
        </div>
    );
};

export default Header;