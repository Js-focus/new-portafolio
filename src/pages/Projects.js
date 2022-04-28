import React from 'react';
import '../styles/projects.css'
import ecommerce from '../assets/projets/ecommerce.png';
import pokedex from '../assets/projets/pokedex.png';
import crud from '../assets/projets/crud.png';
import randm from '../assets/projets/rick and morty.png';
import weather from '../assets/projets/weather.png';
import toDo from '../assets/projets/todo.png';


const Projects = () => {
    return (
        <div className='projects'>
            <h1>Recent projects</h1>
            <div className='contain'>
                <div className='card-projet'>
                    <h2>E-commerce</h2>
                    <div className='img'>
                        <img src={ecommerce} alt="" width='550' height='300' />
                    </div>
                    <div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Dolore ea quam, officia iure amet praesentium deserunt alias 
                            pariatur in facilis quisquam labore cupiditate rem aperiam dicta 
                            distinctio deleniti nam molestias error? Tempore esse consequatur
                             beatae vero labore deserunt, cum magni?
                        </p>
                        <div className='link'>
                            <a href="https://symphonious-medovik-896aa3.netlify.app/" target='blank'>
                                Visit
                            </a>
                            <a href="https://github.com/Js-focus/proyecto-final" target='blank'>
                                Github
                            </a>
                        </div>
                    </div>
                </div>
                <div className='card-projet'>
                    <h2>Pokedex</h2>
                    <div className='img'>
                        <img src={pokedex} alt="" width='550' height='300' />
                    </div>
                    <div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Dolore ea quam, officia iure amet praesentium deserunt alias 
                            pariatur in facilis quisquam labore cupiditate rem aperiam dicta 
                            distinctio deleniti nam molestias error? Tempore esse consequatur
                             beatae vero labore deserunt, cum magni?
                        </p>
                        <div className='link'>
                            <a href="https://glittery-llama-7c4c4e.netlify.app/" target='blank'>
                                Visit
                            </a>
                            <a href="https://github.com/Js-focus/quinto-entregable" target='blank'>
                                Github
                            </a>
                        </div>
                    </div>
                </div>
                <div className='card-projet'>
                    <h2>Crud</h2>
                    <div className='img'>
                        <img src={crud} alt="" width='550' height='300' />
                    </div>
                    <div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Dolore ea quam, officia iure amet praesentium deserunt alias 
                            pariatur in facilis quisquam labore cupiditate rem aperiam dicta 
                            distinctio deleniti nam molestias error? Tempore esse consequatur
                             beatae vero labore deserunt, cum magni?
                        </p>
                        <div className='link'>
                            <a href="https://tourmaline-sable-8b31ab.netlify.app/" target='blank'>
                                Visit
                            </a>
                            <a href="https://github.com/Js-focus/cuarto-entregable" target='blank'>
                                Github
                            </a>
                        </div>
                    </div>
                </div>
                <div className='card-projet'>
                    <h2>Rick and Morty App</h2>
                    <div className='img'>
                        <img src={randm} alt="" width='550' height='300' />
                    </div>
                    <div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Dolore ea quam, officia iure amet praesentium deserunt alias 
                            pariatur in facilis quisquam labore cupiditate rem aperiam dicta 
                            distinctio deleniti nam molestias error? Tempore esse consequatur
                             beatae vero labore deserunt, cum magni?
                        </p>
                        <div className='link'>
                            <a href="https://focused-kalam-541a22.netlify.app/" target='blank'>
                                Visit
                            </a>
                            <a href="https://github.com/Js-focus/tercer-entregable" target='blank'>
                                Github
                            </a>
                        </div>
                    </div>
                </div>
                <div className='card-projet'>
                    <h2>Weather app</h2>
                    <div className='img'>
                        <img src={weather} alt="" width='550' height='300' />
                    </div>
                    <div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Dolore ea quam, officia iure amet praesentium deserunt alias 
                            pariatur in facilis quisquam labore cupiditate rem aperiam dicta 
                            distinctio deleniti nam molestias error? Tempore esse consequatur
                             beatae vero labore deserunt, cum magni?
                        </p>
                        <div className='link'>
                            <a href="https://silly-khorana-c5379b.netlify.app/" target='blank'>
                                Visit
                            </a>
                            <a href="https://github.com/Js-focus/weather-app" target='blank'>
                                Github
                            </a>
                        </div>
                    </div>
                </div>
                <div className='card-projet'>
                    <h2>To do app</h2>
                    <div className='img'>
                        <img src={toDo} alt="" width='550' height='300' />
                    </div>
                    <div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Dolore ea quam, officia iure amet praesentium deserunt alias 
                            pariatur in facilis quisquam labore cupiditate rem aperiam dicta 
                            distinctio deleniti nam molestias error? Tempore esse consequatur
                             beatae vero labore deserunt, cum magni?
                        </p>
                        <div className='link'>
                            <a href="https://friendly-shaw-8a3759.netlify.app/" target='blank'>
                                Visit
                            </a>
                            <a href="https://github.com/Js-focus/cuarta-semana" target='blank'>
                                Github
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;