import React, { Component } from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
 
class NewsCard extends Component {
    render() {
        return(
            <div >
                <div style = {{backgroundColor: "#6e2142"}}>
                    <bold>ABC News</bold>
                </div>
                <div style = {{backgroundColor: "#943855"}}>
                    <p style={{ marginBottom: 0 }}>We will build a small game during this tutorial.
                    You might be tempted to skip it because you’re not building games — but give it a chance.
                    The techniques you’ll learn in the tutorial are fundamental to building any React app,
                    and mastering it will give you a deep understanding of React.</p>
                </div>
                <div style = {{ backgroundColor: "#e16363", display: "flex", justifyContent: "space-between" }}>
                    <span><FontAwesomeIcon icon={faCoffee} /> General</span>
                    <span><a href="#"><FontAwesomeIcon icon={faCoffee} /> Link</a></span>
                </div>
            </div>
        );
    }
}  
export default NewsCard;
