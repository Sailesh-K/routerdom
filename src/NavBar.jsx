import React from "react";
import {Link} from 'react-router-dom'
import './navbar.css'

function NavBar(){
    return(
        <>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to='/fsd'>Full Stack Dev</Link>
                    </li>
                    <li>
                        <Link to='/ds'>Data Science</Link>
                    </li>
                    <li>
                        <Link to='/cyber'>Cyber Sec</Link>
                    </li>
                    <li>
                        <Link to='/career'>Career</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;