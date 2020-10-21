import React, { Component } from 'react';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import { Collapse, Navbar, Nav, NavItem, NavLink, NavbarToggler, NavbarBrand } from 'reactstrap';
import { FormText } from 'reactstrap';

import new_workspace_image from './new_workspace_image.png'

import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import './NewWorkSpaceComponent.css'

import DatePicker from "react-datepicker";



import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import {
    Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';

import LocationPicker from '../../LocPickerComponent/LocPicker';

class Newworkspace extends Component {
    constructor(props) {
        super(props);

        this.state = {
            workspaceName: '',
            workspaceDescription: '',
            lng: '',
            lat: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handle_location_submit = this.handle_location_submit.bind(this);



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



    handle_location_submit(lat, lng) {
        this.setState({
            lat: lat,
            lng: lng,
        });

    }





    render() {



        return (
            <div id="new_workspace_all">
                <Container fluid  >
                    <Row className=''>

                        <Col className="t3 mx-1 my-1          image_image_image ml-lg-5" xs="12" sm="12" md="4" lg="4" xl="4">
                            <div id="workspace_image_wrapper">
                                <h1 id="image_header">
                                    Creat A workspace
                                </h1>
                                <div id="workspace_image">
                                    <img src={new_workspace_image} id="new_workspace_image" alt="new_workspace_image" />
                                </div>
                            </div>
                        </Col>

                        <Col className="t2 pt-lg-5 form_box justify-content-center my-1" xs="12" sm="12" md="7" lg="7" xl="7" >
                            <div id="new_workspace_form">
                                <div className="justify-content-center row row-content">
                                    <div className="col-12 col-lg-11 ml-auto ">
                                        <Form onSubmit={this.handleSubmit}>
                                            <FormGroup row>
                                                <Label for="workspaceName" sm={3}><span className="new_workspace_label">workspace Name:</span></Label>
                                                <Col sm={9} className="ml-auto">
                                                    <Input type="text" name="workspaceName" id="new_workspace_name" placeholder="enter your workspace title here"
                                                        value={this.state.workspaceName}
                                                        onChange={this.handleInputChange} />
                                                </Col>
                                            </FormGroup>


                                            <FormGroup row>
                                                <Label for="exampleText" sm={3}> <span className="new_workspace_label">workspace Description:</span></Label>
                                                <Col sm={9}>
                                                    <Input id="new_workspace_text_area" type="textarea" name="workspaceDescription" placeholder="enter your workspace description  here" value={this.state.workspaceDescription}
                                                        onChange={this.handleInputChange} />
                                                </Col>
                                            </FormGroup>



                                            <FormGroup row>
                                                <Label for="exampleText" sm={3}> <span className="new_workspace_label">Locatoin:</span></Label>
                                                <Col sm={9}>
                                                    <LocationPicker handle_submit={this.handle_location_submit} />
                                                </Col>
                                            </FormGroup>



                                            <FormGroup row>
                                                <Label for="exampleFile" sm={3}><span className="new_workspace_label">upload image:</span></Label>
                                                <Col sm={9}>
                                                    <Input type="file" name="file" id="exampleFile" />
                                                    <FormText color="muted">
                                                        This is some placeholder block-level help text for the above input.
                                                        It's a bit lighter and easily wraps to a new line.
                                                 </FormText>
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

            </div >



        );

    }

}

export default Newworkspace;