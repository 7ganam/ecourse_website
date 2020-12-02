import React, { Component } from 'react';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import { Collapse, Navbar, Nav, NavItem, NavLink, NavbarToggler, NavbarBrand } from 'reactstrap';
import { CardImg, CardSubtitle, } from 'reactstrap';
// import { Card, Button, CardHeader, CardFooter, CardBody,  CardTitle, CardText } from 'reactstrap';
import ReactStars from "react-rating-stars-component";
import { Card, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';
import { Jumbotron } from 'reactstrap';

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { baseUrl } from "../../../../shared/baseURL"
import './AuthPageComponent.css'

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
        };
        // this.course_view = this.course_view.bind(this);

    }


    toggle = () => this.setState({ modal: !this.state.modal });



    render() {

        return (
            <div>
                <div class="text-center">
                    <a href="#myModal" class="trigger-btn" onClick={this.toggle} data-toggle="modal">Click to Open Login Modal</a>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} >
                    <div class="modal-dialog modal-login">
                        <div class="modal-content">
                            <ModalHeader>
                                <div class="avatar">
                                    <img src="/examples/images/avatar.png" alt="Avatar" />
                                </div>
                                <h4 class="modal-title">Member Login</h4>
                                <button onClick={this.toggle} type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </ModalHeader>
                            <ModalBody>
                                <form action="/examples/actions/confirmation.php" method="post">
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="username" placeholder="Username" required="required" />
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" name="password" placeholder="Password" required="required" />
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary btn-lg btn-block login-btn">Login</button>
                                    </div>
                                </form>
                            </ModalBody>

                            <ModalFooter>
                                <a href="#">Forgot Password?</a>
                            </ModalFooter>
                        </div>
                    </div>
                </Modal>

            </div>

        );
    }
}

export default Auth;