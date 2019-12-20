import React from 'react';
import './style.css';

function NewsCard(props) {
    console.log('property', props);
    return (
    <div className="card">
                    <img src={props.newsCardData.source.urlToImage} />

        <div className="container">
                    <h4><b>{props.newsCardData.source.name}</b></h4>
                    <p>{props.newsCardData.source.description}</p>
                </div>
    </div>
    );
}
            
export default NewsCard;