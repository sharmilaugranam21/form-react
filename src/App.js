import React, { Component, useState } from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  const[firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');
  const[showData, setShowData] = useState(false);
  console.log(firstName,lastName,' ',"Thanks for registring");
    return(
      <div className="App">
        <div className="wrapper">
          <div className="form_container">
            <div className="heading">
              <h2>Registion Form</h2>
            </div>
          <div className="form_wrap fullname">
            <div className="form_item">
              <label>First Name</label>
              <input type="text" onChange={(event) => setFirstName(event.target.value)}/>
              <div className="error" id="fname"></div>  
            </div>
            <div className="form_item">
            <label>Last Name</label>
              <input type="text" onChange={(event) => setLastName(event.target.value)}/>
              <div className="error" id="lname"></div>  
            </div>
          </div>
        <div className="form_wrap">
      <div className="form_item">
      <label>Email Address</label>
      <input type="text"/>
      <div className="error" id="email"></div>  
    </div>
  </div>
  <div className="form_wrap">
    <div className="form_item">
      <label>Phone</label>
      <input type="text"/>
      <div className="error" id="phone"></div>  
    </div>
  </div>
  <div className="form_wrap select_box">
    <div className="form_item">
      <label>City</label>
      <select name="country">
        <option>London</option>
        <option>Paris</option>
        <option>Moscow</option>
        <option>Tokyo</option>
      </select>
      <div className="error" id="city"></div>  
    </div>
    <div className="form_item">
      <label>Country</label>
      <select name="country">
        <option>India</option>
        <option>Canada</option>
        <option>Germany</option>
        <option>Australia</option>
      </select>
      <div className="error" id="country"></div>  
    </div>
  </div>

  <div className="btn">
    <input type="submit" value="Get Started"onClick={() => setShowData(true)}/>
    {
      showData && <div>{firstName} {lastName} Thanks for registring</div>
    }
  </div>

</div>
</div>
       
    </div>
    );
  }



export default App;
