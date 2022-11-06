import React from 'react'

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

  const doRegister = event => {
    event.preventDefault()
    console.log("Registering...")
    if (props.LoginStatus === true) {
      alert("You are logged in, log out to make an account!")
    }
    else {
      
    }
  }
  const doLogin = event => {
    event.preventDefault()
  }
  const Login = event => {

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
    </div>
  )
}
