import { useState, useContext, useEffect } from "react";
import { loginData, errors } from "../data/loginData";

import "../App.css";
import { TableContext } from "./TableContext";
function Login() {
  //using dispatch to set the login to "false" to open the webpage after login
  const { dispatch } = useContext(TableContext);

  //get data from localStorage to login
  const [loginName, setUname] = useState("");
  const [loginPass, setPass] = useState("");

  useEffect(() => {
    let controller = new AbortController();
    const uname = localStorage.getItem("loginName");
    if (uname) {
      setUname(uname);
    }
    return () => controller?.abort();
  }, []);

  useEffect(() => {
    let controller = new AbortController();
    const pass = localStorage.getItem("loginPass");
    if (pass) {
      setPass(pass);
    }
    return () => controller?.abort();
  }, []);

  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info

  const handleSubmit = event => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = loginData.find(user => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        dispatch({
          type: "SET_LOGIN",
          isLogin: false,
        });
        localStorage.setItem("loginName", uname.value);
        localStorage.setItem("loginPass", pass.value);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = name =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input
            value={loginName}
            type="text"
            name="uname"
            className="px-2"
            onChange={e => {
              setUname(e.target.value);
            }}
            required
          />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            value={loginPass}
            type="password"
            name="pass"
            className="px-2"
            onChange={e => {
              setPass(e.target.value);
            }}
            required
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <h2 className="pt-4">Welcome to Class 5e</h2>
        <div className="title px-10">Please sign in</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;
