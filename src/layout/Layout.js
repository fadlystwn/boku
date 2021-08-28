import React from 'react'
import Navigation from '../components/navigation/Navigation';

const navigation = [
    {id: '1', link: '/', name: 'Home'},
    {id: '2', link: '/Profile', name: 'Profile'},
]

const Layout = (props) => {
    return (
        <div className="layout">
            <Navigation menu={navigation}/>
            {props.children}
            <footer><center>Copyright 2021</center></footer>
        </div>
    )
}

export default Layout