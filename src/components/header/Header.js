import React from 'react';
import { useStyles } from './HeaderStyle';
import { Link } from 'react-router-dom';

const Header = () => 
{
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <Link to="/" className={classes.link}>All Brands</Link>
            <Link to="/Brands/new" className={classes.link}>Create Brand</Link>
        </div>
    )
}

export default Header