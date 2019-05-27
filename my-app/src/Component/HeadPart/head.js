import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import About from '../AboutPart/about';
import Vineyards from '../SuppliesPart/nurseries'
import Shops from '../ShopsPart/shops'
import Contact from '../ContactPart/contact';
import Home from '../Home/home';
import End from '../EndPart/end';
import '../HeadPart/headStyle.css';


import { Router, Route, Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

//english text
import { engleashTextHome } from '../Information/en';
import { engleashTextAbout } from '../Information/en';
import { engleashTextVineyards } from '../Information/en';
import { engleashTextShops } from '../Information/en';
import { engleashTextContact } from '../Information/en';
import { engleashFooterText } from '../Information/en';



//arm text
import { armTextHome } from '../Information/arm';
import { armTextAbout } from '../Information/arm';
import { armTextVineyards } from '../Information/arm';
import { armTextShops } from '../Information/arm';
import { armTextContact } from '../Information/arm';
import { armFooterText } from '../Information/arm';



const history = createBrowserHistory();


class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'hay',
            wine: 'Wines',
            about: 'About',
            vineygrads: 'Vineyards',
            shops: 'Shops',
            contact: 'Contact',
            wineH: 'Գինիներ',
            aboutH: 'Մեր մասին',
            vineygradsH: 'Այգիներ',
            shopsH: 'Խանութներ',
            contactH: 'Կապ',
        }
        this.changeLanguage = this.changeLanguage.bind(this);
    }
    changeLanguage(event) {
        this.setState({
            value: event.target.value,
        });
    }
    render() {
        // console.log(2);        
        return (
            <Router history={history} >
                <Grid fluid id='up'>
                    <Row className='headBackStyle'>
                        <Col md={12} >
                            <Row>
                                <Col md={2} mdOffset={1} className='logoCol' >
                                    <Row >
                                        <Col md={6} mdOffset={2} className='logo' >
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={9} className='rightSection' >
                                    {
                                        (this.state.value === 'hay') ? (
                                            <Row>
                                                <Link to='/' >
                                                    <Col md={2} className='titleOfPartH'>{this.state.wine}</Col>
                                                </Link>
                                                <Link to='about' >
                                                    <Col md={2} className='titleOfPart'>{this.state.about}</Col>
                                                </Link>
                                                <Link to='nurseries' >
                                                    <Col md={2} className='titleOfPart'>{this.state.vineygrads}</Col>
                                                </Link>
                                                <Link to='shops' >
                                                    <Col md={2} className='titleOfPart'>{this.state.shops}</Col>
                                                </Link>
                                                <Link to='contact' >
                                                    <Col md={2} className='titleOfPart'>{this.state.contact}</Col>
                                                </Link>
                                                <Col md={2} className='selectDivStyle'>
                                                    <select id="lang" className='selectStyle' onChange={this.changeLanguage} value={this.state.value}>
                                                        <option id="1" value='eng'>Hay</option>
                                                        <option id="2" value='hay'>Eng</option>
                                                        <option id="2" value='hay'>Ru</option>
                                                    </select>                                            
                                                </Col>
                                            </Row>
                                        
                                        ) : (
                                                <Row>
                                                    <Link to='/' >
                                                        <Col md={2} className='titleOfPartH'>{this.state.wineH}</Col>
                                                    </Link>
                                                    <Link to='about' >
                                                        <Col md={2} className='titleOfPart'>{this.state.aboutH}</Col>
                                                    </Link>
                                                    <Link to='nurseries' >
                                                        <Col md={2} className='titleOfPart'>{this.state.vineygradsH}</Col>
                                                    </Link>
                                                    <Link to='shops' >
                                                        <Col md={2} className='titleOfPart'>{this.state.shopsH}</Col>
                                                    </Link>
                                                    <Link to='contact' >
                                                        <Col md={2} className='titleOfPart'>{this.state.contactH}</Col>
                                                    </Link>
                                                    <Col md={2} className='selectDivStyle'> 
                                                    <select id="lang" className='selectStyle' onChange={this.changeLanguage} value={this.state.value}>
                                                        <option id="1" value='eng'>Hay</option>
                                                        <option id="2" value='hay'>Eng</option>
                                                        <option id="2" value='hay'>Ru</option>
                                                    </select>                                            
                                                </Col>
                                                </Row>
                                            )
                                    }
                                </Col>
                            </Row>
                        </Col>                        
                    </Row>

                    {
                        this.state.value === 'hay' ? (
                            <div>
                                <Route exact path='/' component={
                                    () => (
                                        <Row>
                                            <Home textHome={engleashTextHome} wineAnimationText='WINE IS OUR LIFE PART.......' />
                                        </Row>
                                    )
                                } />
                                <Route exact path='/about'
                                    component={() => (
                                        <Row>
                                            <About textAbout={engleashTextAbout} />
                                        </Row>
                                    )
                                    } />
                                <Route exact path='/nurseries'
                                    component={() => (
                                        <Row>
                                            <Vineyards textVineyards={engleashTextVineyards} />
                                        </Row>
                                    )
                                    } />
                                <Route exact path='/shops'
                                    component={() => (
                                        <Row>
                                            <Shops textShops={engleashTextShops} />
                                        </Row>
                                    )
                                    } />
                                <Route exact path='/contact'
                                    component={() => (
                                        <Row>
                                            <Contact textContact={engleashTextContact} />
                                        </Row>
                                    )
                                    } />
                                <Row>
                                    <End textEnd={engleashFooterText} />
                                </Row>
                            </div>

                        ) : (
                                <div>
                                    <Route exact path='/' component={
                                        () => (
                                            <Row>
                                                <Home textHome={armTextHome} wineAnimationText='Գինին մեր կյանքի մասն է.......' />
                                            </Row>
                                        )
                                    } />
                                    <Route exact path='/about'
                                        component={() => (
                                            <Row>
                                                <About textAbout={armTextAbout} />
                                            </Row>
                                        )
                                        } />
                                    <Route exact path='/nurseries'
                                        component={() => (
                                            <Row>
                                                <Vineyards textVineyards={armTextVineyards} />
                                            </Row>
                                        )
                                        } />
                                    <Route exact path='/shops'
                                        component={() => (
                                            <Row>
                                                <Shops textShops={armTextShops} />
                                            </Row>
                                        )
                                        } />
                                    <Route exact path='/contact'
                                        component={() => (
                                            <Row>
                                                <Contact textContact={armTextContact} />
                                            </Row>
                                        )
                                        } />
                                    <Row>
                                        <End textEnd={armFooterText} />
                                    </Row>
                                </div>
                            )}
                        

                </Grid>
            </Router>
        );
    }


}
export default Head

