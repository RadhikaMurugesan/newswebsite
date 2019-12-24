import React from 'react';
import moment from 'moment';
import { Card, Icon, Image } from 'semantic-ui-react';
import LinesEllipsis from 'react-lines-ellipsis'
import './style.css';

const {limit} = 250;

function NewsCard(props) {
    console.log('property', props);
    return (
    

<Card>
<Image src={props.newsCardData.urlToImage} wrapped ui={false} />
<Card.Content>
 <Card.Header>
      <LinesEllipsis
  text={props.newsCardData.title}
  maxLine='2'
  ellipsis='...'
  trimRight
  basedOn='letters'
  style={{ whiteSpace: 'pre-wrap' }}
/>
</Card.Header>
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