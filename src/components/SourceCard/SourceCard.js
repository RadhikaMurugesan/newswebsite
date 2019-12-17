import React from 'react'; 
import { FaGlobe } from "react-icons/fa";
import CategoryPopup from '../CategoryPopUp/CategoryPopup';
import './styles.css';



const bgArray = ['#FF004D', '#9D0B28', '#5A082D', '#33030D', '#801336', '#C72C41'];
function randomNoRepeats(array) {
        var copy = array.slice(0);
        return function() {
          if (copy.length < 1) { copy = array.slice(0); }
          var index = Math.floor(Math.random() * copy.length);
          var item = copy[index];
          copy.splice(index, 1);
          return item;
        };
      }
      
      var chooser = randomNoRepeats(bgArray);
function SourceCard(props) {
   
      let bgColor = chooser();
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
                            <CategoryPopup
                            category={props.sourceCardData.category}
                            />
                                   
                                   
                            </div>
                            <div>
                                    <a href={props.sourceCardData.url} target="_blank"><FaGlobe /></a></div>
                    </div>
            </div>
        
    );


}


export default SourceCard;
