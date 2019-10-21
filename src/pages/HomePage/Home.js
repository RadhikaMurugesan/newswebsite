import React, { Component } from 'react';  
import {Header} from '../../components/Header';
import { SourceCard } from '../../components/SourceCard';
import { Container, Row, Col } from 'react-bootstrap';
import * as Constants from '../../config/Constants';
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
             
            this.setState({
                newsCardData: result.sources
            });
          },
         
          (error) => {
            console.log('error', error);            
          }
        )
    }

    changeCountry = (value) => {
        
    }

    render(){    
    return (
        <div>
        <Header changeCountry = {this.changeCountry}/>
        <Container>
            <Row style={{ marginTop: 30, marginBottom: 30 }}>
                <Col><SourceCard /></Col>
                <Col><SourceCard /></Col>
                <Col><SourceCard /></Col>
                <Col><SourceCard /></Col>
            </Row>
            <Row style={{ marginTop: 30, marginBottom: 30 }}>
                <Col><SourceCard /></Col>
                <Col><SourceCard /></Col>
                <Col><SourceCard /></Col>
                <Col><SourceCard /></Col>
            </Row>
            <Row style={{ marginTop: 30, marginBottom: 30 }}>
                <Col><SourceCard /></Col>
                <Col><SourceCard /></Col>
                <Col><SourceCard /></Col>
                <Col><SourceCard /></Col>
            </Row>            
        </Container>  
        </div>
      );
    }
   
  
}

export default Home;

