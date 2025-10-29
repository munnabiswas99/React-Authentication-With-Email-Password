import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../../../firebase_init";
import { Link } from "react-router";

const Login = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState(false);
    const emailRef = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setSuccessMsg(false);
        setErrorMsg('');

        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            console.log(result.user);
            if(!result.user.emailVerified){
                alert("Please verify your email!")
            }else{
                setSuccessMsg(true);
            }
            
        })
        .catch((error) => {
            console.log(error);
            setErrorMsg(error.message);
        })
    }

    const handleForgotPass = () => {
        const email = emailRef.current.value;
        setErrorMsg('');

        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Password reset email send to your account!")
        })
        .catch((error) => {
            setErrorMsg(error.message)
        })
    }

  return (
    
        <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
        <h1 className="text-5xl font-bold">Login now!</h1>
          <div className="card-body">
            <form onSubmit={handleSubmit} className="fieldset">
              <label className="label">Email</label>
              <input type="email" name="email" ref={emailRef} className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" name="password" placeholder="Password" />
              <div>
                <a onClick={handleForgotPass} className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
            <p>Do not have an accoun? <Link to='/register' className="text-blue-400 underline">Signup</Link></p>
            <div>
            {
                errorMsg && <p className="text-red-600">{errorMsg}</p>
            }
            {
                successMsg && <p className="text-green-600">Login successful</p>
            }
            </div>
          </div>
        </div>
  );
};

export default Login;
