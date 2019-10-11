import React, { Component } from 'react';  
import {Header} from '../components/Header';
import App from '../App';
import { NewsCard } from '../components/NewsCard';
import { Container, Row, Col } from 'react-bootstrap';
import * as Constants from '../config/Constants';
class Home extends Component { 
    constructor(){
        super();
        this.state = {
            country: [],
            newsCardData: []
        }
    }

    componentDidMount(){
        fetch(Constants.BaseUrl+"&country=us&apiKey="+Constants.ApiKey)
        .then(res => res.json())
        .then(
          (result) => {
              console.log('result', result)
            this.setState({
                newsCardData: result.sources
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            console.log('error', error);            
          }
        )
    }

    changeCountry = (value) => {
        console.log(value)
    }

    render(){    
    return (
        <div>
        <Header changeCountry = {this.changeCountry} />
        <Container>
            <Row style={{ marginTop: 30, marginBottom: 30 }}>
                <Col><NewsCard /></Col>
                <Col><NewsCard /></Col>
                <Col><NewsCard /></Col>
                <Col><NewsCard /></Col>
            </Row>
            <Row style={{ marginTop: 30, marginBottom: 30 }}>
                <Col><NewsCard /></Col>
                <Col><NewsCard /></Col>
                <Col><NewsCard /></Col>
                <Col><NewsCard /></Col>
            </Row>
            <Row style={{ marginTop: 30, marginBottom: 30 }}>
                <Col><NewsCard /></Col>
                <Col><NewsCard /></Col>
                <Col><NewsCard /></Col>
                <Col><NewsCard /></Col>
            </Row>            
        </Container>  
        </div>
      );
    }
   
  
}

export default Home;

