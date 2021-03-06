import React, { Component } from 'react';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import { Collapse, Navbar, Nav, NavItem, NavLink, NavbarToggler, NavbarBrand } from 'reactstrap';
import { FormText } from 'reactstrap';

import new_course_image from './new_course_image.png'

import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import './NewCourseComponent.css'

import DatePicker from "react-datepicker";



import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import {
    Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';
class NewCourse extends Component {
    constructor(props) {
        super(props);

        this.state = {
            CourseName: '',
            CourseDescription: '',
            startDate: new Date(),
            endDate: new Date(),
            number_of_sessions: 1,
            // Session_1_startDate: new Date(),
            Sessions: [{
                Session_title: '',
                Session_Description: '',
                Session_startDate: '',
                isOpen: false,
            },

            ]
        };





        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEndChange = this.session_date_change_handler_function_factory.bind(this);
        this.handle_session_InputChange_factory = this.handle_session_InputChange_factory.bind(this);
        this.handle_number_of_sessions_Change = this.handle_number_of_sessions_Change.bind(this);



    }




    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    handle_number_of_sessions_Change(event) {
        //change the number
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        // if the number increase add empty session objects to the State.Sessions
        // if the number decreased slice the State.Sessions to the new number of state 


        let new_number_of_sessions = target.type === 'checkbox' ? target.checked : target.value;
        let old_number_of_sessions = this.state.number_of_sessions;


        if (new_number_of_sessions > old_number_of_sessions) {
            let difference_in_session_numbers = new_number_of_sessions - old_number_of_sessions;
            let new_empty_Sessions = [];
            let i;
            for (i = 0; i < difference_in_session_numbers; i++) {
                new_empty_Sessions.push(
                    {
                        Session_title: '',
                        Session_Description: '',
                        Session_startDate: '',
                        isOpen: false,
                    }
                )
            }
            // 1. Make a shallow copy of the Sessions
            let Sessions = [...this.state.Sessions];
            let New_Sessions = Sessions.concat(new_empty_Sessions);
            this.setState({
                Sessions: New_Sessions
            });
        }
        else if (new_number_of_sessions < old_number_of_sessions) {
            let Sessions = [...this.state.Sessions];
            let New_Sessions = Sessions.slice(0, new_number_of_sessions);
            this.setState({
                Sessions: New_Sessions
            });
        }




    }



    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
        console.log(this.state.startDate)
        console.log(this.state.endDate)
    }
    session_date_change_handler_function_factory(in_session_index) {
        const session__index = in_session_index; // closure variable different for every instance of the returned functions
        return (
            (date) => {
                // 1. Make a shallow copy of the Sessions
                let Sessions = [...this.state.Sessions];
                // 2. Make a shallow copy of the Session you want to mutate
                let Session = { ...Sessions[session__index] };
                // 3. Replace the property you're intested in
                Session.Session_startDate = date;
                // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
                Sessions[session__index] = Session;
                // 5. Set the state to our new copy
                this.setState({ Sessions });

            }
        )
    }

    handle_session_InputChange_factory(in_session_index) {
        const session__index = in_session_index; // closure variable different for every instance of the returned functions
        return (
            (event) => {

                const target = event.target;
                const value = target.type === 'checkbox' ? target.checked : target.value;
                const name = target.name;

                // this.setState({
                //     [name]: value
                // });

                // 1. Make a shallow copy of the Sessions
                let Sessions = [...this.state.Sessions];
                // 2. Make a shallow copy of the Session you want to mutate
                let Session = { ...Sessions[session__index] };
                // 3. Replace the property you're intested in
                Session[name] = value;
                // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
                Sessions[session__index] = Session;
                // 5. Set the state to our new copy
                this.setState({ Sessions });

            }
        )


    }


    handle_session_card_toggle_factory(in_session_index) {
        const session__index = in_session_index; // closure variable different for every instance of the returned functions
        return (
            () => {

                // 1. Make a shallow copy of the Sessions
                let Sessions = [...this.state.Sessions];
                // 2. Make a shallow copy of the Session you want to mutate
                let Session = { ...Sessions[session__index] };
                // 3. Replace the property you're intested in
                Session.isOpen = !Session.isOpen;
                // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
                Sessions[session__index] = Session;
                // 5. Set the state to our new copy
                this.setState({ Sessions });

            }
        )


    }





    render() {

        let Sessions_views = this.state.Sessions.map((session, index) => (


            <Card >
                <CardHeader style={this.card_head_style} className="session_card_head">
                    <Container fluid>
                        <Row className="session_header_row">
                            <Col xs="12" sm="12" md="3" lg="3" xl="3" className="px-0 session_title">
                                <div>Session {index + 1} </div>

                            </Col>
                            <Col xs="11" sm="11" md="7" lg="7" xl="7" className="pl-0 pr-2  ">
                                <Input type="text" name={"Session_title"} id={"Session_" + index + "_title"} placeholder="enter session title here"
                                    value={this.state.Sessions[index].Session_title}
                                    onChange={this.handle_session_InputChange_factory(index)} />
                            </Col>
                            <Col xs="1" sm="1" md="1" lg="1" xl="1" className="ml-lg-3 px-0  ">
                                <Button color="success" onClick={this.handle_session_card_toggle_factory(index)} >
                                    <i class="fas fa-chevron-circle-down"></i>
                                </Button>
                            </Col>
                        </Row>
                    </Container>




                </CardHeader>

                <Collapse isOpen={this.state.Sessions[index].isOpen}>
                    <CardBody>


                        <FormGroup row>
                            <Label for="Session_Description" sm={3}> <span className="Session_label">Session Description:</span></Label>
                            <Col sm={9}>
                                <Input id="Session_Description_text_area" type="textarea" name="Session_Description" placeholder="enter session description  here"
                                    value={this.state.Sessions[index].Session_Description}
                                    onChange={this.handle_session_InputChange_factory(index)} />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="session_date" sm={3}> <span className="Session_label">Session start time:</span></Label>
                            <Col sm={9}>
                                <DatePicker
                                    selected={this.state.Sessions[index].Session_startDate}
                                    onChange={this.session_date_change_handler_function_factory(index)}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={20}
                                    timeCaption="time"
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                />
                            </Col>
                        </FormGroup>


                    </CardBody>
                </Collapse>
            </Card>

        ))







        return (
            <div id="new_course_all">
                <Container fluid  >
                    <Row className=''>

                        <Col className="t3 mx-1 my-1          image_image_image ml-lg-5" xs="12" sm="12" md="4" lg="4" xl="4">
                            <div id="course_image_wrapper">
                                <h1 id="image_header">
                                    Creat A Course
                                </h1>
                                <div id="course_image">
                                    <img src={new_course_image} id="new_course_image" alt="new_course_image" />
                                </div>
                            </div>
                        </Col>

                        <Col className="t2 pt-lg-5 form_box justify-content-center my-1" xs="12" sm="12" md="7" lg="7" xl="7" >
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
                                                        onChange={this.handle_number_of_sessions_Change} />
                                                </Col>
                                            </FormGroup>





                                            <FormGroup row>

                                                <Label for="exampleText" sm={3}> <span className="new_course_label">Sessions:</span></Label>
                                                <Col sm={9}>
                                                    {Sessions_views}
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


                    </Row>

                </Container>

            </div>



        );

    }

}

export default NewCourse;