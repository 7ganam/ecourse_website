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

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import Auth from "../AuthModalComponent/AuthModalComponent"
class Authpage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal_isopen: false,
        };
        this.toggle_modal = this.toggle_modal.bind(this)

    }


    toggle_modal() {
        this.setState({ modal_isopen: !this.state.modal_isopen })
    }


    render() {
        return (
            <div >
                <button style={{ marginTop: "330px" }} type="button" onClick={this.toggle_modal}>modal</button>
                <Auth showModal={this.state.modal_isopen} toggle_modal={this.toggle_modal} />
            </div>

        )

    }
}

export default Authpage;