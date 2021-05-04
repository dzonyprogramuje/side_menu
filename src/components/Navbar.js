import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {Link} from 'react-router-dom'

import {SidebarData} from './SidebarData'

export default function Navbar() {
    const [isOpen, toggler] = useState(false)

    const handler = ()=> toggler(!isOpen)
    
    console.log("isOpen")

    return (
        <>
        <div className="navbar">
            <Link to="#" className="menu-bars" onClick={handler}>
                <FaIcons.FaBars />
            </Link>
        </div>
        <nav className={isOpen ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items">
                <li class="navbar-toggle">
                    <Link to='#' className="menu-bars" onClick={handler}>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {SidebarData.map((item, index) =>(
                    <li key={index} className={item.class}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
        </>
    )
}