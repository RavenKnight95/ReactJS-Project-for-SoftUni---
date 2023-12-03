import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        Character Create
                    </li>
                    <li>
                        Arena
                    </li>
                    <li>
                        Level Up
                    </li>
                    <li>
                        Log out
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;