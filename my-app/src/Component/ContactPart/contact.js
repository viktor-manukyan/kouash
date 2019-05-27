import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import '../ContactPart/contactStyle.css';


class Contact extends Component {
    render() {
        console.log(this.props)
        return (
            <Grid fluid className='con'>
                <Row className='contactPartStyle'>
                    <Col md={4} mdOffset={4} className='titleStyle'>{this.props.textContact[0].title}</Col>
                </Row>

                <Row>
                    <Col md={6} mdOffset={1}>
                        <Row>
                            <Col md={4} mdOffset={4} className='midTextSize'>
                                {this.props.textContact[0].title2}
                          </Col>
                        </Row>
                        <Row>
                            <form>
                                <Row className='forMarginRow'>
                                    <Col md={6} className='smTextSize'>
                                        {this.props.textContact[0].firstName}<br />
                                        <input type='text' placeholder={this.props.textContact[0].firstNameInput}></input>
                                    </Col>
                                    <Col md={6} className='smTextSize'>
                                        {this.props.textContact[0].lastName}<br />
                                        <input type='text' placeholder={this.props.textContact[0].lastNameInput}></input>
                                    </Col>
                                </Row>
                                <Row className='forMarginRow'>
                                    <Col md={6} className='smTextSize'>
                                        {this.props.textContact[0].email}<br />
                                        <input type='text' placeholder={this.props.textContact[0].emailInput}></input>
                                    </Col>
                                    <Col md={6} className='smTextSize'>
                                        {this.props.textContact[0].phone}<br />
                                        <input type='text' placeholder={this.props.textContact[0].phoneInput}></input>
                                    </Col>
                                </Row>
                                <Row className='forMarginRow'>
                                    <Col md={6} className='smTextSize'>
                                        {this.props.textContact[0].message}<br />
                                        <textarea placeholder={this.props.textContact[0].messageInput}></textarea>
                                    </Col>
                                </Row>
                                <Row className='forMarginRow'>
                                    <Button className='buttonStyle'>{this.props.textContact[0].buttonName}</Button>
                                </Row>
                            </form>
                        </Row>
                        
                    </Col>
                </Row>
                

            </Grid>


        );
    }
}
export default Contact

