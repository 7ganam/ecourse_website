import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse,
    NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, Container, Row
} from 'reactstrap';
// import { div } from 'react-router-dom';
import React, { Component } from 'react';
import "./Header.css"
class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            nav_class_name: ""
        };
    }


    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
        if (!this.state.isNavOpen) {
            this.setState({
                nav_class_name: "navbar-collapsed"
            });
        }
        else if (this.state.isNavOpen) {
            this.setState({
                nav_class_name: ""
            });
        }
    }
    container_styles = {
        // justifyContent: 'center'
    };
    button_styles = {
        width: '150px'
    }

    render() {
        return (
            <div className={this.state.nav_class_name}>
                <Navbar light className="light py-1 bg-transparent border-bottom" expand="xl">

                    <NavbarBrand className="mr-auto" href="/">
                        <img src='./small_logo.png' height="70" width="70" alt='Ristorante Con Fusion' />
                        <span className="brand_title">ecoures</span>
                    </NavbarBrand>
                    {/* <NavbarToggler onClick={this.toggleNav} /> */}
                    <NavbarToggler onClick={this.toggleNav} className="mr-2" />

                    <Collapse className="" isOpen={this.state.isNavOpen} navbar>
                        <Nav className="ml-xl-3">
                            <NavItem className='pt-2'>
                                <form className="form-inline ">
                                    <div className="md-form my-0">
                                        <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                                    </div>
                                    <Button color="success" href="#!" className="btn btn-outline-white btn-md my-0 ml-sm-2" type="submit">Search</Button>
                                </form>
                            </NavItem>
                        </Nav>

                        <Nav className="ml-4 ml-xl-auto" navbar>

                            <NavItem className='pt-2'>
                                <div className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</div>
                            </NavItem>
                            <NavItem className='pt-2'>
                                <div className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</div>
                            </NavItem>
                            <NavItem className='pt-2'>
                                <div className="nav-link" to='/menu'><span className="fa fa-list fa-lg"></span> Menu</div>
                            </NavItem>
                            <NavItem className='pt-2'>
                                <div className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</div>
                            </NavItem>

                        </Nav>
                        {/* <Nav className="ml-lg-3">
                                    <NavItem>
                                        <Container style={this.container_styles} className=" contnet_centered ml-0 mb-2 mt-2">
                                            <Row>
                                                <Button style={this.button_styles} className="my-1 my-md-0 mr-2 " outline ><span className="fa fa-sign-in fa-lg "></span> Login</Button>
                                                <Button style={this.button_styles} className=" my-1 my-md-0 " outline ><span className="fa fa-sign-in fa-lg"></span> Sign Up</Button>
                                            </Row>
                                        </Container>

                                    </NavItem>
                                </Nav> */}
                    </Collapse>

                </Navbar>
            </div>
        );
    }
}

export default Header;