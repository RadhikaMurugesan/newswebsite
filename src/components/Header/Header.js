import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import { CountryObject } from "../../config/Constants";

function Header(props) {
  const [country, setCountry] = useState("IN");

  return (
    <div className="topnav">
      <span>MyNews</span>
      <Link to={"/home"} className={props.page == "Source" ? "active" : ""}>
        Home
      </Link>
      {props.page == "Source" ? (
        <select
          className="selectCountry"
          value={country}
          onChange={e => {
            setCountry(e.target.value);
            props.changeCountry(e.target.value);
          }}
        >
          {CountryObject.map(country => (
            <option value={country.code}>{country.name}</option>
          ))}
        </select>
      ) : (
        <a href="#" className="active">
          {props.page}
        </a>
      )}
    </div>
  );
}

export default Header;
