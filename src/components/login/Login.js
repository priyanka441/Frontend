import "./login.css";
import React, { useState,useEffect } from 'react'
import { Link } from "react-router-dom";
import { Back } from "../common/back/Back";

export default function Login() {
    
  
  const initialvalues={
    'username':'',
    'email':'',
    'password':'',
    'phone_number':'',
    'discount':''
};
const [formValues,setformValues]=useState(initialvalues);
const [errors,seterrors]=useState({});
const [isSubmit,setisSubmit]=useState(false);
//const [isValid, setIsValid] = useSState(false);

const handleChange=(e)=>{

    const{name,value}=e.target;
    setformValues({...formValues,[name]:value});
    console.log(formValues);

}
const handleSubmit=(e)=>
{
    e.preventDefault();
    seterrors(validate(formValues));
    setisSubmit(true);

}
useEffect(()=>{
    
    console.log(errors);
    if(Object.keys(errors).length===0 && isSubmit){
        console.log(formValues);
    }
},[errors]
);
const validate=(values)=>{
    const errors={}
    const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regex1=/^[+]?[0-9]*(?:[0-9]*)$/;
    if(!values.username){
        errors.username="Username is required"
    }
    if(!values.email){
        errors.email="Email is required"
    }else if(!regex.test(values.email)){
        errors.email="not proper email";
    }
    if(!values.password){
     errors.password="password required"
    }
    else if((values.password).length<4){
        errors.password=" too short password "
    }
    else if((values.password).length>10){
        errors.password="pass cant exceed 10 characters "
    }

    if(!values.phone_number){
        errors.phone_number="Phone_number is required"
    }
    else if(!regex1.test(values.phone_number)){
        errors.phone_number=" enter digits only"
    }
    else if((values.phone_number).length>10){
        errors.phone_number="limit exceeded"
    }
    else if((values.phone_number).length<10){
        errors.phone_number="number should be 10 digits"
    }
    if (values.discount) {
        if (values.discount !== "RESHAB") {
          errors.discount = "Wrong discount code";
        }
      }
     return errors;

};
  return (
    <>
      <Back title="Login Form"/>
    <div className="login">
      
        <form onSubmit={handleSubmit}>
            <h1>ENROLL NOW!</h1>
            <div className='ui divider'></div>
            <div className='ui form'>
                <div className='field'>
                <label>Username:</label>
            <input name='username' id='username' type='text' placeholder='username' value={formValues.username} onChange={handleChange} ></input>
                </div>
                <p>{errors.username}</p>
                <div className='field'>
                <label>Email:</label>
            <input name='email' id='email' type='email' placeholder='email' value={formValues.email}  onChange={handleChange}></input>
                </div>
                <p>{errors.email}</p>
                <div className='field'>
                <label>Password:</label>
            <input name='password' id='password' type='password' placeholder='password' value={formValues.password} onChange={handleChange}/>
            </div>
            <p>{errors.password}</p>
            <div className='field'>
                <label>Phone number</label>
            <input name='phone_number' id='phone_number' type='tel' placeholder='phone_number' value={formValues.phone_number} onChange={handleChange}/>
            </div>
            <p>{errors.phone_number}</p>
            <div className='field'>
                <label>Discount:</label>
            <input name='discount' id='discount' type='text' placeholder='discount' value={formValues.discount} onChange={handleChange} ></input>
                </div>
                <p>{errors.discount}</p>
            <button className="button1"><Link to='/home'>Submit</Link></button>
            </div>
        </form>
        
    </div>
    </>
  )}