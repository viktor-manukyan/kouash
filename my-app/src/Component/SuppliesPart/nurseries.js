import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../SuppliesPart/supplesStyle.css';


class Vineyards extends Component {
    render() {
        // console.log(this.props.textVineyards[0]);
        return (
            <Grid fluid id='nurseries' >
                <Row className='eachHeadPart'>
                    <Row>
                        <Col md={4} mdOffset={4} className='eachPartTitleStyle'>{this.props.textVineyards[0].title}</Col>
                    </Row>
                    <Row >
                        <Col md={8} mdOffset={2} className='size3Style'>
                            {this.props.textVineyards[0].title2}
                        </Col>
                    </Row>
                </Row>
                    
               
                <Row className='nurseriesBackImg'>
                    <Row >
                        <Col md={10} mdOffset={1} className='nurseriesDiv'>
                            <Row >
                                <Col md={6} mdOffset={3} className='size2Nurseries' style={{ marginTop: '15px' }}>
                                    {this.props.textVineyards[0].title3}
                                 </Col>
                            </Row>
                            <Row style={{textAlign:"center"}}>
                                <Col md={4} mdOffset={4} className='size3Nurseries'>
                                    {this.props.textVineyards[0].title4}
                               </Col>
                            </Row>
                            <Row className='size4Nurseries'>
                                <Col md={1} className='borderStext'>{this.props.textVineyards[0].title4_1}</Col>
                                <Col md={1} className='borderStext'>{this.props.textVineyards[0].title4_2}</Col>
                                <Col md={1} className='borderStext'> {this.props.textVineyards[0].title4_3} </Col>
                                <Col md={1} className='borderStext'> {this.props.textVineyards[0].title4_4} </Col>
                                <Col md={1} className='borderStext'> {this.props.textVineyards[0].title4_5} </Col>
                                <Col md={1} className='borderStext'>  {this.props.textVineyards[0].title4_6}</Col>
                                <Col md={1} className='borderStext'>  {this.props.textVineyards[0].title4_7} </Col>
                                <Col md={1} className='borderStext'>  {this.props.textVineyards[0].title4_8} </Col>
                                <Col md={1} className='borderStext'>  {this.props.textVineyards[0].title4_9} </Col>
                                <Col md={1} className='borderStext'>   {this.props.textVineyards[0].title4_10}{this.props.textVineyards[0].title}</Col>
                                <Col md={1} className='borderStext'>  {this.props.textVineyards[0].title4_11} </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row >
                        <Col md={10} mdOffset={1} className='nurseriesDiv'>
                            <Row >
                                <Col md={6} mdOffset={3} className='size2Nurseries' style={{ marginTop: '15px' }}>
                                    {this.props.textVineyards[0].title5}           
                                </Col>
                            </Row>
                            <Row style={{textAlign: "center"}}>
                                <Col md={2} mdOffset={5} className='size3Nurseries'>
                                    {this.props.textVineyards[0].title6}                         
                                </Col>
                            </Row>
                            <Row className='size4Nurseries'>
                                <Col md={6} mdOffset={3}>
                                    <Row>
                                        <Col md={4} className='borderStext'>{this.props.textVineyards[0].title6_1} </Col>
                                        <Col md={4} className='borderStext'>{this.props.textVineyards[0].title6_2} </Col>
                                        <Col md={4} className='borderStext'> {this.props.textVineyards[0].title6_3} </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Row>
            </Grid>
        );
    }


}
export default Vineyards

