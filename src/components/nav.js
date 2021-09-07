import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {

    

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div>
        <a class="navbar-brand" >Turbo Central</a>
        </div>
        
        
        <ul class="navbar-nav me-auto">
        <Link to="/about">
        <button Button variant="outlined" color="primary">About</button>
        </Link>
            <Link to="shop">
            <button variant="contained" color="primary" >Shop</button>
            </Link>
            
        </ul>
        </nav>
    );
}

export default  Nav;
