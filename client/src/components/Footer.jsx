/**
 * Reusable Footer -- all values required
 * @param {string} copy main text for copy above subscribe form 
 *  
 */

import React, { useState } from 'react';
import styles from './css/footer.module.css';
import Button from './Button';
import { Link } from '@reach/router';

//footer component
const Footer = (props) => {

    //deconstruct props
    const {copy} = props;

    //setup copyright info
    const copyRights = "Copyright " + new Date().getFullYear() + ". All Rights Reserved.";

    //init
    const footerHeader = (copy) ? <h2 className={styles.footerCopyHeader}>Be the first!</h2> : "";
    const footerCopy = (copy) ? <p className={styles.footerCopy}>{copy}</p> : "";

    //init valid email
    const [validEmail, setValidEmail] = useState(false);

    //init subscriber email input
    const [subscriber, setSubscriber] = useState({
        "email":""
    });

    //get 
    const email = (e) => {

        //get current input
        const currentValue = e.target.value;

        //update the email given by user
        setSubscriber({
            [e.target.name]:currentValue
        });

        //success: make sure we have at least a letter and it passes the regex check
        if((currentValue.length > 0) && (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(subscriber.email))){
            
            //return true
            setValidEmail(true);
            
        //failed
        }else{
            
            //return false
            setValidEmail(false);

        }

    }

    //onClick method: subscribe button
    const subscribed = (e) => {

        //prevent
        e.preventDefault();

        //success: validate the email
        if(validEmail){
            
            //display alert for testing purposes
            alert("Thanks for subscribing! We're saving this email '" + subscriber.email + "' in our database.");
            
        }

    }

    //return
    return(
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                {footerHeader}
                {footerCopy}
                <form className={styles.subscribeForm}>
                    <input 
                        id={styles.inputId} 
                        className={styles.subscribeInput + (((!validEmail)&&(subscriber.email.length > 0)) ? (" " + styles.emailError) : "")} 
                        type="text" 
                        name="email" 
                        onChange={email}
                        required
                        />
                    <label htmlFor={styles.inputId} className={styles.subscribeLabel}>email</label>
                    <Button 
                        style={`${styles.subscribeBttn}`} 
                        txt={"Subscribe"} 
                        type={'submit'} 
                        onClick={subscribed}/>
                </form>
                <ul className={styles.footerList + " " + styles.footerLinksWrapper}>
                    <li>
                        <Link className={styles.footerLinks} to={"/about"}> About Us </Link>
                    </li>
                    <li>
                        <Link className={styles.footerLinks} to={"#"}> Testimonials </Link>
                    </li>
                    <li>
                        
                        <Link className={styles.footerLinks} to={"#"}> Terms and Conditions </Link>
                    </li>
                </ul>

                <ul className={styles.footerList}>
                    <li>
                        <a 
                            className={styles.footerIcons + " " + styles.instagramIcon} 
                            href={"https://www.instagram.com/"} 
                            title={"Go to Instagram"}
                            rel="noopener noreferrer"
                            target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                        
                    </li>
                    <li>
                        <a 
                            className={styles.footerIcons + " " + styles.facebookIcon} 
                            href={"https://www.facebook.com/"} 
                            title={"Go to facebook"}
                            rel="noopener noreferrer"
                            target="_blank">
                            <i className="fab fa-facebook-square"></i>
                        </a>
                    </li>
                    <li>
                        <a 
                            className={styles.footerIcons + " " + styles.youtubeIcon} 
                            href={"https://www.youtube.com/"} 
                            title={"#ff0000 Go to youtube"}
                            rel="noopener noreferrer"
                            target="_blank">
                            <i className="fab fa-youtube"></i>
                        </a>                                
                    </li>
                    <li>
                        <a 
                            className={styles.footerIcons + " " + styles.twitterIcon}
                            href={"https://www.twitter.com/"}
                            title={"#1da1f2 Go to twitter"}
                            rel="noopener noreferrer"
                            target="_blank">
                            <i className="fab fa-twitter-square"></i>
                        </a>  
                    </li>
                </ul>
                <p className={styles.copyright}>{copyRights}</p>
            </div>
        </footer>
    )

}

//export
export default Footer;