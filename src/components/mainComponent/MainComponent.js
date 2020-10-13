import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';

import { Collapse, Navbar, Nav, NavItem, NavLink, NavbarToggler, NavbarBrand } from 'reactstrap';
import Header from '../HeaderComponent/HeaderComponent';
import Home from '../HomeComponent/HomeComponent';

class Main extends Component {

    render() {
        return (
            <div>
                <Header />
                <Home />
            </div >
        );
    }
}

export default Main;