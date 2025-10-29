import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../firebase_init";

const Login = () => {
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setErrorMsg('');

        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            console.log(result.user);
        })
        .catch((error) => {
            console.log(error);
            setErrorMsg(error.message);
        })
    }

  return (
    
        <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
        <h1 className="text-5xl font-bold">Login now!</h1>
          <div className="card-body">
            <form onSubmit={handleSubmit} className="fieldset">
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" name="password" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
            <div>
            {
                errorMsg && <p className="text-red-600">{errorMsg}</p>
            }
            </div>
          </div>
        </div>
  );
};

export default Login;
