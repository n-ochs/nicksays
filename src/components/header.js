import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import store from '../redux/store';

function Header() {

    useSelector(state => state);

    return (
        <div className="sticky top-0 rounded-br-lg rounded-bl-lg shadow-2xl bg-gradient-to-r from-green-400 to-blue-500">
            <ul className="p-4 space-x-4">

                {/* Link to home & a reset to the state */}
                <li className="inline text-3xl hover:text-gray-600" onClick={() => store.dispatch({ type: 'RESTART' })}><Link to="/">Home</Link></li>

                {/* Divider */}
                <li className="inline text-3xl">|</li>

                {/* Link to the leaderboards. Needed to disable the link while the question was being asked or else the app would crash because flash = null */}
                <li className="inline text-3xl hover:text-gray-600"><Link to={store.getState().status === 'question' ? "/#" : "/leaderboard"}>Leaderboard</Link></li>
            </ul>
        </div>
    );
};

export default Header;