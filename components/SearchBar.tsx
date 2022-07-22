import React from 'react'
import { search } from './types'
import classes from '../styles/SearchBar.module.scss'


function SearchBar(placeholder:search) {
    return (
        <div className={classes.container}>
            <input className={classes.input} placeholder={placeholder.search} />
            <div className={classes.icon}>{placeholder.icon}</div>
        </div>
    )
}

export default SearchBar
