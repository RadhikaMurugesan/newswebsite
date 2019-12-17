import React from 'react';
import { FaGlobe, FaBusinessTime, FaNewspaper, FaAirFreshener, FaMedapps, FaTablet, FaBasketballBall, FaTrello } from "react-icons/fa";
import './style.css';

const CategoryPopup = (props) => (
 
  <div className="customTooltip">
    
    {
    props.category == 'business' ? <FaBusinessTime />
    :
    props.category == 'general' ? <FaNewspaper />
            :
            props.category == 'entertainment' ? <FaAirFreshener />
                    :
                    props.category == 'health' ? <FaMedapps />
                            :
                            props.category == 'science' ? <FaTablet />
                                    :
                                    props.category == 'sports' ? <FaBasketballBall />
                                            :
                                            props.category == 'technology' ? <FaTrello />
                                                    :
                                                    null}
  <span className="tooltiptext">{props.category[0].toUpperCase()+props.category.slice(1)}</span>
</div>
)

export default CategoryPopup