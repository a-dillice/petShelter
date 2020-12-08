/**
 * Reusable Form -- all values required
 * @param {string} header string for the forms primary header 
 * @param {string} bttn text that shows up on the forms submit button 
 * @param {function} submit callback function when the form is submitted 
 * @param {object} field onChange get values from forms input fields 
 * @param {object} values values passed back to the input fields when changes are made - (like form reset)
 * @param {object} success success msg (usually passed from api) 
 * @param {object} errors error msg (usually passed from api) 
 * @param {object} build dynamically build out form inputs using user provided data thru the prop 
 *  
 */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/css/styles.module.css';

// form component
const Form = (props) => {

    // deconstruct props
    const {header, bttn, submit, field, values, success, errors, build} = props;

    // return
    return(
        <form onSubmit={(e)=>{submit(e)}}>
            <h1 className={styles.formHeader}>{header}</h1>
            {Object.entries(build).map(([key, value], i)=>{
                return(
                <div className="form-group" key={i}>
                    <label className={styles.formLabel} htmlFor={`${key}-input`}>
                        {(key.indexOf("skill") >= 0) ? key + " (optional)" : key}                        
                    </label>
                    {(value.toLowerCase() === "textarea") ?
                    <textarea id={`${key}-input`} className="form-control" type={value} name={key} onChange={field} value={values[key]}></textarea>: 
                    <input id={`${key}-input`} className="form-control" type={value} name={key} value={values[key]} onChange={field}/>}
                    <small className="text-danger">{(errors[key]) ? errors[key].message : ""}</small>
                </div>
                )
            })}
            <button className={`${styles.editButton} bttn`} type="submit">{bttn}</button>
            <p className="text-success text-center m-3">{(success.success) ? success.success : ""}</p>
        </form>
    )

}

// export
export default Form;