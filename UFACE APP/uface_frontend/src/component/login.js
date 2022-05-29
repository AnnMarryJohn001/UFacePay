import React, {Component} from 'react';
import './style.css';
import WebcamCapture from './webcam.js';

const Login=() => {
  return (
    <body>
      <div id='signupbox'>
        <div id='signuphead'>Pay</div>
        <br/>
        <br/>
        <label>Capture Face:</label>
        <WebcamCapture/>
        </div>
    </body>
      
        
      
      
  );
};

export default Login;
