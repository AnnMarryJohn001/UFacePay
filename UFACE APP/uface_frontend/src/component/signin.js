import React,{component} from 'react';
import {useState} from 'react';
import './style.css';
import axios from 'axios';
function Signin(){
  const [input, setInput] = useState({
    fname: '',
    lname: '',
    accno: '',
    phoneno: '',
    balance: '',
    pswd: ''
  })
  function handlechange(event){
    const {name, value} = event.target;
    setInput(prevInput =>{
      return{
        ...prevInput,
        [name]: value
        
      }
    })

  }
  function handleClick(event){
    event.preventDefault();
    const newUser={
      fname:input.fname,
      lname:input.lname,
      accno:input.accno,
      phoneno:input.phoneno,
      balance:input.balance,
      pswd:input.pswd
    }
    axios.post('http://localhost:3001/create',newUser)
    document.getElementById('status').innerHTML="User Registered Successfully"
    
  }
  return(
    <body>
      <div id='signupbox'>
        <div id='signuphead'>SIGN UP</div>
        <br/>
        <br/>
        <form id='form1' method='POST'>
        <label for='fname'>First Name:</label>
        <input type='text' id='fname' name='fname' placeholder='First Name' onChange={handlechange} value={input.fname} autoComplete='off'/><br/>
        <label for='lname'>Last Name:</label>
        <input type='text' id='lname' name='lname' placeholder='Last Name' onChange={handlechange} value={input.lname} autoComplete='off'/><br/>
        <label for='accno'>Account Number:</label>
        <input type='text' id='accno' name='accno' placeholder='Account Number' onChange={handlechange}  value={input.accno} autoComplete='off'/><br/>
        <label for='phoneno'>Phone Number:</label>
        <input type='text' id='phoneno' name='phoneno' placeholder='Phone Number (10 digits)' onChange={handlechange} value={input.phoneno} autoComplete='off'/><br/>
        <label for='balance'>Current Balance:</label>
        <input type='text' id='balance' name='balance' placeholder='Current Balance' onChange={handlechange} value={input.balance} autoComplete='off'/><br/>
        <label for='pswd'>Transaction PIN:</label>
        <input type='text' id='pswd' name='pswd' placeholder='Must be four digits' onChange={handlechange} value={input.pswd}  autoComplete='off'/><br/><br/>
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={handleClick} id='submitbtn'>SIGN UP</button>
        <p id='status'> </p>

        </form>
      </div>
    </body>
  )
}
export default Signin;
