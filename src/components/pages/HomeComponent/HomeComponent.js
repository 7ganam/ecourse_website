import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';

import { Collapse, Navbar, Nav, NavItem, NavLink, NavbarToggler, NavbarBrand } from 'reactstrap';
import Header from '../../HeaderComponent/HeaderComponent';
import Illustration from '../../IllustrationComponent/IllustrationComponent';

import hero_image from './hero_image.png'
import top_righ from './top_right.png'
import big_logo from './logo1_70.png'
import title from './Ecourse.svg'
import promo from './promo.svg'
import vline from './vline.svg'
import CourseCard from '../../CoursesComponent/CoursesComponent';


import './Home.css'


class Home extends Component {
    container_styles = {
        // justifyContent: 'center'
        position: 'relative',
        top: '420px',
        // left: '10%'
    };
    row_styles = {
        justifyContent: 'center'
    };
    button_styles = {
        width: '200px',
        backgroundColor: 'white'
    }


    render() {
        return (
            <div>
                <div id="all4453">
                    <div id="hero_div">
                        <img src={hero_image} id="hero_image" alt="cairo" />
                    </div>
                    <img src={top_righ} id="top_right" alt="Kiwi standing on oval" />
                    <img src={big_logo} id="logo" alt="Kiwi standing on oval" />
                    <img src={title} id="address_and_pupples" alt="Kiwi standing on oval" />
                    <img src={promo} id="promo" alt="Kiwi standing on oval" />
                    <img src={vline} id="vline" alt="Kiwi standing on oval" />
                    <div className=" button_container ">
                        <Container >
                            <Row style={this.row_styles} id="buttons_row">
                                <Button id="log_in_button" className="my-1 my-md-0 mr-sm-2 " outline ><span className="fa fa-sign-in fa-lg "></span> Login</Button>
                                <Button color="success" id="sign_up_button" className=" my-1 my-md-0 "  ><span className="fa fa-sign-in fa-lg"></span> Sign Up</Button>
                            </Row>
                        </Container>

                    </div>

                </div>
                <Illustration />
                <CourseCard />

            </div>


        );

    }

}

export default Home;