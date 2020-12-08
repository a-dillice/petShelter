/**
 * Video Banner Component
 * @param {string} header Optional string for video banner primary header 
 * @param {string} subheader Optional string for video banner secondary header 
 * @param {string} src Required string for the video source location  -- usally located inside PUBLIC folder somewhere 
 * @param {array} buttons Optional array of key value objects to generate button(s) formated like so: {copy:"some string", style:{class-name}, url:"/relative/or/external", title:"a button title", target:"_blank", icon:"like fonts-awesome"}
 *  
 */

import React from 'react';
import styles from "./css/videoBanner.module.css";
import { Link } from '@reach/router';

//banner component
const VideoBanner = (props) => {

    //deconstruct props
    const {header, subheader, src, buttons} = props;

    //check
    const bannerHeader = (header) ? <h1 className={styles.bannerH1}>{header}</h1> : "";
    const bannerSubheader = (subheader) ? <h2 className={styles.bannerH2}>{subheader}</h2> : "";
    const bannerButtons = (buttons && (buttons.length > 0)) ? buttons : [];

    //requires src file
    if(!src){
        console.log("%c This Banner requires a sourc file", "backgroundColor:#cc0000;color:#fff;");
        return "";
    }

    //return
    return(
        <div className={styles.bannerWrapper}>
            <div className={styles.bannerCopyWrapper}>
                <div className={styles.row}>
                    {bannerHeader}
                    {bannerSubheader}
                    {bannerButtons.map((item, index) => {
                        
                        //init
                        const bttnUrl = (item.url) ? item.url : "",
                        bttnClass = (item.style) ? `${item.style} ${styles.bttn}` : styles.bttn,
                        bttnTarget = (item.target) ? item.target : "_blank",
                        bttnHref = (item.url) ? item.url : "#",
                        bttnTitle = (item.title) ? item.title : "no title given",
                        bttnCopy = (item.copy) ? item.copy : "",
                        bttnIcon = (item.icon) ? <i key={index} className={item.icon}/> : "";

                        //external link
                        if(bttnUrl !== "" && (/^https?:\/\//.test(bttnUrl))){
                            
                            //build banner children elements
                            const childElements = (bttnIcon !== "") ? [bttnCopy, bttnIcon] : bttnCopy;

                            //dynamically create anchor
                            return React.createElement("a", {
                                className: bttnClass,
                                "target": bttnTarget,
                                "href": bttnHref,
                                title: bttnTitle,
                                key: index
                            }, childElements);

                        //internal link
                        }else{

                            //use link
                            return <Link 
                                key={index} 
                                className={bttnClass} 
                                to={`${bttnUrl}`} 
                                title={bttnTitle}>
                                    {bttnCopy}
                                    {bttnIcon}
                            </Link>;

                        }
                    })}
                </div>
            </div>
            <video className={styles.video} src={src} autoPlay loop muted />
        </div>
    );

}

//export banner
export default VideoBanner;