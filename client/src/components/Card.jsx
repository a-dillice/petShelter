/**
 * Card Item for the CardList.jsx Component
 * @param {string} label optional label that shows up when user hovers over link (dekstop)
 * @param {string} copy description text that is located on the card  
 * @param {string} src required image resource location 
 * @param {string} path the links target url
 *  
 */

import React from 'react';
import { Link } from '@reach/router';
import styles from './css/card.module.css';

//card component
const Card = (props) => {

    //deconstruct props
    const {label, copy, src, path} = props;

    //image is required so return empty string
    if(!src){
        console.log("%c Error: an image is required for this card component.","background:#cc0000;color:#fff;")
        return("");
    }

    //init defaults
    const labelTxt = (label) ? <figcaption className={styles.cardCaption}>{label}</figcaption> : "";
    const copyTxt = (copy) ? <p className={styles.cardCopy}>{copy}</p> : "";
    const cardPath = (path) ? path : "#";

    //return 
    return(
        <div className={styles.cardWrapper}>
            <Link className={styles.cardLink} to={cardPath}>    
                <figure className={styles.cardImgWrapper}>
                        <img className={styles.cardImg} src={src} alt={`${label}`}/>
                        {labelTxt}
                </figure>
                {copyTxt}
                <p className={styles.clickHere}>Click for more details</p>
            </Link>
        </div>
    )

}

//export
export default Card;