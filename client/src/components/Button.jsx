/**
 * Reusable Button Component
 * @param {string} txt text that is desplayed on the button
 * @param {string} type sets the button type (i.e., submit) 
 * @param {string} style any css classes you wish to append to the button 
 * @param {number} size the buttons font size in pixels
 * @param {function} onClick the call back for the button that will run when the user clicks on the button
 *  
 */

import React from 'react';
import styles from './css/button.module.css';

//button component
const Button = (props) => {

    //deconstruct props
    const {txt, type, style, size, onClick} = props;

    // setup default values
    const bttnClass = (style) ? style : "button";
    const bttnType = (type) ? type : "button"  
    const bttnSize = (size) ? size : "";
    const bttnClick = (onClick) ? onClick : (e)=>{return false;};

    //return
    return(

        (bttnSize !== "")? 
            <button 
                className={styles.bttn + " " + bttnClass} 
                style={{fontSize:`${bttnSize}px`}} 
                type={bttnType}
                onClick={bttnClick}>
                {txt}
            </button>
        :
            <button 
                className={styles.bttn + " " + bttnClass} 
                type={bttnType}
                onClick={bttnClick}>
                {txt}
            </button>

    )

}

//export
export default Button;