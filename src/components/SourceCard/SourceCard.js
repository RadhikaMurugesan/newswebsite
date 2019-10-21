import React, { Component } from 'react'; 
// import Globe from '../../assets/icons/internet.svg' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './styles.css';
class SourceCard extends Component {
    render() {
        return(
            <div >
                <div className="nameDiv">
                    <bold className="nameText">ABC News</bold>
                </div>
                <div className="descDiv">
                    <p className="descText">We will build a small game during this tutorial.
                    You might be tempted to skip it because you’re not building games — but give it a chance.
                    The techniques you’ll learn in the tutorial are fundamental to building any React app,
                    and mastering it will give you a deep understanding of React.</p>
                </div>
                <div className="linkDiv">
                    <span><FontAwesomeIcon icon={faCoffee} /> General</span>
                    {/* <span><Globe /></span> */}
                </div>
            </div>
        );
    }
}  
export default SourceCard;
