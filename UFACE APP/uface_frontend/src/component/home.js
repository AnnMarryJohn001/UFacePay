import React from 'react';
import { Link } from "react-router-dom";
function Home (){
    return (
        <body>
    <div id='title'>UFace Pay</div>
    <div id='box'>
        
          
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to='/signin' id='one'>SIGN UP</Link>
        
      
    </div>
    <Link to='/login' id='login'>Already have an account?Proceed!</Link>
    </body>)
}
 
export default Home;