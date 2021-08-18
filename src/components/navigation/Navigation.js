import React from 'react'
import './Navigation.css';

const Navigation = (props) => {
    return (
        <nav className="Navigation">
            <ul>
               {props.menu && props.menu.map( item => (
                   <li key={item.id} className="menu"><a href={item.link}>{item.name}</a></li>
               ))} 
            </ul>
        </nav>
    )
}

export default Navigation
