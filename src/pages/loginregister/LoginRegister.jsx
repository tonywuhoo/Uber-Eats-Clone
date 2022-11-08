import { useEffect, useState } from "react";
import sha256 from 'js-sha256'
import axios from 'axios';
import "./loginregister.css"
// import { getUserByHash } from "../../services/userinfo";

export default function LoginRegister(props) {
  const [RegisterUser, setRegisterUser] = useState("");
  const [RegisterPassword, setRegisterPassword] = useState("");
  const [RegisterConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [LoginUser, setLoginUser] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
  const [LoginConfirmPassword, setLoginConfirmPassword] = useState("")

  async function doShit() {
    console.log("Clicked")
    // getUserByHash(props.userHash);
    axios.put("https://fubereats-backend-production.up.railway.app/users/" + props.userID, {
      hash: props.userHash,
      cartItemsByID: ["Test", "Test"]
    })
  }
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
    props.setEncrypted(sha256(RegisterUser + RegisterPassword))
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
    props.setEncrypted(sha256(LoginUser + LoginPassword))
  };

  const doRegister = async (event) => {
    await event.preventDefault();
    console.log("Registering...");
    if (props.LoginStatus === true) {
      alert("You are logged in, log out to make an account!");
      ResetParameters();
    } else {
      if (
        RegisterPassword === RegisterConfirmPassword &&
        RegisterUser.length > 0
      ) {
        fetch("https://fubereats-backend-production.up.railway.app/users")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            let userHashes = []
            data.map((element) => {
              userHashes.push(element.hash)
            })
            if (userHashes.includes(props.Encrypted)) {
              alert("This account has already been created")
              ResetParameters();
            } else {
              axios
                .post("https://fubereats-backend-production.up.railway.app/users", { hash: props.Encrypted })
                .then((response) => {
                  console.log(response.data);
                  props.setLoginStatus(true);
                  props.setuserHash(props.Encrypted)
                  ResetParameters();
                  props.setUsername(RegisterUser)
                  alert("Registered and Logged in ...");
                });
            }
          })
      } else {
        alert("Passwords do not match, or username field is empty");
        ResetParameters();
      }
    }
  };

  const doLogin = (event) => {
    event.preventDefault();
    console.log("Logging in....");
    if (props.LoginStatus === true) {
      alert("You are logged in already!");
      ResetParameters();
      return
    }
    if (LoginConfirmPassword !== LoginPassword || LoginUser.length < 1) {
      alert("Passwords do not match or Username is blank!");
    } else {
      fetch("https://fubereats-backend-production.up.railway.app/users")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let userHashes = []
          data.map((element) => {
            userHashes.push(element.hash)
          })
          userHashes.map((element) => {
            if (element === props.Encrypted) {
              props.setuserHash(props.Encrypted)
              props.setUsername(LoginUser)
              props.setLoginStatus(true);
            }
          })
        })
      alert("Logged in!")
      ResetParameters();
    }
  };

  const doLogOut = (event) => {
    if (props.LoginStatus === false) {
      props.setUsername("Not logged in")
      alert("Already logged out");
    }
    if (props.LoginStatus === true) {
      props.setLoginStatus(false);
      props.setEncrypted("");
      props.setuserHash("");
      props.setuserID("")
      props.setUsername("Not logged in")
      alert("Logged out sucessfully");
    }
  };

  return (
    <div className='LoginRegister'>
      <h>
        Welcome : {props.Username}
      </h>
      <form onSubmit={doRegister}>
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
      <form onSubmit={doLogin}>
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
      <button onClick={doShit}>
        Click
      </button>
    </div>
  )
}
