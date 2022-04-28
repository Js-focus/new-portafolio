import React from 'react';
import '../styles/home.css';
import fotoJC from '../assets/jc.png'

const Home = () => {
    return (
        <div className='home'>
            <div className='info'>
                <div className='info-img'>
                    <img src={fotoJC} alt="foto Juan Carlos"  width="350" height="350"/>
                </div>
                <section>
                    <h1>Hello word! I'm Juan Carlos</h1>
                    <h2>
                        Full-stack web developer
                    </h2>
                    <p>
                        Passionate for creating innovative experiences,
                        responsive layouts, built within the best practices for 
                        delivering high quality and scalable products.
                    </p>
                </section>
            </div>  
            <h2>
                Technologies i work with
            </h2>
            <div id='cards'>
                <div className='card-skill'>
                    <i className="fa-brands fa-html5"></i>
                    <strong>HTMl</strong>
                </div>
                <div className='card-skill'>
                    <i className="fa-brands fa-css3-alt"></i>
                    <strong>CSS</strong>
                </div>
                <div className='card-skill'>
                    <i className="fa-brands fa-js"></i>
                    <strong>Javascript</strong>
                </div>
                <div className='card-skill'>
                    <i className="fa-brands fa-react"></i>
                    <strong>React</strong>
                </div>
                <div className='card-skill'>
                    <i className="fa-brands fa-node-js"></i>
                    <strong>Node</strong>
                </div>
                <div className='card-skill'>
                    <div className='icon-double'>
                        <i className="fa-solid fa-cloud"></i>
                        <i className="fa-solid fa-gear"></i>
                    </div>
                    <strong>Api Rest</strong>
                </div>
                
                <div className='card-skill'>
                    <i className="fa-brands fa-git-alt"></i>
                    <strong>Git</strong>
                </div>
                <div className='card-skill'>
                    <i className="fa-brands fa-github"></i>
                    <strong>Github</strong>
                </div>
                <div className='card-skill'>
                    <div className='icon-double'>    
                        <i className="fa-solid fa-mobile-screen"></i>
                        <i className="fa-solid fa-display"></i>    
                    </div>
                    <strong>Responsive Desing</strong>
                </div>
            </div>
        </div>
       );
}; 

export default Home;<h1>    </h1>