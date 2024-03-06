import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faJsSquare, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders'; // Add this import statement
import { Link } from 'react-router-dom';


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    return (
      <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}
                    />
                </h1>
                <p>I am an ambitious software developer with the goal of becoming a full stack
                    developer. I aim to work in a team environment where I can learn from others
                    and contribute to the team's success. 
                </p>
                <p>I am a hard worker and a quick learner who is always looking to improve my
                    skills and expand my knowledge.</p>
                <p>Other than programming I also enjoy learning new languages such as Chinese and Japanese.</p>
                <br />
                <Link to="https://christopher-portfolio.s3.amazonaws.com/Documents/resume.pdf" target="_blank" className='flat-button'>MY RESUME</Link>
            </div>

            <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#EFD81D" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faNodeJs} color="#6bbf47" style={{ transform: 'rotate(-90deg)' }}/>
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
              <i class="devicon-cplusplus-plain"></i>
            </div>
          </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}
    export default About;