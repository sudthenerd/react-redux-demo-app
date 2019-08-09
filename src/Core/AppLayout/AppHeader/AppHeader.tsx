import React from 'react';
import { Link } from 'react-router-dom';
// --------------------------------------------------- //

const AppHeader: React.FC = () => {
    return (
        <ul className="nav d-flex justify-content-center bg-light mb-4">
            <li className="nav-item">
                <Link className="nav-link"  to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/todo">To Do</Link>
            </li>
        </ul>
    );
}

export default AppHeader;