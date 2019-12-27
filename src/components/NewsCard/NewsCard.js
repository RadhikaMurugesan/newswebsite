import React from "react";
import moment from "moment";
import { Card, Icon, Image } from "semantic-ui-react";
import LinesEllipsis from "react-lines-ellipsis";
import EllipsisText from "react-ellipsis-text";
import "./style.css";

const { limit } = 250;

function NewsCard(props) {
  console.log("property", props);
  return (
    <Card className="card">
      <Image
        className="card-image-resized"
        src={props.newsCardData.urlToImage}
        fluid
      />
      <Card.Content>
        <Card.Header>
          <LinesEllipsis
            text={props.newsCardData.title}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="letters"
            style={{ whiteSpace: "pre-wrap" }}
          />
        </Card.Header>
        <Card.Description>
          <EllipsisText text={props.newsCardData.description} length={"250"} />
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <p>
            <b>{moment(props.newsCardData.publishedAt).format("MMM Do YY")}</b>
          </p>
        </a>
      </Card.Content>
    </Card>
  );
}

export default NewsCard;
