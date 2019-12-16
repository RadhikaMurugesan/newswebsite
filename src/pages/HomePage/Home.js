import React, { Component } from 'react';  
import { Grid } from 'semantic-ui-react';
import {Header} from '../../components/Header';
import { SourceCard } from '../../components/SourceCard';
import { Container, Row, Col } from 'react-bootstrap';
import * as Constants from '../../config/Constants';
import API from '../../config/AxiosBaseUrl';
import './styles.css';
class Home extends Component { 
    constructor(){
        super();
        this.state = {
            
            sourceCardData: []
        }
    }

    componentDidMount(){
        this.getSourceCardData(Constants.CountryCode);
      
    }

    changeCountry = (countryCode) => {
        console.log("changeCountry", countryCode);
        this.getSourceCardData(countryCode);
      
    }

    getSourceCardData = (countryCode) => {
        API.get(`sources?country=${countryCode}&apiKey=${Constants.ApiKey}`)
      .then(res => {
        
        console.log('get res', res.data.sources.slice(0,10));
        
        this.setState({
            sourceCardData: res.data.sources.slice(0,10),
        });
      })
    }

    render(){    
    return (
        <div >
        <Header changeCountry = {this.changeCountry}/>
      
        <Grid columns={4} divided className="grid">
    <Grid.Row>
       {this.state.sourceCardData.map((sourceObject) => 
       <Grid.Column>
           <SourceCard sourceCardData ={sourceObject}/>
           </Grid.Column>
       )}
     </Grid.Row>
     </Grid> 
        
     <div className="pagination">
          <span>&laquo;</span>
          <span className="active">1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>&raquo;</span>
        </div>
        
        </div>
      );
    }
   
  
}

export default Home;

