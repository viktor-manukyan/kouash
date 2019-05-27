import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../EndPart/endStyle.css';



class End extends Component {
    render() {
        return (
            <Grid fluid className='endBackStyle'>
                <Row>
                    <Col md={10} mdOffset={1}>
                        <Row>
                            <Col md={4} className="logoStyleEnd" >
                                {this.props.textEnd[0].logoFooter}
                            </Col>
                            <Col md={1} className='d'>
                                <Row style={{textAlign:'center'}}>
                                    <a href='https://www.facebook.com' rel="noopener noreferrer" target='_blank'> <Col md={6} className='f'></Col></a>
                                    <a href='https://www.instagram.com' rel="noopener noreferrer" target='_blank'><Col md={6} className='i'></Col></a>
                                </Row>
                                <Row style={{ textAlign: 'center' }}>
                                    <a href='https://www.youtube.com/watch?v=UnKJL_ifwkk' rel="noopener noreferrer" target='_blank'><Col md={6} className='y'></Col></a>
                                    <a href='https://twitter.com' rel="noopener noreferrer" target='_blank'><Col md={6} className='t'></Col></a>
                                </Row>
                            </Col>
                            <Col md={2} mdOffset={1} className='endText'>
                                <Row><h4> {this.props.textEnd[0].typeWine}</h4></Row>
                                <Row>{this.props.textEnd[0].name1}</Row>
                                <Row>{this.props.textEnd[0].name2}</Row>
                                <Row>{this.props.textEnd[0].name3}</Row>
                            </Col>
                            <Col md={2}  className='endText'>
                                <Row><h4>{this.props.textEnd[0].typeProduct}</h4></Row>
                                <Row>{this.props.textEnd[0].typeProduct1}</Row>
                            </Col>
                            <a href='#up'>
                                <Col md={2} className='logoForUp'>
                                </Col>
                            </a>
                        </Row>
                    </Col> 
                </Row>
            </Grid>
        );
    }
}
export default End

