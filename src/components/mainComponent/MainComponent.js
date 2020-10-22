import React, { Component } from 'react';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import * as data from './courses_data.json';
import { Collapse, Navbar, Nav, NavItem, NavLink, NavbarToggler, NavbarBrand } from 'reactstrap';
import Header from '../HeaderComponent/HeaderComponent';
import Home from '../pages/HomeComponent/HomeComponent';
import NewCourse from '../pages/NewCourseComponent/NewCourseComponent';
import NewWorkSpace from '../pages/NewWorkSpaceComponent/NewWorkSpaceComponent';
import CourseView from '../pages/CourseViewComponent/CourseViewComponent';



import CourseCard from '../CoursesComponent/CoursesComponent';


class Main extends Component {

    render() {
        return (
            <div>
                <Header />
                {/* <NewCourse /> */}
                {/* <NewWorkSpace /> */}
                <CourseView />

            </div >
        );
    }
}

export default Main;