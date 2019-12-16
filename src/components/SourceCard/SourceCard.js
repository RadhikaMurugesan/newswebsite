import React from 'react'; 
import { FaGlobe, FaBusinessTime, FaNewspaper, FaAirFreshener, FaMedapps, FaTablet, FaBasketballBall, FaTrello } from "react-icons/fa";
import { Card, Icon } from 'semantic-ui-react'
import './styles.css';

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  return bgColor;
   
    }

function SourceCard(props) {
   
      let bgColor = random_bg_color();
    console.log('bgcolor', bgColor);
    
        

    return (
            <div className="mainDiv" style={{backgroundColor:bgColor}}>
                    <div className="nameDiv">
                            <h4 className="nameText">{props.sourceCardData.name}</h4>
                    </div>
                    <div className="descDiv">
                            <p className="descText">{props.sourceCardData.description}</p>
                    </div>
                    <div className="linkDiv">
                            <div>
                                    <span className="catStyle">{props.sourceCardData.category[0].toUpperCase()+props.sourceCardData.category.slice(1)}</span>
                                    <span>
                                            {
                                            props.sourceCardData.category == 'business' ? <FaBusinessTime />
                                                    :
                                                    props.sourceCardData.category == 'general' ? <FaNewspaper />
                                                            :
                                                            props.sourceCardData.category == 'entertainment' ? <FaAirFreshener />
                                                                    :
                                                                    props.sourceCardData.category == 'health' ? <FaMedapps />
                                                                            :
                                                                            props.sourceCardData.category == 'science' ? <FaTablet />
                                                                                    :
                                                                                    props.sourceCardData.category == 'sports' ? <FaBasketballBall />
                                                                                            :
                                                                                            props.sourceCardData.category == 'technology' ? <FaTrello />
                                                                                                    :
                                                                                                    null
                                    }
                                    </span>
                            </div>
                            <div><a href={props.sourceCardData.url} target="_blank"><FaGlobe /></a></div>
                    </div>
            </div>
        
    );


}


export default SourceCard;
