import React, { Component, useState, useEffect } from 'react';  
import './styles.css'; 
import {CountryObject} from '../../config/Constants';

function Header (props) {
   
  const [country, setCountry] = useState(''); 
 

      return (
            
            <div class="topnav"> 
                <h5>MyNews</h5> 
                <a href="#home">Home</a>
                <select className="selectCountry" value={country} onChange={(event) => setCountry(event.target.value)} >
                {CountryObject.map((country) => <option>{country.name}</option> )} 
                </select>
            </div>
         
      )
    }

    export default Header;
