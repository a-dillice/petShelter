import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/css/styles.module.css';
import Button from '../components/Button';
import {Link, navigate} from '@reach/router'; 
import {apiCall} from '../components/helpers/Utilities';

// Show component
const Show = (props) => {

    // setup api url
    const apiURL = "//localhost:8000/api"; 

    // set var for one pet
    const [pet, setPet] = useState({});

    // setup hook
    useEffect(() => {

        //helper api call
        apiCall({
            method:"get",
            url:apiURL + "/" + props.id
        },
        (res) =>{
            setPet(res.data.results);
        },
        (err) => {
            console.log(err);
        });

    },[props.id]);
    
    // adobt pet event
    const adoptPet = (e) => {
        
        //prevent id
        e.preventDefault();

        // if pet id exists
        if(pet._id){

            //helper api call
            apiCall({
                method:"delete",
                url:apiURL + "/destroy/" + pet._id,
            },
            () =>{
                // go back home
                navigate("/");
            },
            (err) => {
                console.log(err);
            });

        }

    }


    // show
    return (pet._id) ?
    (
        <div className={styles.wrapper}>

            <div className={styles.adoptButtonWrapper}>
                <Button style={`${styles.adoptButton} fas fa-heart`} txt={`Adopt ${pet.name}`} size={20} onClick={adoptPet}/> 
            </div>
                
            <ul className="list-group">
                <li className={`list-group-item pl-1 pr-1 ${styles.showHeader}`}>
                    <h3 className="ml-0 mb-0">
                        <span className={styles.showName}>{pet.name}'s</span> Details: <i className="fas fa-search"></i>
                    </h3> 
                </li>
                <li className="list-group-item">
                    <img className={styles.petProfile} src={"https://placeimg.com/550/320/animals"} alt={`${pet.name}'s profile`}/>
                </li>
                <li className="list-group-item">
                    <span className={styles.showDetails}><i className="fas fa-paw"></i> Pet Type:</span>
                    {pet.type}
                </li>
                <li className="list-group-item">
                    <span className={styles.showDetails}><i className="fas fa-pen"></i> Description:</span>
                    {pet.description}
                </li>
                    {
                        (pet.skill1 || pet.skill2 || pet.skill3) ?
                        <li className="list-group-item">
                            <span className={styles.showDetails}><i className="fas fa-book"></i> Skills:</span>
                            <ul className={styles.skillList}>
                                {(pet.skill1) ? <li>{pet.skill1}</li> : ""}
                                {(pet.skill2) ? <li>{pet.skill2}</li> : ""}
                                {(pet.skill3) ? <li>{pet.skill3}</li> : ""}
                            </ul>
                        </li> : ""
                    }
                <li className={`list-group-item ${styles.editBttnWrapper}`}>
                    <Link className={`${styles.editButton} bttn`} to={`/pets/${pet._id}/edit`}>Edit</Link>
                </li>                    
            </ul>
            

        </div>
    ) : (  
        <div className={styles.wrapper}>
            <p className="text-danger">No such pet was found in our records.</p>
        </div>
    )
}

// export
export default Show;