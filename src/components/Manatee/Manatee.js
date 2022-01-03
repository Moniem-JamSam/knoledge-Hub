import React, { Component } from 'react'
import { useHistory } from "react-router-dom";




    function Manatee(){
    
   
        const history = useHistory();
    
        const routeChange = () =>{ 
          let path = `/Narwhal`; 
          history.push(path);
        }
  return (
  <div>
      <h1>maaaanatee</h1>
      <button className='buttonHome' type="submit" onClick={routeChange}>Submit</button>
  </div>
  )
}

export default Manatee;