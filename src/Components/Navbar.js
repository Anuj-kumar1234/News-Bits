import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import MyModal from './MyModal';

 const Navbar=(props)=>{
    const[openModal,setOpenModal]=useState({});

    const changeOpenModal =(login,signUp)=>
    {
          setOpenModal(
            {
                login:false,
                signUp:false
            } 
          )
          console.log(openModal.login);
    }
    const handleSignUp=()=>
    {
         console.log("SignUp");
         
          setOpenModal(false,true);
          console.log(" Navbar>>>>>>>"+ openModal.signUp +" "+ openModal.login);
          //props.handleCallSignUp(openModal);
    }
    const handleLogin=()=>
    {
        setOpenModal(true,false)
        props.handleCallLogin(openModal);
    }

     
    return (
       <div>
              <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">News Bits</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/Sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/Entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/Business">Business </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/Health">Health</Link>
                        </li>
                    </ul>
                    </div>
                    
                   </div>
                   <form className="d-flex">
                            <button className="btn btn-primary-outline" id="signup" onClick={handleSignUp}>SignUp</button>
                            <button className="btn btn-primary-outline" id="login" onClick={handleLogin} >Login</button>
                   </form>
                </nav>
        </div>
    )
  
}
export default Navbar
