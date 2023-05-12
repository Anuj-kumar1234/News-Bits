import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
//import SignUp from './SignUp';
import './style.css'
//import { useState } from 'react';

export default function MyModal({open,onClose }) {
  /*let{open,onClose}=props;
  console.log(props.open +" "+ props.openLogin);*/
  

  
  return (
    <div>
      <Modal  open={open} onClose={onClose}>
      <div className="modal-body">
                        <h2>Get Started Absolutely<span> Free!</span></h2>
                        <span className="subtitle">No credit card needed</span>
                        <form className="contact-form form-validate3" noValidate="novalidate">
                            <div className="form-group">
                                <input className="form-control" type="text" name="name" id="name" placeholder="First Name" required="" autoComplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autoComplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="pass" className="form-control" placeholder="Password" required="" autoComplete="off" aria-required="true" />
                            </div>
                            <input className="btn btn-md btn-primary btn-center" id="sign_up" type="button" value="Sign Up" />
                        </form>
                    </div>
      </Modal>
      <Modal open={true} onCLose={false}>
                <div className="modal-body">
                    <h2>Login and Get <span>Started</span></h2>
                    <span className="subtitle">Just fill in the form below</span>
                    <form className="contact-form form-validate4" novalidate="novalidate">
                        <div className="form-group">
                            <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />
                        </div>
                        <div className="form-group">
                            <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
                        </div>
                        <input className="btn btn-md btn-primary btn-center" id="login_btn" type="button" value="Login" />
                    </form>
                </div>
        </Modal>
      
    </div>
  )
}

