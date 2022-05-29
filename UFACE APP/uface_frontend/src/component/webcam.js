import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';

function WebcamCapture(){
  const [User, setUser] = useState([{
    fname: '',
    lname: '',
    accno: '',
    phoneno: '',
    balance: '',
    pswd:''
  }])
  const [input, setInput] = useState({
    from: '',
    to: '',
    amount: '',
    pin: ''
    
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
    
      fetch("/check").then(res =>{
        if(res.ok) {
          return res.json()
        }
      }).then(jsonRes=>setUser(jsonRes));

      document.getElementById("status").innerHTML="Payment is being processed"
}

function checkStatus(event){
  var count=0
  User.map(us =>{
    var fname=us.fname
    var lname=us.lname
    var accno=us.accno
    var from1=us.phoneno
    var balance=us.balance
    var pswd=us.pswd
    
    if((fname==name) && (from1==input.from) && (pswd==input.pin))
    {document.getElementById("status").innerHTML="Transaction Successful"
      count=1}
  
  })
  if(count==0)
  {
    document.getElementById("status").innerHTML="Transaction Failed"
  }

}
  const webcamRef = React.useRef(null);
  const videoConstraints = {
    width : 200,
    height : 200,
    facingMode: 'user'
  }
  const[name, setName] = useState('')
  const capture = React.useCallback(
  () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(`imageSrc = ${imageSrc}`)
                //for deployment, you should put your backend url / api
    axios.post('http://127.0.0.1:5000/api', {data : imageSrc})
    	  .then(res => {
      	  console.log(`response = ${res.data}`)
      	  setName(res.data)
    })
    	  .catch(error => {
      	  console.log(`error = ${error}`)
    })
  }, 
   [webcamRef]
  )
  
  return (
  <div>
    <Webcam
     audio = {false}
	 height = {300}
	 ref = {webcamRef}
	 screenshotFormat = "image/jpeg"
	 width = {350}
	 videoConstraints = {videoConstraints}
	/>
    <button onClick={capture} id='verifybtn'>Verify Face</button>
    <br/>
    <br />
    <br />
    <label for='name'>Name:</label>
    <input type='text' id='name' placeholder='Enter name' value ={name} /><br/>
    <label for='from'>From:</label>
    <input type='text' id='from' name='from' placeholder='Enter Phone Number'  onChange={handlechange} value={input.from}/>
        <label for='to'>To:</label>
        <input type='text' id='to' name='to' placeholder='Enter Phone Number' onChange={handlechange} value={input.to}/><br/>
        <label for='amount'>Amount:</label>
        <input type='text' id='amount' name='amount' placeholder='Enter amount' onChange={handlechange} value={input.amount} /><br/>
        <label for='pin'>PIN:</label>
        <input type='text' id='pin' name='pin' placeholder='Must be four digits' onChange={handlechange} value={input.pin}/><br/><br />
        
        <button onClick={handleClick} id='payment'>Proceed Payment</button><br/><br />
        <button onClick={checkStatus} id='chkstatus'>Check Status</button>
        <br />
        <p id='status'> 
        </p>
      
  </div>

	)
  
}

export default WebcamCapture;