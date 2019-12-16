import React, { useState } from 'react';  
import './styles.css'; 
import {CountryObject} from '../../config/Constants';

function Header (props) {
   
  const [country, setCountry] = useState('IN'); 
 
      return (
            
        <div className="topnav"> 
        <span>MyNews</span> 
        <a href="#home">Home</a>
        <select 
        className="selectCountry" 
        value={country} 
        onChange={e => {
          setCountry(e.target.value);
          props.changeCountry(e.target.value)
        }}  
             >
        {CountryObject.map((country) => <option value={country.code}>{country.name}</option> )}
        </select>
    </div>
         
      )
    }

    export default Header;
