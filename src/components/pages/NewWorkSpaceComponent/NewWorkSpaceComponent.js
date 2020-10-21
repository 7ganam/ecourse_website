import React, { Component } from 'react';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import { Collapse, Navbar, Nav, NavItem, NavLink, NavbarToggler, NavbarBrand } from 'reactstrap';
import { FormText } from 'reactstrap';

import new_course_image from './new_course_image.png'

import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import './NewWorkSpaceComponent.css'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import {
    Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';



class NewWorkSpace extends Component {
    constructor(props) {
        super(props);

        this.state = {
            CourseName: '',
            CourseDescription: '',
            startDate: new Date(),
            endDate: new Date(),
            Session_1_title: '',
            Session_1_Description: '',
            number_of_sessions: '',
            // Session_1_startDate: new Date(),
            Sessions: [{


            },
            {}
            ]
        };





        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
        this.handleEndChange = this.session_date_change_handler_function_factory.bind(this);


    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
        console.log(this.state.startDate)
        console.log(this.state.endDate)
    }


    handleStartChange(date) {
        this.setState({
            startDate: date
        })
    }

    handleEndChange(date) {
        this.setState({
            endDate: date
        })
    }

    session_date_change_handler_function_factory(session_id) {
        return (
            (date) => {
                let state_object = {}
                let session_state_key = `Session_${session_id}_startDate`
                state_object[session_state_key] = date
                this.setState(state_object)
            }
        )
    }

    // card_head_style = { backgroundColor: '#27C80B' }


    render() {
        return (
            <div id="new_course_all">
                <Container fluid  >
                    <Row className=''>

                        <Col className="t1 justify-content-center my-1" xs="8" sm="7" md="5" lg="1" >

                        </Col>
                        <Col className="t2 justify-content-center my-1" xs="8" sm="7" md="5" lg="7" >
                            <div id="new_course_form">
                                <div className="justify-content-center row row-content">
                                    <div className="col-12 col-lg-11 ml-auto ">
                                        <Form onSubmit={this.handleSubmit}>
                                            <FormGroup row>
                                                <Label for="CourseName" sm={3}><span className="new_course_label">Course Name:</span></Label>
                                                <Col sm={9} className="ml-auto">
                                                    <Input type="text" name="CourseName" id="new_course_name" placeholder="enter your course title here"
                                                        value={this.state.CourseName}
                                                        onChange={this.handleInputChange} />
                                                </Col>
                                            </FormGroup>


                                            <FormGroup row>
                                                <Label for="exampleText" sm={3}> <span className="new_course_label">Course Description:</span></Label>
                                                <Col sm={9}>
                                                    <Input id="new_course_text_area" type="textarea" name="CourseDescription" placeholder="enter your course description  here" value={this.state.CourseDescription}
                                                        onChange={this.handleInputChange} />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label for="number_of_sessions" sm={3}> <span className="new_course_label">number of sessions:</span></Label>
                                                <Col sm={9}>
                                                    <Input id="number_of_sessions" type="number" min="1" max="30" name="number_of_sessions" value={this.state.number_of_sessions}
                                                        onChange={this.handleInputChange} />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup row>
                                                <Label for="exampleText" sm={3}> <span className="new_course_label">Sessions:</span></Label>
                                                <Col >
                                                    <Card >
                                                        <CardHeader style={this.card_head_style} className="session_card_head">
                                                            Session 1
                                                        </CardHeader>
                                                        <CardBody>
                                                            <FormGroup row>
                                                                <Label for="Session_1_title" sm={3}><span className="Session_label">Session title:</span></Label>
                                                                <Col sm={9} className="ml-auto">
                                                                    <Input type="text" name="Session_1_title" id="Session_1_title" placeholder="enter session 1 title here"
                                                                        value={this.state.Session_1_title}
                                                                        onChange={this.handleInputChange} />
                                                                </Col>
                                                            </FormGroup>

                                                            <FormGroup row>
                                                                <Label for="Session_1_Description" sm={3}> <span className="Session_label">Session Description:</span></Label>
                                                                <Col sm={9}>
                                                                    <Input id="Session_1_Description_text_area" type="textarea" name="Session_1_Description" placeholder="enter session description  here" value={this.state.Session_1_Description}
                                                                        onChange={this.handleInputChange} />
                                                                </Col>
                                                            </FormGroup>
                                                            <FormGroup row>
                                                                <Label for="session_date" sm={3}> <span className="Session_label">Session start time:</span></Label>
                                                                <Col sm={9}>
                                                                    <DatePicker
                                                                        selected={this.state.Session_1_startDate}
                                                                        onChange={this.session_date_change_handler_function_factory(1)}
                                                                        showTimeSelect
                                                                        timeFormat="HH:mm"
                                                                        timeIntervals={20}
                                                                        timeCaption="time"
                                                                        dateFormat="MMMM d, yyyy h:mm aa"
                                                                    />
                                                                </Col>
                                                            </FormGroup>
                                                        </CardBody>
                                                    </Card>
                                                </Col>



                                            </FormGroup>






                                            <FormGroup row>
                                                <Label for="exampleText" sm={3}> <span className="new_course_label"></span></Label>

                                                <Col >
                                                    <Card >
                                                        <CardHeader style={this.card_head_style} className="session_card_head">
                                                            Session 2
                                                        </CardHeader>
                                                        <CardBody>
                                                            <FormGroup row>
                                                                <Label for="Session_2_title" sm={3}><span className="Session_label">Session title:</span></Label>
                                                                <Col sm={9} className="ml-auto">
                                                                    <Input type="text" name="Session_2_title" id="Session_2_title" placeholder="enter session 2 title here"
                                                                        value={this.state.Session_2_title}
                                                                        onChange={this.handleInputChange} />
                                                                </Col>
                                                            </FormGroup>

                                                            <FormGroup row>
                                                                <Label for="Session_2_Description" sm={3}> <span className="Session_label">Session Description:</span></Label>
                                                                <Col sm={9}>
                                                                    <Input id="Session_2_Description_text_area" type="textarea" name="Session_2_Description" placeholder="enter session description  here" value={this.state.Session_2_Description}
                                                                        onChange={this.handleInputChange} />
                                                                </Col>
                                                            </FormGroup>
                                                            <FormGroup row>
                                                                <Label for="session_date" sm={3}> <span className="Session_label">Session start time:</span></Label>
                                                                <Col sm={9}>
                                                                    <DatePicker
                                                                        selected={this.state.Session_2_startDate}
                                                                        onChange={this.session_date_change_handler_function_factory(2)}
                                                                        showTimeSelect
                                                                        timeFormat="HH:mm"
                                                                        timeIntervals={20}
                                                                        timeCaption="time"
                                                                        dateFormat="MMMM d, yyyy h:mm aa"
                                                                    />
                                                                </Col>
                                                            </FormGroup>
                                                        </CardBody>
                                                    </Card>
                                                </Col>

                                            </FormGroup>











                                            <FormGroup row>
                                                <Col sm={{ size: 9, offset: 3 }}>
                                                    <Button type="submit" color="success">
                                                        Submit
                                                     </Button>
                                                </Col>
                                            </FormGroup>


                                        </Form>
                                    </div>
                                </div>

                            </div>
                        </Col>

                        <Col className="t3 mx-1 my-1" xs="8" sm="7" md="5" lg="3" >
                            <div id="course_image_wrapper">
                                <h1 id="image_header">
                                    Creat A Course
                                </h1>
                                <div id="course_image">
                                    <img src={new_course_image} id="new_course_image" alt="new_course_image" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>



        );

    }

}

export default NewWorkSpace;