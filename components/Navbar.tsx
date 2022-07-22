import React from 'react'
import NavItem from './NavItem'
import { default as MusicIcon } from '../assets/music.svg'
import classes from '../styles/NavBar.module.scss'

function Navbar() {
    return (
        <div className={classes.container}>
            <NavItem icon={<MusicIcon />} name="My Music" />
        </div>
    )
}

export default Navbar
