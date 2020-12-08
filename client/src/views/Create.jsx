import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/css/styles.module.css';
import Form from '../components/Form';
import VideoBanner from '../components/VideoBanner';
import {navigate} from '@reach/router';
import {apiCall} from '../components/helpers/Utilities';

// Create component - view
const Create = (props) => {

    // setup form reset var
    const formReset = {
        name:"",
        type:"",
        description:"",
        skill1:"",
        skill2:"",
        skill3:""
    }

    // setup values from form inputs
    const [inputs, setInputs] = useState(formReset)

    // setup errors msgs
    const [errors, setErrors] = useState({});

    // setup success msgs
    const [success, setSuccess] = useState({});

    // submit
    const submit = (e) => {

        // prevent default submit
        e.preventDefault();
        
        // reset success msg
        setSuccess({});
        
        //api helper
        apiCall({
            url:"//localhost:8000/api/create",
            method:"post",
            data:inputs
        },
        (res) =>{

            // check for errors
            if(res.data.errors){
                
                //setup errors
                setErrors(res.data.errors);
            
            // success msg
            }else{

                // navigate back
                navigate("/");
            
            }

        },
        (err) => {
            console.log(err);
        });
 
    }

    // input
    const updateInput = (e) => {

        // update inputs
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })

    }

    // return
    return (
        <>
            <VideoBanner
                header={"Add an Adoptee"}
                subheader={"Ready to help?"}
                src={"/videos/puppys.mp4"}
                buttons={[
                    {
                        copy:"Who we are",
                        style:'tubeBttn',
                        url:"/about",
                        title:"Learn more",
                        icon:"fas fa-hands-helping"
                    }
                ]}
            />
            <div className={styles.wrapper}>
                <Form 
                    header={`Add Pet Information Below:`} 
                    bttn={`Add Pet`} 
                    submit={submit}
                    field={updateInput}
                    success={success}
                    errors={errors}
                    values={inputs}
                    build={{
                        "name":"text",
                        "type":"text",
                        "description":"textarea",
                        "skill1":"text",
                        "skill2":"text",
                        "skill3":"text",
                    }}/>
            </div>
        </>
    )

}

// export
export default Create;