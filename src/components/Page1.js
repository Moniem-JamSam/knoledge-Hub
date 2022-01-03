import React, { Component } from 'react'
import { useHistory } from "react-router-dom";
import '../CssFolder/HomePage.css'

function Page1(){
    
   
    const history = useHistory();

    const routeChange = () =>{ 
      let path = `/Manatee`; 
      history.push(path);
    }
        return (
            <div className='BackGround'>
                <h1 className='firstHead'>Hi to my website Update2 </h1>
                <div className='buttonContainer'>
                <button className='buttonHome' type="submit" onClick={routeChange}>Submit</button>

                </div>
               
            </div>
       );
    }
    

    export default Page1;
