import React from 'react';
import moment from 'moment';
import { Card, Icon, Image } from 'semantic-ui-react';
import './style.css';



function NewsCard(props) {
    console.log('property', props);
    return (
    // <div className="card">
    //                 <img className="card-img-top" src={props.newsCardData.urlToImage} />

    //     <div className="container">
    //                 <h4><b>{props.newsCardData.source.name}</b></h4>
    //                 <h5><b>{props.newsCardData.title}</b></h5>
    //                 <p>{props.newsCardData.description}</p>
    //                 <p><b>{moment(props.newsCardData.publishedAt).format("MMM Do YY")}</b></p>
    //             </div>
    // </div>

<Card>
<Image src={props.newsCardData.urlToImage} wrapped ui={false} />
<Card.Content>
  <Card.Header>{props.newsCardData.source.name}</Card.Header>
  <Card.Meta>{props.newsCardData.title}</Card.Meta>
  <Card.Description>
  {props.newsCardData.description}
  </Card.Description>
</Card.Content>
<Card.Content extra>
  <a>
  <p><b>{moment(props.newsCardData.publishedAt).format("MMM Do YY")}</b></p>   
  </a>
</Card.Content>
</Card>
    
    );
}
            
export default NewsCard;