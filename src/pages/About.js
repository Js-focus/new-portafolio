import React from 'react';
import '../styles/about.css';
import cat2 from '../assets/9.jpg';
import my1 from '../assets/2.jpg';
import cascade from '../assets/8.jpg';
import tunel from '../assets/6.jpg';
import cat1 from '../assets/7.jpg'

const About = () => {
    return (
        <div className='about'>
            <h1>
                About
            </h1>
            <strong>
                This is me:
            </strong>

            <section className='section-about'>
                <img src={cat2} alt="" width='300' height='300'/>
                <p>
                    Yeah i'm a cat, but i now in my human fase and i 
                    currently look more like this: 
                </p>
            </section>

            <section className='section-about'>
                <p>
                    Yap i have also dog friends, i'm grew up in a small town on the forest in Mexico.
                    I think this explain better:
                </p>
                <img src={my1} alt="" width='300' height='300'/>
            </section>
            
            <section className='section-about'>
                <img src={cascade} alt="" width='300' height='500' />
                <p>
                    I love do trekking i think is the better way to restart my mind and be focused,
                    i only need my backpack and my sombrero to be in the word that i love.
                </p>
            </section>
            
            <section className='section-about'>
                <p>
                    I started coding in the university for one class and for me was so interesting 
                    does programs in visual basic, my live change and i forget everything but i'm 
                    most focused and i think  my past creat my strong mind fulness, i love my life 
                    when i write and find solutions for doing in code.  
                </p>
                <img src={tunel} alt="" width='300' height='300' />
            </section>
            
            <section className='section-about-last'>
                <p>
                    Don't take your look of my way i grow day by day. See ya and don't forget to be in contact.
                </p>
                <img src={cat1} alt="" width='300' height='300' />
            </section>
        </div>
    );
};

export default About;