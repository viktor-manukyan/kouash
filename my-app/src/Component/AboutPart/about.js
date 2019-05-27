import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <Grid fluid id='about'>
                <Row className='eachHeadPart'>
                    <Row>
                        <Col md={4} mdOffset={4} className='eachPartTitleStyle'>{this.props.textAbout[0].title}</Col>
                    </Row>
                    <Row className='forAboutRow'>
                        <Col md={8} mdOffset={2} className='size3Style'>
                            {this.props.textAbout[0].title2}
                        </Col>
                    </Row>
                    <Row className='forAboutRow'>
                        <Col md={10} mdOffset={1}>
                            <Row >
                                <Col md={6} className='aboutColLeft' >
                                    <Row>
                                        <Col md={4} mdOffset={4} className='size2Style'>{this.props.textAbout[0].titleLeft}</Col>
                                    </Row>
                                    <Row className='size4Style'>
                                        {this.props.textAbout[0].preparation}
                                    </Row>
                                   
                                </Col>
                                <Col md={6} className='aboutColRight'>
                                    <Row>
                                        <Col md={4} mdOffset={4} className='size2Style'>{this.props.textAbout[0].titleRight}</Col>
                                    </Row>
                                    <Row className='size4Style'>
                                        {this.props.textAbout[0].ourMission}
                                    </Row>      
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row >
                        <Col md={6} className='imgAboutPart1'></Col>
                        <Col md={6}>
                           <Row>
                               <Col md={4} className='wine1'></Col>
                                <Col md={4} className='wine2'></Col>
                                <Col md={4} className='wine3'></Col>
                           </Row>
                           <Row>
                                <Col md={10} mdOffset={1} className='size4Style'>
                                    {this.props.textAbout[0].underBottel}  
                                </Col>
                           </Row>
                        </Col>
                    </Row>
                </Row>
                
            </Grid>
        );
    }


}
export default About

