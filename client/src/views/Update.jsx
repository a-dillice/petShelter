import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/css/styles.module.css';
import Form from '../components/Form';
import {apiCall} from '../components/helpers/Utilities';

// Update component
const Update = (props) => {

    // setup form reset var
    const formReset = {
        name:"",
        type:"",
        description:"",
        skill1:"",
        skill2:"",
        skill3:""
    }

    // set pet
    const [pet, setPet] = useState(formReset);
    const [petTitle, setPetTitle] = useState("");

    // setup values from form inputs
    const [inputs, setInputs] = useState(formReset)

    // setup errors msgs
    const [errors, setErrors] = useState({});

    // setup success msgs
    const [success, setSuccess] = useState({});

    // use hooks
    useEffect(() => {

        //helper api call
        apiCall({
            url:"//localhost:8000/api/"+ props.id,
            method:"get"
        },
        (res) =>{
            // set pet title
            setPetTitle(res.data.results.name)

            // update author name
            setPet({
                name:res.data.results.name,
                type:res.data.results.type,
                description:res.data.results.description,
                skill1:(res.data.results.skill1) ? res.data.results.skill1 : "",
                skill2:(res.data.results.skill2) ? res.data.results.skill2 : "",
                skill3:(res.data.results.skill3) ? res.data.results.skill3 : ""
            });

            // set input to name
            setInputs({
                name:res.data.results.name,
                type:res.data.results.type,
                description:res.data.results.description,
                skill1:(res.data.results.skill1) ? res.data.results.skill1 : "",
                skill2:(res.data.results.skill2) ? res.data.results.skill2 : "",
                skill3:(res.data.results.skill3) ? res.data.results.skill3 : ""
            })
        },
        (err) => {
            console.log(err);
        });

    },[props.id])


    // user form submission
    const submit = (e) => {

        // prevent default submit
        e.preventDefault();
        
        // reset success msg
        setSuccess("");

        //helper api call
        apiCall({
            url:"//localhost:8000/api/update/" + props.id,
            method:"put",
            data:inputs 
        },
        (res) =>{
   
            // check for errors
            if(res.data.errors){
                
                //setup errors
                setErrors(res.data.errors);
            
            // success msg
            }else{
                
                // display success msg
                setSuccess(res.data);
                
                // reset errors
                setErrors({});

            }

        },
        (err) => {
            console.log(err);
        });
 
    }

    // onChange update from form inputs
    const updateInputs = (e) => {

        // update inputs values
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })

        // update the pet values
        setPet({
            ...inputs,
            [e.target.name]:e.target.value
        })

    }

    // return
    return (
        <div className={styles.wrapper}>
            <Form 
                header={`Edit ${petTitle}'s Profile:`} 
                bttn={`Edit Pet`} 
                submit={submit}
                field={updateInputs}
                success={success}
                errors={errors}
                values={pet}
                build={{
                    "name":"text",
                    "type":"text",
                    "description":"textarea",
                    "skill1":"text",
                    "skill2":"text",
                    "skill3":"text",
                }}/>
        </div>
    )

}

// export
export default Update;