import React, { Component } from "react";
import { Grid, Loader } from "semantic-ui-react";
import NewsCard from "../../components/NewsCard";
import API from "../../config/AxiosBaseUrl";
import * as Constants from "../../config/Constants";
import { Header } from "../../components/Header";
import Pagination from "../../components/Pagination";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getTopSource, getSourcePending, getSourceForPagination} from '../../reducers/reducers';
import {fetchTopSource, fetchSourcePagination} from '../../actions/index';

class TopHeadlines extends Component {
  constructor() {
    super();
    this.onChangePage = this.onChangePage.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const {fetchTopSource} = this.props;
    fetchTopSource(id);
    
  }

  onChangePage(pageOfItems) {
    const {fetchSourcePagination} = this.props;
    fetchSourcePagination(pageOfItems);
  }

  render() {
    const {topSources, loading, pageOfItems} = this.props;
    return (
      <div>
        <Header page="Top Headlines" />
        {loading ? (
          <Loader active={loading} />
        ) : (
          <div>
            <Grid columns={"four"} padded>
              {pageOfItems.map(object => (
                <Grid.Column>
                  <NewsCard newsCardData={object} />
                </Grid.Column>
              ))}
            </Grid>
            <Pagination
              initialPage={1}
              pageSize={4}
              items={topSources}
              onChangePage={this.onChangePage}
            />
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  topSources: getTopSource(state),
  loading: getSourcePending(state),
  pageOfItems: getSourceForPagination(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchTopSource: fetchTopSource,
  fetchSourcePagination
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopHeadlines);