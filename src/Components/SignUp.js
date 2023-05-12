import React, { useRef, useState } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom';
export default function SignUp(props) {

const[newLogin,setNewLogin]=useState(false);
 //Use to refer the class element 
 const element=document.getElementsByClassName('box');
 const modalRef=useRef(element);
 let{handleCloseFunction}=props;


 //Function to hide the signup Page 
 const closeFunction=()=>
 {
    console.log(modalRef.current[0]);
    modalRef.current[0].style.opacity=0;
    props.handleCloseFunction(modalRef.current[0]);
 }
 //Function to handle new Login Click
  
 const handleNewLoginClick=()=>
 {
    setNewLogin(true);
 }


  return (
    <div>
        
        <div className="box my-2">
           <button style={{top: 0,position: "absolute",right: 0,border: "none",backgroundColor : "#f5faff",fontSize: 23}} onClick={closeFunction}>X</button>
                <div className="row">
                    <div className="col-sm-5 col-xs-5 box1">
                        <div className="inline-text">
                            <h1>{newLogin ? "SignUp" :"Login"}</h1>
                                {  (!newLogin) ?
                                    (<p>
                                    Get access to your Orders <br /> 
                                    Wishlist and <br />
                                    Recomadations</p>) : 
                                    (
                                        <p>
                                        Looks like youre new here!, <br /> 
                                        Sign up with your Email <br />
                                        to get started</p> 
                                    )
                                    
                                }


                            
                        </div>
                    </div>
                    <div className="col-sm-6 col-xs-1 box2">

                            <div className="user-id user-data">
                                <input type="email " name="" id="" required=""/>
                                <label>Enter Email/Mobile Number</label>
                            </div>

                            <div className="user-id user-data">
                                <input type="password" name="" id="" required=""/>
                                <label>Enter Password</label>
                            </div>
                            
                            <span><a href="/">Forgot?</a></span>
                            <div className="user-id button">
                            <input type="submit" name="" id="" value="Login" />
                            </div>
                            <div className="user-id">
                            <p>OR</p>
                            </div>
                            <div className="user-id">
                            <p className="footer"><Link to="/" onClick={handleNewLoginClick}>New to News App? Create an account</Link></p>
                            </div>
                    </div>
               </div>
      </div>
     </div>
  )
}


