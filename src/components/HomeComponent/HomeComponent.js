import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';

import { Collapse, Navbar, Nav, NavItem, NavLink, NavbarToggler, NavbarBrand } from 'reactstrap';
import Header from '../HeaderComponent/HeaderComponent';
import cairo3 from './hero_image.png'
import top_righ from './top_right.png'
import big_logo from './big_logo.png'
// import title from './Ecourse.svg'

import './Home.css'


class Home extends Component {

    render() {
        return (
            <div>
                <img src={cairo3} id="cairo3" alt="cairo" />
                <img src={top_righ} id="top_right" alt="Kiwi standing on oval" />
                <img src={big_logo} id="logo" alt="Kiwi standing on oval" />
                <img src={title} id="address_and_pupples" alt="Kiwi standing on oval" />
            </div>

        );


    }

}

export default Home;