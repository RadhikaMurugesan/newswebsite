import React, { Component } from "react";
import { Grid, Loader } from "semantic-ui-react";
import { Header } from "../../components/Header";
import { SourceCard } from "../../components/SourceCard";
import * as Constants from "../../config/Constants";
import API from "../../config/AxiosBaseUrl";
import "./styles.css";
import Pagination from "../../components/Pagination";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getSource, getSourcePending, getSourceForPagination} from '../../reducers/reducers';
import {fetchSource, fetchSourcePagination} from '../../actions/index';

class Home extends Component {
  constructor(props) {
    super(props);   
    this.onChangePage = this.onChangePage.bind(this);
  }

  componentDidMount() {
    const {fetchSource} = this.props;
    fetchSource(Constants.CountryCode);
  }

  onChangePage(pageOfItems) {
    const {fetchSourcePagination} = this.props;
    fetchSourcePagination(pageOfItems);
  }

  changeCountry = countryCode => {
    const {fetchSource} = this.props;
    fetchSource(countryCode);
  };



  render() {
    const {sources, loading, pageOfItems} = this.props;
    console.log('this.props', this.props);
    return (
      <div>
        <Header changeCountry={this.changeCountry} page="Source" />
        {loading ? (
          <Loader active={loading} />
        ) : sources.length ? (
          <div>
            <Grid columns={3} padded>
              {pageOfItems.map(sourceObject => (
                <Grid.Column>
                  <SourceCard sourceCardData={sourceObject} />
                </Grid.Column>
              ))}
            </Grid>
            <Pagination
              initialPage={1}
              pageSize={6}
              items={sources}
              onChangePage={this.onChangePage}
            />
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



const mapStateToProps = state => ({
  sources: getSource(state),
  loading: getSourcePending(state),
  pageOfItems: getSourceForPagination(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchSource: fetchSource,
  fetchSourcePagination
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);