import React from 'react'
import sha256 from 'js-sha256'
import axios from 'axios';

export default function Register(props) {
  // let config = {
  //   headers: {
  //      'Content-Type': 'application/x-www-form-urlencoded',
  //   }
  // }
  const Check = event => {
    axios.post("http://localhost:3003/users", {'hash':'testing'})
      .then(response => {
      console.log(response.data)
      })
  }
  const ResetParameters = async event => {
    document.getElementById("username-register").value = ""
    document.getElementById("password-register").value = ""
    document.getElementById("confirmpassword-register").value = ""
    props.setRegisterConfirmPassword("")
    props.setRegisterPassword("")
    props.setRegisterUser("")
    document.getElementById("username-login").value = ""
    document.getElementById("password-login").value = ""
    document.getElementById("confirmpassword-login").value = ""
    props.setLoginConfirmPassword("")
    props.setLoginPassword("")
    props.setLoginUser("")

  }
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

  const doRegister =  async event => {
    await event.preventDefault()
    console.log("Registering...")
    if (props.LoginStatus === true) {
      alert("You are logged in, log out to make an account!")
    }
    else {
      if (props.RegisterPassword === props.RegisterConfirmPassword && props.RegisterUser.length > 0) {
        await props.setEncrypted(sha256(props.RegisterUser + props.RegisterPassword)).then(response => {
          console.log(props.Encrypted)
        })
        await ResetParameters()
        await props.setLoginStatus(true)
      //   axios.post("http://localhost:3003/users", {'hash': props.Encrypted})
      //   .then(response => {
      //   console.log(props.Encrypted)
      //   console.log(response.data)
      // })
      }
      else {
        alert("Passwords do not match, or username field is empty")
      }
    }
  }
  let Test = doRegister()
  console.log(Test)


  const doLogin = event => {
    event.preventDefault()
    console.log("Logging in....")
    if (props.LoginStatus === true) {
      alert("You are logged in already!")
    }
    if (props.LoginConfirmPassword !== props.LoginPassword || props.LoginUser.length < 1) {
      alert("Passwords do not match or Username is blank!")
    }
    else {


    const LoginHashing = async event => {
      props.setEncrypted(await sha256(props.RegisterUser + props.RegisterPassword))
    }
    LoginHashing()
    // Once prelimintary parameters met, we take Encrypted hash, fetch userdata base, and see if theres a match. 
    // If there is a match, setuserHash(hash)
    // If there is no match, alert("No such account exist, go create an account")
    // Then set login status === true
    alert("Login feature currently down...")
    ResetParameters()
  }
  }
  const Login = event => {

  }
  const doLogOut = event => {
    props.setLoginStatus(false)
    props.setEncrypted("")
    alert("Logged out sucessfully")
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
