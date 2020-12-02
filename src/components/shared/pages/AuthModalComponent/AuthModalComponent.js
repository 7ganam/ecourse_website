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
import './AuthModalComponent.css'

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
        };
        this.render_modal = this.render_modal.bind(this);

    }



    render_modal(showModal) {
        let should_open = showModal
        return (
            <div>
                <Modal isOpen={showModal} id="myModal" style={{ maxWidth: "350px" }} class="modal fade modal-dialog modal-login">
                    <div class="modal-dialog modal-login">
                        <div class="modal-content">
                            <ModalHeader class="modal-header">
                                <div class="avatar">
                                    <img src={baseUrl + 'logo1.png'} alt="Avatar" />
                                </div>
                                <h4 class="modal-title">Member Login</h4>
                                <button type="button" onClick={this.props.toggle_modal} class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
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
                            <div class="modal-footer">
                                <a href="#">Forgot Password?</a>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>

        );
    }

    render() {
        return (
            <div style={{ marginTop: "" }}>
                { this.render_modal(this.props.showModal)}
            </div>

        )
    }
}

export default Auth;