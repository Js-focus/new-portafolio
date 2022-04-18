import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBarResponsive = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='responsive-nav'>
            <button onClick={() => setIsOpen(!isOpen)}>
                { isOpen ? 
                        <i className="fa-solid fa-xmark"></i>
                        :  
                        <i className="fa-solid fa-bars"></i>
                }
            </button>
            {
                isOpen && 
                <div className='menu'>
                    <Link 
                    to={'/'}
                    className="link"
                    > 
                        Home
                    </Link>

                    <Link 
                    to={'/about'}
                    className="link"
                    >
                        About
                    </Link>

                    <Link 
                    to={'/projects'}
                    className="link"
                    >
                        Projects
                    </Link>

                    <Link 
                    to={'/contact'}
                    className="link"
                    >
                        Contact
                    </Link>
                </div>
            }
        </div>
    );
};

export default NavBarResponsive;