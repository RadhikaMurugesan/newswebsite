import React, {Component} from "react";
import { Grid, Loader } from 'semantic-ui-react';
import NewsCard from '../../components/NewsCard';
import API from '../../config/AxiosBaseUrl';
import * as Constants from '../../config/Constants';
import { Header } from '../../components/Header';
export default class TopHeadlines extends Component {
  constructor() {
    super();
    this.state = {
       newsCardData: [],
       loading: true
    }
    
}

componentDidMount() {
  const {id} = this.props.match.params;
  console.log('id', id)
  API.get(`top-headlines?sources=${id}&apiKey=${Constants.ApiKey}`)
  .then(res => {
      console.log('response', res.data.articles)

      this.setState({
        newsCardData: res.data.articles,
        loading: false
      });
  })

}
  
  render() {
    
    return (
      <div>
        <Header page="Top Headlines"/>
        {
          (this.state.loading) ?
          <Loader active = {this.state.loading} />
       :
        
        <Grid columns={'four'}>
                                    {this.state.newsCardData.map((object) =>
                                        <Grid.Column>
                                            <NewsCard newsCardData={object} />
                                        </Grid.Column>
                                    )}
                            </Grid>
  }
      </div>
      
    );
  }  
  }


 