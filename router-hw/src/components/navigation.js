import React from 'react';
import {urls} from '../constants'
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul className = "menu-main" >
                {
                    urls.map(item => (
                        <li>
                            <NavLink to={item.url} exact>{item.title}</NavLink>
                        </li>
                    ))
                }

            </ul>
        </nav>
    );
};

export default Navigation;
