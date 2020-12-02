import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse,
    NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, Container, Row
} from 'reactstrap';
// import { div } from 'react-router-dom';
import React, { Component } from 'react';
import "./Header.css"
import { baseUrl } from '../../../../shared/baseURL';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { AuthContext } from '../../context/auth-context';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            nav_class_name: ""
        };
        this.login = this.login.bind(this);

    }
    static contextType = AuthContext;

    componentDidUpdate(nextProps) {
        // console.log("next", nextProps)
        const logs = this.context
        console.log(logs)
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

    login() {
        this.context.login();
        console.log(this.context)

    }


    render() {
        return (
            <div className={this.state.nav_class_name}>
                <Navbar light className="light py-1  border-bottom fixed-top" expand="xl">
                    <div style={{
                        position: "relative",
                        top: "-5px"
                    }} >
                        <NavbarBrand className="mr-auto" href="/">
                            <img src={baseUrl + 'small_logo.png'} height="40" width="40" alt='' />
                            <span className="brand_title">ecoures</span>
                        </NavbarBrand>
                    </div>


                    <NavbarToggler onClick={this.toggleNav} className="mr-2" />

                    <Collapse className="" isOpen={this.state.isNavOpen} navbar>

                        <Nav className="ml-xl-3">
                            <NavItem className=''>
                                <form className="form-inline ">
                                    <div className="md-form my-0">
                                        <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                                    </div>
                                    <Button color="success" href="#!" className="btn btn-outline-white btn-md my-0 ml-sm-2" type="submit">Search</Button>
                                </form>
                            </NavItem>
                        </Nav>


                        <Nav className="ml-4 ml-xl-auto" navbar>

                            <NavItem className=''>

                                <Link to="/">
                                    <div className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</div>
                                </Link>

                            </NavItem>
                            <NavItem className=''>
                                <Link to="/newcourse">
                                    <div className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> Add new course</div>
                                </Link>

                            </NavItem>
                            <NavItem className=''>
                                <Link to="/newworkspace">
                                    <div className="nav-link" to='/menu'><span className="fa fa-list fa-lg"></span> Add your workspace</div>
                                </Link>

                            </NavItem>
                            <NavItem className=''>
                                <Link to="/courses">
                                    <div className="nav-link" to='/courses'><span className="fa fa-address-card fa-lg"></span>  Courses</div>
                                </Link>
                            </NavItem>
                            <NavItem className=''>
                                <Link to="/workspaces">
                                    <div className="nav-link" to='/workspaces'><span className="fa fa-address-card fa-lg"></span>  Workspaces</div>
                                </Link>
                            </NavItem>
                            {!this.context.isLoggedIn &&
                                <div>
                                    <Button onClick={this.login} id="" className="my-1 mr-md-2 " outline ><span className="fa fa-sign-in fa-lg "></span> Login</Button>
                                    <Button color="success" id="" className=" my-1 mr-md-2 "  ><span className="fa fa-sign-in fa-lg"></span> Sign Up</Button>
                                </div>
                            }
                            {this.context.isLoggedIn &&
                                <img src={baseUrl + "uploads/images/users/" + 'm2.jpeg'} alt="Avatar" class="avatar"></img>
                            }
                        </Nav>

                    </Collapse>

                </Navbar>
            </div>
        );
    }
}

export default Header;