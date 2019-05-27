import React, { Component } from 'react';
import './shopsStyle.css'
import { Grid, Row, Col, Button } from 'react-bootstrap';

class Shops extends Component {
    constructor(props){
        super(props);
        this.state={
            myBut:false,
        }
    }
    handleValue= ()=>{
        this.setState({
            myBut:!this.state.myBut,
        })
        console.log(1);
    }
    render() {
        // console.log(this.props.textShops[0]);
        return (
            <Grid fluid id='shops' >
                <Row className='eachHeadPart'>
                    <Row>
                        <Col md={4} mdOffset={4} className='eachPartTitleStyle'>
                            {this.props.textShops[0].title}
                        </Col>
                   </Row>
                   <Row style={{marginTop:'20px'}}>
                        <Col md={4} mdOffset={4} className='size3Style'>
                            {this.props.textShops[0].title2}
                       </Col>
                   </Row>
                </Row>
                
                <Row  className='shopsDivStyle'>
                    <Row>
                        <Col md={10} mdOffset={1} >
                            <Row>
                                <a href='http://www.yerevan-city.am/ru/promo.html' rel="noopener noreferrer" target='_blank' ><Col  md={4} className='divShops1 '></Col></a>
                                <a href='http://www.noyantapan.am/ru/' rel="noopener noreferrer" target='_blank'><Col md={4} className='divShops2'></Col></a>
                                <a href='http://www.norzovq.am/?lang=2' rel="noopener noreferrer" target='_blank'><Col md={4} className='divShops3'> </Col></a>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={10} mdOffset={1}>
                            <Row>
                                <a href='https://www.facebook.com/parmasupermarkets/' rel="noopener noreferrer" target='_blank'><Col md={4} className='divShops4 '></Col></a>
                                <a href='https://www.facebook.com/carrefourarmeniaofficial/' rel="noopener noreferrer" target='_blank'><Col md={4} className='divShops5'></Col></a>
                                <a href='https://www.sas.am' target='_blank' rel="noopener noreferrer"><Col md={4} className='divShops6'></Col></a>
                            </Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={1} mdOffset={5} className='buttonBackDiv'>
                            <Row>
                                <Button className='showMore' onClick={this.handleValue}>Show more</Button>
                                {/* {(this.state.myBut) ? <Row>
                                        <About /> 
                                      </Row>: null} */}
                            </Row>
                        </Col>
                    </Row>

                </Row>
                
            </Grid>
        );
    }
}
export default Shops

