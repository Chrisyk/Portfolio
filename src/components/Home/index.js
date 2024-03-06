import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Projects from './Projects';
import Loader from "react-loaders";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['C','h', 'r', 'i', 's', 't', 'o', 'p', 'h', 'e', 'r']
    const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1084) {
                console.log('above 1084');
                window.scrollTo(0, 0); // Scroll to the top of the page
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <img src={require('../../assets/images/handwave.png')} alt="Hi" />
                    <br />
                    <span className={`${letterClass} _14`}>I</span>
                    <span className={`${letterClass} _15`}>'m</span>
                    
                    <span className={`${letterClass} _16`}> </span>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={17} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={18} />
                    </h1>
                    <h2>Frontend Developer / Undergraduate Researcher</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                    <div className="languages">
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
                        <i className="devicon-cplusplus-plain"></i>
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
                        <i className="devicon-python-plain"></i>
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
                        <i className="devicon-javascript-plain"></i>
                     </div>

                    <div className="project-zone">
                        <Projects />
                    </div>
                    
            </div>
            
            <div className="LogoContainer">
                <Logo />
            </div>
        </div>
        
        <Loader type="pacman" />
        </>  
    );
}

export default Home;