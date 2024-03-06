import { useEffect, useRef, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import Loader from 'react-loaders'; // Add this import statement
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef();
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_otck0um', 'template_otsdbr6', form.current, 'WbHhvZepEQttP3mFP')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

  return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                     letterClass={letterClass}
                     strArray={['C','o','n','t','a','c','t', ' ', 'm','e']}
                     idx={15} />
                </h1>
                <p>
                    I am interested in intership opportunities in the field of software engineering
                    and am looking to work this Summer of 2024. If you would like to get in touch with me,
                    please contact me via email or LinkedIn!
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name="from_name" placeholder="Name" required/>
                            </li>
                            <li className='half'>
                                <input type='email' name="email" placeholder="Email" required/>
                            </li>
                            <li>
                                <input placeholder="Subject" 
                                 type="text"
                                 name="subject"
                                 required/>
                            </li>
                            <li>
                                <textarea
                                placeholder="Message"
                                name="message"
                                required
                                ></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            
            <div className='self'>
            <img src="https://christopher-portfolio.s3.amazonaws.com/images/selfie.jpg" alt='self' />
            </div>
        </div>
        
        <Loader type="pacman" />
    </>
  )
}

export default Contact