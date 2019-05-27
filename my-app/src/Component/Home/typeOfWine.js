import React, { Component } from 'react';
import { Grid, Row ,Col} from 'react-bootstrap';

class TipeOfWine extends Component {
    constructor(props){
        super(props);
        // console.log(this.props.tipeOfWineInfo[0]);
        this.state={
            wineType:[
                {
                    id: 1,
                    img: 'wite.jpg',
                    t: props.tipeOfWineInfo[0], 
                },
                {
                    id: 2,
                    img: 'rose.jpg',
                    t: props.tipeOfWineInfo[1],
                },
                {
                    id: 3,
                    img: 'red.jpg',
                    t: this.props.tipeOfWineInfo[2],
                },
            ]
        }
        // console.log(this.state.wineType[0].t);
    }
    render() {
        return (
                <Grid fluid id='up'>
                <Row>
                        <Col md={12}   className='colStyele'>
                                    {
                                        this.state.wineType.map((wine) => {
                                            return(
                                                <Col key={wine.id} md={4}>
                                                    <Col md={6} className='textStyle'>
                                                        {wine.t.text}
                                                    </Col>
                                                    <Col md={5}>
                                                     <img src={'ImagePublic/wineType/' + wine.img}
                                                        alt='Sorry'
                                                        className='wineTypeStyle'
                                                        />
                                                    </Col>
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
export default TipeOfWine

