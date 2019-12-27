import React, { Component } from "react";
import { Grid, Loader } from "semantic-ui-react";
import { Header } from "../../components/Header";
import { SourceCard } from "../../components/SourceCard";
import * as Constants from "../../config/Constants";
import API from "../../config/AxiosBaseUrl";
import "./styles.css";
import Pagination from "../../components/Pagination";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      sourceCardData: [],
      pageOfItems: []
    };
    this.onChangePage = this.onChangePage.bind(this);
  }

  componentDidMount() {
    this.getSourceCardData(Constants.CountryCode);
  }

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  changeCountry = countryCode => {
    this.getSourceCardData(countryCode);
  };

  getSourceCardData = countryCode => {
    API.get(`sources?country=${countryCode}&apiKey=${Constants.ApiKey}`).then(
      res => {
        this.setState({
          sourceCardData: res.data.sources,
          loading: false
        });
      }
    );
  };

  render() {
    return (
      <div>
        <Header changeCountry={this.changeCountry} page="Source" />
        {this.state.loading ? (
          <Loader active={this.state.loading} />
        ) : this.state.sourceCardData.length ? (
          <div>
            <Grid columns={3} padded>
              {this.state.pageOfItems.map(sourceObject => (
                <Grid.Column>
                  <SourceCard sourceCardData={sourceObject} />
                </Grid.Column>
              ))}
            </Grid>
            <Pagination
              initialPage={1}
              pageSize={6}
              items={this.state.sourceCardData}
              onChangePage={this.onChangePage}
            />{" "}
          </div>
        ) : (
          <div className="errorMsgBlock">
            <h1 className="errorMsg">Source Not Available</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
