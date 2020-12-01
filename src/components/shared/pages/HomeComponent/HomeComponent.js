import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';

import { Collapse, Navbar, Nav, NavItem, NavLink, NavbarToggler, NavbarBrand } from 'reactstrap';
import Illustration from '../../components/IllustrationComponent/IllustrationComponent';

import hero_image from './images/hero_image.png'
import top_righ from './images/top_right.png'
import big_logo from './images/logo1_70.png'
import title from './images/Ecourse.svg'
import promo from './images/promo.svg'
import vline from './images/vline.svg'

import FeaturedCourses from '../../../course/components/FeateuredCourses_Component/FeateuredCourses_Component';
import FeaturedWorkspaces from '../../../workspace/components/FeaturedWorkspacesComponent/FeaturedWorkspacesComponent';


import './Home.css'


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: this.props.courses,
            workspaces: this.props.workspaces,

        };


        this.render_courses = this.render_courses.bind(this);

    }
    componentDidUpdate(nextProps) {
        // console.log("next", nextProps)
    }


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

    render_courses(coursesAreLoading) {
        if (coursesAreLoading) {
            return (
                <h1>loading...</h1>
            );
        }
        else if (this.props.courses != null) { // don't know why did I need this .. read it later ::TODO:
            return (
                <FeaturedCourses courses={this.props.courses} />
            );
        }
        else {
            return (null)
        }

    }



    render_workspaces(workspacesAreLoading) {
        if (workspacesAreLoading) {
            return (
                <h1>loading...</h1>
            );
        }
        else if (this.props.workspaces != null) { // don't know why did I need this .. read it later ::TODO:
            return (
                <FeaturedWorkspaces workspaces={this.props.workspaces} />
            );
        }
        else {
            return (null)
        }

    }

    render() {
        // render_courses





        return (
            <div>
                <div id="all4453">
                    <div id="hero_div111">
                        <img src={hero_image} id="hero_image111" alt="cairo" />
                    </div>
                    <img src={top_righ} id="top_right111" alt="Kiwi standing on oval" />
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

                {this.render_courses(this.props.coursesAreLoading)}
                {this.render_workspaces(this.props.workspacesAreLoading)}

            </div>
        );

    }

}

export default Home;