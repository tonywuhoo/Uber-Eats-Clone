import React from 'react'
import sha256 from 'js-sha256'

export default function Register(props) {
  const HandleRegister = event => {
    if (event.target.id === "username-register") {
      props.setRegisterUser(event.target.value)
    }
    if (event.target.id === "password-register") {
      props.setRegisterPassword(event.target.value)
    }
    if (event.target.id === "confirmpassword-register") {
      props.setRegisterConfirmPassword(event.target.value)
    }
  }
  const HandleLogin = event => {
    if (event.target.id === "username-login") {
      props.setLoginUser(event.target.value)
    }
    if (event.target.id === "password-login") {
      props.setLoginPassword(event.target.value)
    }
    if (event.target.id === "confirmpassword-login") {
      props.setLoginConfirmPassword(event.target.value)
    }

  }

  const doRegister =  event => {
    event.preventDefault()
    console.log("Registering...")
    if (props.LoginStatus === true) {
      alert("You are logged in, log out to make an account!")
    }
    else {
      if (props.RegisterPassword === props.RegisterConfirmPassword && props.RegisterUser.length > 0) {
        //Hashes Username,Password combination, Fetches User database and compares if exists
        //If exist, alert error
        //If does not exist, creates a POST request to User database with an empty Product array
        //And inserts the Hash generated with user+pw combination
        //Then sets LoginStatus === true
        //Then sets userHash = sha256(props.RegisterUser + props.RegisterPassword)
        //This will be implemented when userdatabase goes live
        const Hashing = async event => {
          props.setEncrypted(await sha256(props.RegisterUser + props.RegisterPassword))
        }
        Hashing()
        props.setLoginStatus(true)
        alert("Registered and Logged in!")
        document.getElementById("username-register").value = ""
        document.getElementById("password-register").value = ""
        document.getElementById("confirmpassword-register").value = ""
        props.setRegisterConfirmPassword("")
        props.setRegisterPassword("")
        props.setRegisterUser("")
      }
      else {
        alert("Passwords do not match, or username field is empty")
      }
    }
  }
  const doLogin = event => {
    event.preventDefault()
    console.log("Logging in....")
    if (props.LoginStatus === true) {
      alert("You are logged in already!")
    }
  }
  const Login = event => {

  }
  const doLogOut = event => {
    props.setLoginStatus(false)
  }
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
        <input type="text" id="password-login" onChange={HandleLogin}></input>
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
    </div>
  )
}
