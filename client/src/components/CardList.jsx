import React, {useEffect, useState} from 'react';
import Card from './Card';
import styles from './css/cardList.module.css';
import {Link} from '@reach/router';
import {apiCall} from './helpers/Utilities';

//Card List component
const CardList = (props) => {

    // setup api url
    const apiURL = "//localhost:8000/api"

    // set pet list var
    const [pets, setPets] = useState([]);

    // setup hook
    useEffect(() => {

        //helper api call
        apiCall({
            method:"get",
            url:apiURL
        },
        (res) =>{
            setPets(res.data.results);
        },
        (err) => {
            console.log(err);
        });

    },[apiURL]);


    //return
    return(
        <>
            <h1 className={styles.header}>Pets Available for Adoption</h1> 
            {(pets.length < 1) ? <p className={`${styles.noItemsMsg} text-danger`}>We currently have no pets available for adoption. <Link className={`text-info`} to="/pets/new">Click here to add a pet.</Link></p>: ""}
            <div className={styles.cardSection}>
                <ul className={styles.cardListWrapper}>
                    {pets.map((friend, index) => {
                        return(
                            <li key={index}>
                                <Card 
                                    label={friend.name} 
                                    copy={friend.description} 
                                    src={`https://placeimg.com/320/${240 + index}/animals`} 
                                    path={`/pets/${friend._id}`}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )

} 

//export
export default CardList;