import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Galery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wineType: [
                {
                    id: 1,
                    img: '2.png',
                },
                {
                    id: 2,
                    img: '2.2.png',
                },
                {
                    id: 3,
                    img: '2.3.png',
                },
                {
                    id: 4,
                    img: '2.1.png',
                },
            ],
            wineImg: [
                {
                    id: 1,
                    img: '3.png',
                },
                {
                    id: 2,
                    img: '3.1.png',
                },
            ]
            ,
            wineImg4Size: [
                {
                    id: 1,
                    img: '4.jpg',
                },
                {
                    id: 2,
                    img: '4.1.png',
                },
                {
                    id: 3,
                    img: '4.2.png',
                },
                {
                    id: 4,
                    img: '4.3.jpg',
                },
            ]
        }
    }
    render() {
        return (
            <Grid fluid >
                <Row className='galleryBackStyle'>
                      <h1>{this.props.text}</h1>
                        {
                            this.state.wineType.map((wine) => {
                                return (
                                    <Col key={wine.id} md={3} className='galeryDivStyle'>
                                            <img src={'ImagePublic/galery/' + wine.img}
                                                alt='Sorry'
                                                className='galeryStyle'
                                            />
                                    </Col>
                                );
                            })
                        }
                </Row>
                <Row>
                    <Col md={12} style={{ backgroundColor:'#722F37'}}>
                        {
                            this.state.wineImg.map((wine) => {
                                return (
                                    <Col key={wine.id} md={6}>
                                        <img src={'ImagePublic/galery/' + wine.img}
                                            alt='Sorry'
                                            className='galeryWineImgStyle'
                                        />
                                    </Col>
                                );
                            })
                        }
                    </Col>
                </Row>
                <Row >
                    <Col md={12} className='galeryImgAnimation'>
                    </Col>
                </Row>
                <Row style={{ backgroundColor: 'black' }}>
                    <Col md={12} >
                        {
                            this.state.wineImg4Size.map((wine) => {
                                return (
                                    <Col key={wine.id} md={6}>
                                        <img src={'ImagePublic/galery/' + wine.img}
                                            alt='Sorry'
                                            className='galeryWineImgStyle'
                                        />
                                    </Col>
                                );
                            })
                        }
                    </Col>

                </Row>

            </Grid>
        );
    }


}
export default Galery

