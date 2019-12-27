import React, { Component } from "react";
import { Grid, Loader } from "semantic-ui-react";
import NewsCard from "../../components/NewsCard";
import API from "../../config/AxiosBaseUrl";
import * as Constants from "../../config/Constants";
import { Header } from "../../components/Header";
import Pagination from "../../components/Pagination";
export default class TopHeadlines extends Component {
  constructor() {
    super();
    this.state = {
      newsCardData: [],
      loading: true,
      pageOfItems: []
    };
    this.onChangePage = this.onChangePage.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    API.get(`top-headlines?sources=${id}&apiKey=${Constants.ApiKey}`).then(
      res => {
        this.setState({
          newsCardData: res.data.articles,
          loading: false
        });
      }
    );
  }

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return (
      <div>
        <Header page="Top Headlines" />
        {this.state.loading ? (
          <Loader active={this.state.loading} />
        ) : (
          <div>
            <Grid columns={"four"} padded>
              {this.state.pageOfItems.map(object => (
                <Grid.Column>
                  <NewsCard newsCardData={object} />
                </Grid.Column>
              ))}
            </Grid>
            <Pagination
              initialPage={1}
              pageSize={4}
              items={this.state.newsCardData}
              onChangePage={this.onChangePage}
            />{" "}
          </div>
        )}
      </div>
    );
  }
}
