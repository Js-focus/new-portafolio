import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/nav-bar.css'
import NavBarResponsive from './NavBarResponsive';

const NavBar = () => {
    
    const navigate = useNavigate();
    const widthScreen = window.innerWidth;
    console.log( widthScreen);

    return (
        <div className='nav'>
            <div className='title'>
                <h1 onClick={() => navigate("/")}>Jc-focus</h1>
            </div>
            <div className='nav-link'>
                <Link 
                to={'/'}
                className="link-no-responsive"
                > 
                    Home
                </Link>
                <Link 
                to={'/about'}
                className="link-no-responsive"    
                >
                    About
                </Link>
                <Link 
                to={'/projects'}
                className="link-no-responsive"
                >
                    Projects
                </Link>
                <Link 
                className="link-no-responsive"
                to={'/contact'}
                >
                    Contact
                </Link>
            </div>
            {
                (widthScreen < 800) && <NavBarResponsive />
            }
        </div>
    );
};

export default NavBar;