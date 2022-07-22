import React from 'react'
import {NAV} from './types'
import Image from 'next/image'
import classes from '../styles/NavItem.module.scss'

function NavItem( title :NAV) {
    return (
        <div className={classes.container}>
            <div className={classes.icon}>{title.icon}</div>
            <div>{title.name}</div>
        </div>
    )
}

export default NavItem
