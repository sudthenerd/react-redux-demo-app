import React from 'react';
import { Link } from 'react-router-dom';
// --------------------------------------------------- //

const SideNav: React.FC = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <Link to="/">Home</Link>
            </li>
            <li className="list-group-item">
                <Link to="/todo">To Do</Link>
            </li>
        </ul>
    );
}

export default SideNav;