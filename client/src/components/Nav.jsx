/**
* Global Nav Component
*/

import React, {useState} from 'react';
import styles from './css/nav.module.css';
import {Link} from '@reach/router';

//setup component
const Nav = (props) =>{

    //init menu state
    const [clicked, setClicked] = useState(false);

    //toggle mobile menu
    const mobileMenuToggle = (e) =>{
        return setClicked(!clicked);
    }

    //return
    return(
        <nav className={styles.navBar}>

            <div className={styles.navbarContainer}>

                <Link to="/" className={styles.navbarLogo} onClick={(e) => {setClicked(false)}}>
                    PET SHELTER<i className={styles.logoIcon + " fas fa-paw"}/>
                </Link>
                
                <i className={styles.mobile + " " + styles.menuIcon + " fas " + (clicked ? "fa-times" : "fa-bars")} onClick={mobileMenuToggle}/>
                
                <div className={styles.menuWrapper + (clicked ? " " + styles.open : "")}>
                    <ul className={styles.navMenu}>
                        <li className={"nav-item "}>
                            <Link className="nav-link" to="/" onClick={mobileMenuToggle}>
                                Home
                            </Link>
                        </li>
                        <li className={"nav-item "}>
                            <Link className="nav-link" to="/about" onClick={mobileMenuToggle}>
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pets/new" onClick={mobileMenuToggle}>
                                Add A Pet
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>

        </nav>
    )
}

//export
export default Nav;

