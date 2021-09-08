import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {

    

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div>
            <Link to="/">
            <a class="navbar-brand" >Turbo Central</a>
            </Link>
        
        </div>
        
        
        <ul class="navbar-nav me-auto">
            <li >
                <Link to="/about">
                    <button type="button" class="btn btn-outline-light">About</button>
                </Link>
                 <Link to="shop">
                    <button type="button" class="btn btn-outline-light">Shop</button>
                </Link>
            </li>
        
            
        </ul>
        </nav>
    );
}

export default  Nav;
