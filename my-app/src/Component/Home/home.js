import React, { Component } from 'react';
import { Grid, Row} from 'react-bootstrap';
import Slideshow from './slide';
import TipeOfWine from './typeOfWine'
import Galery from './galery';
import '../Home/homeStyle.css';


class Home extends Component {
    render() {
        return (
                <Grid fluid id='up'>
                    <Row>
                        <Slideshow />
                    </Row>
                    <Row>
                    <TipeOfWine tipeOfWineInfo={this.props.textHome}/>
                    </Row>
                    <Row>
                        <Galery text={this.props.wineAnimationText} />
                    </Row>
                </Grid>
        );
    }


}
export default Home

