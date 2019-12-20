import React, {Component} from "react";
import { Grid } from 'semantic-ui-react';
import NewsCard from '../../components/NewsCard';
import API from '../../config/AxiosBaseUrl';
import * as Constants from '../../config/Constants';
export default class TopHeadlines extends Component {
  constructor() {
    super();
    this.state = {
       newsCardData: []
    }
    
}

componentDidMount() {
  const {id} = this.props.match.params;
  console.log('id', id)
  API.get(`top-headlines?sources=${id}&apiKey=${Constants.ApiKey}`)
  .then(res => {
      console.log('response', res.data.articles)

      this.setState({
        newsCardData: res.data.articles
      });
  })

}
  
  render() {
    
    return (
      <div>
        <h2>TopHeadlines</h2>
        <Grid columns={4} divided className="grid">
                                <Grid.Row>
                                    {this.state.newsCardData.map((object) =>
                                        <Grid.Column>
                                            <NewsCard newsCardData={object} />
                                        </Grid.Column>
                                    )}
                                </Grid.Row>
                            </Grid>
        
      </div>
    );
  }  
  }


 