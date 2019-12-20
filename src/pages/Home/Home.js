import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Header } from '../../components/Header';
import { SourceCard } from '../../components/SourceCard';
import { Container, Row, Col } from 'react-bootstrap';
import * as Constants from '../../config/Constants';
import API from '../../config/AxiosBaseUrl';
import './styles.css';
import Pagination from '../../components/Pagination';

class Home extends Component {
    constructor() {
        super();
        this.state = {

            sourceCardData: [],
            pageOfItems: []
        }
        this.onChangePage = this.onChangePage.bind(this);
    }

    componentDidMount() {
        this.getSourceCardData(Constants.CountryCode);

    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    changeCountry = (countryCode) => {
        console.log("changeCountry", countryCode);
        this.getSourceCardData(countryCode);

    }

    getSourceCardData = (countryCode) => {
        API.get(`sources?country=${countryCode}&apiKey=${Constants.ApiKey}`)
            .then(res => {
                console.log('response', res.data.sources)

                this.setState({
                    sourceCardData: res.data.sources
                });
            })
    }

    render() {
        return (
            <div >
                <Header changeCountry={this.changeCountry} />
                {
                    (this.state.sourceCardData.length) ?
                        <div>
                            <Grid columns={4} divided className="grid">
                                <Grid.Row>
                                    {this.state.pageOfItems.map((sourceObject) =>
                                        <Grid.Column>
                                            <SourceCard sourceCardData={sourceObject} />
                                        </Grid.Column>
                                    )}
                                </Grid.Row>
                            </Grid>
                            <Pagination initialPage={1} pageSize={6} items={this.state.sourceCardData} onChangePage={this.onChangePage} /> </div> :
                        <div className='errorMsgBlock'>
                            <h1 className='errorMsg'>Source Not Available</h1>
                        </div>
                }


            </div>
        );
    }


}

export default Home;

