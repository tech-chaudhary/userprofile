import React, { useRef } from 'react'
import "./login.css"
import Home from './Home';

function Login() {


     const email = useRef();
     const password = useRef();

     const getEmail = localStorage.getItem("emailData");
     const getPass = localStorage.getItem('passwordData');


     const submitHandler = ()=>{
        if(email.current.value =='abc@google.com' && password.current.value == '12345'){
        localStorage.setItem("emailData", 'abc@google.com');
        localStorage.setItem("passwordData", '12345');
    }
     }

  return (
    <div className='login'>
       {
        getEmail && getPass ?
        <Home/> :
         
       
   <form onSubmit={submitHandler}>
     <div>
        <input
        type='email'
        placeholder='enter your email'
        ref={email}
        />
     </div>
     <div>
        <input
        type='password'
        placeholder='enter your password'
        ref={password}
        />
     </div>
    <button>Login</button>
    </form>

}


    </div>
  )
}

export default Login
