import {React, useState} from 'react'
import sha256 from 'js-sha256'
import axios from 'axios';

export default function LoginRegister() {
  const [address, setAddress] = useState("");
  const [LoginStatus, setLoginStatus] = useState(false);
  const [RegisterUser, setRegisterUser] = useState("");
  const [RegisterPassword, setRegisterPassword] = useState("");
  const [RegisterConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [LoginUser, setLoginUser] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
  const [LoginConfirmPassword, setLoginConfirmPassword] = useState("");
  const [Encrypted, setEncrypted] = useState("");
  const [userHash, setuserHash] = useState("");

let config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  const Check = (event) => {
    console.log(Encrypted);
  };
  const ResetParameters = async () => {
    document.getElementById("username-register").value = "";
    document.getElementById("password-register").value = "";
    document.getElementById("confirmpassword-register").value = "";
    setRegisterConfirmPassword("");
    setRegisterPassword("");
    setRegisterUser("");
    document.getElementById("username-login").value = "";
    document.getElementById("password-login").value = "";
    document.getElementById("confirmpassword-login").value = "";
    setLoginConfirmPassword("");
    setLoginPassword("");
    setLoginUser("");
  };
  const HandleRegister = (event) => {
    if (event.target.id === "username-register") {
      setRegisterUser(event.target.value);
    }
    if (event.target.id === "password-register") {
      setRegisterPassword(event.target.value);
    }
    if (event.target.id === "confirmpassword-register") {
      setRegisterConfirmPassword(event.target.value);
    }
  };
  const HandleLogin = (event) => {
    if (event.target.id === "username-login") {
      setLoginUser(event.target.value);
    }
    if (event.target.id === "password-login") {
      setLoginPassword(event.target.value);
    }
    if (event.target.id === "confirmpassword-login") {
      setLoginConfirmPassword(event.target.value);
    }
  };

  const doRegister = async (event) => {
    await event.preventDefault();
    console.log("Registering...");
    if (LoginStatus === true) {
      alert("You are logged in, log out to make an account!");
    } else {
      if (
        RegisterPassword === RegisterConfirmPassword &&
        RegisterUser.length > 0
      ) {
        axios
          .get("http://localhost:3003/users")
          .then((response) => {
            console.log(response.data);
            setEncrypted(sha256(RegisterUser + RegisterPassword));
            return response.data;
          })
          .then((data) => {
            axios
              .post("http://localhost:3003/users", { hash: "Testing" })
              .then((response) => {
                console.log(response.data);
              });
            setLoginStatus(true);
            ResetParameters();
            alert("Registered and Logged in ...");
          });
      } else {
        alert("Passwords do not match, or username field is empty");
      }
    }
  };

  const doLogin = (event) => {
    event.preventDefault();
    console.log("Logging in....");
    if (LoginStatus === true) {
      alert("You are logged in already!");
    }
    if (LoginConfirmPassword !== LoginPassword || LoginUser.length < 1) {
      alert("Passwords do not match or Username is blank!");
    } else {
      const LoginHashing = async (event) => {
        setEncrypted(await sha256(RegisterUser + RegisterPassword));
      };
      LoginHashing();
      // Once prelimintary parameters met, we take Encrypted hash, fetch userdata base, and see if theres a match.
      // If there is a match, setuserHash(hash)
      // If there is no match, alert("No such account exist, go create an account")
      // Then set login status === true
      alert("Login feature currently down...");
      ResetParameters();
    }
  };
  const Login = (event) => {};
  const doLogOut = (event) => {
    if (LoginStatus === false) {
      alert("Already logged out");
    }
    if (LoginStatus === true) {
      setLoginStatus(false);
      setEncrypted("");
      alert("Logged out sucessfully");
    }
  };

  return (
    <div className='LoginRegister'>
      <form onSubmit={ doRegister }>
          Register Account :
        <br></br>
        <label htmlFor="doRegister">Username: </label>
        <input type="text" id="username-register" onChange={HandleRegister}></input>
        <br></br>
        <label htmlFor="doRegister">Password: </label>
        <input type="password" id="password-register" onChange={HandleRegister}></input>
        <br></br>
        <label htmlFor="doRegister">Confirm: </label>
        <input type="password" id="confirmpassword-register" onChange={HandleRegister}></input>
        <br></br>
        <input type="submit" />
      </form>
      <br></br>
      <form onSubmit={ doLogin }>
        Login To Account :
        <br></br>
        <label htmlFor="doLogin">Username: </label>
        <input type="text" id="username-login" onChange={HandleLogin}></input>
        <br></br>
        <label htmlFor="doLogin">Password: </label>
        <input type="password" id="password-login" onChange={HandleLogin}></input>
        <br></br>
        <label htmlFor="doLogin">Confirm: </label>
        <input type="password" id="confirmpassword-login" onChange={HandleLogin}></input>
        <br></br>
        <input type="submit" />
      </form>
      <br></br>
      <button onClick={doLogOut}>
        Log Out
      </button>
      <button onClick={Check}>
        Check
      </button>
    </div>
  )
}
