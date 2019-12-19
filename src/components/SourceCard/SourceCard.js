import React from 'react';
import { FaGlobe } from "react-icons/fa";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import IndividualPage from '../../pages/IndividualPage/IndividualPage';
import IconComponent from '../IconComponent/IconComponent';
import './styles.css';



const bgArray = ['#FF004D', '#9D0B28', '#5A082D', '#33030D', '#801336', '#C72C41'];
function randomNoRepeats(array) {
        var copy = array.slice(0);
        return function () {
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
                <Router>
                        <div className="mainDiv" style={{ backgroundColor: bgColor }}>
                                <div className="nameDiv">
                                        <Link to="/individualpage"><h4 className="nameText">{props.sourceCardData.name}</h4></Link>
                                </div>
                                <div className="descDiv">
                                        <p className="descText">{props.sourceCardData.description}</p>
                                </div>
                                <div className="linkDiv">
                                        <div className='category'>
                                                <IconComponent
                                                        category={props.sourceCardData.category}
                                                        icon="category"
                                                />


                                        </div>
                                        <div className='url'>
                                                <a href={props.sourceCardData.url} target="_blank">
                                                        <IconComponent
                                                                url={props.sourceCardData.url}
                                                                icon="url"
                                                        />
                                                </a>

                                        </div>
                                </div>
                        </div>

                        <Route path="/individualpage" component={IndividualPage} />
                </Router>
        );


}


export default SourceCard;
