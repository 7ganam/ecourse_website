import React, { Component } from 'react';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';


import new_workspace_image from './new_workspace_image.png'
import { FormText } from 'reactstrap';
import './NewWorkSpaceComponent.css'
import upload_image_filler from './upload_image_filler2.png'
import $ from 'jquery';




import LocationPicker from '../../../shared/components/LocPickerComponent/LocPicker';

class Newworkspace extends Component {
    constructor(props) {
        super(props);

        this.state = {
            workspaceName: '',
            workspaceDescription: '',
            lng: '',
            lat: '',

            logo_image: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handle_location_submit = this.handle_location_submit.bind(this);
        this.handle_image_change = this.handle_image_change.bind(this);



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


    handle_image_change(event) {

        const input = event.target;
        if (input.files && input.files[0]) {
            // TODO: validate images 
            this.setState({ logo_image: input.files[0] })
            var reader = new FileReader();
            reader.onload = function (e) {

                $('#logo_image_display').attr('src', e.target.result);
                var image = document.createElement('img');
                image.src = e.target.result
                image.addEventListener('load', function () {
                    console.log(image.width + ' × ' + image.height);
                    let image_width = image.width;
                    let image_height = image.height;
                    // let image_parent_height = $('#logo_image_display').parent().height();
                    // let image_parent_width = $('#logo_image_display').parent().width();
                    // console.log(image_parent_height, image_parent_width)

                    if (image.height / image.width <= 1) {

                        $('#logo_image_display').each(function (_, img) {
                            var $this = $(this);
                            $this.css({
                                width: '100%',
                                height: 'auto',
                            });
                        })
                    }
                    else {
                        $('#logo_image_display').each(function (_, img) {
                            var $this = $(this);
                            $this.css({
                                height: '100%',
                                width: 'auto'
                            });
                        })

                    }
                });

            }

            reader.readAsDataURL(input.files[0]);
        }
    }


    handle_featured_image_change_factory(index_input) {
        const index = index_input; // closure variable different for every instance of the returned functions
        return (

            (event) => {

                const input = event.target;
                if (input.files && input.files[0]) {
                    // console.log(input.files[0])
                    var reader = new FileReader();
                    reader.onload = function (e) {

                        $('#featured_image_' + index).attr('src', e.target.result);
                        var image = document.createElement('img');
                        image.src = e.target.result
                        image.addEventListener('load', function () {
                            console.log(image.width + ' × ' + image.height);
                            let image_width = image.width;
                            let image_height = image.height;
                            if (image.height / image.width <= 1) {
                                $('#featured_image_' + index).each(function (_, img) {
                                    var $this = $(this);
                                    $this.css({
                                        width: '100%',
                                        height: 'auto',
                                    });
                                })
                            }
                            else {
                                $('#featured_image_' + index).each(function (_, img) {
                                    var $this = $(this);
                                    $this.css({
                                        height: '100%',
                                        width: 'auto'
                                    });
                                })
                            }
                        });
                    }
                    reader.readAsDataURL(input.files[0]);
                }
            }
        )
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
                                                <Label for="logo_image" sm={3}><span className="new_course_label">Upload your logo image:</span></Label>
                                                <Col sm={9} className="ml-auto">
                                                    <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '300px', }}>

                                                        <Input type="file" name="logo_image" id="logo_image"
                                                            // value={this.state.new_course_title}
                                                            onChange={this.handle_image_change}
                                                        />
                                                    </div>
                                                    <FormText color="muted">
                                                        choose image with suitable aspect ratio.
                                                    </FormText>
                                                    <div>
                                                        <div style={{ overflow: 'hidden', width: "250px", height: "250px", display: "flex", alignItems: "center", justifyContent: "center", borderStyle: 'dashed', borderColor: '#cac7c7', borderWidth: 'thin' }}>
                                                            <img id="logo_image_display" src={upload_image_filler} alt="your image" style={{ height: "100%", width: "auto" }} />
                                                        </div>
                                                    </div>
                                                </Col>
                                            </FormGroup>


                                            <FormGroup row>
                                                <Label for="featured_1" sm={3}><span className="new_course_label">Upload images:</span></Label>
                                                <Col sm={9} className="ml-auto">

                                                    <Row>


                                                        <Col id="f_image_1" md={6} lg={5} className="mt-2">
                                                            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100px', }}>

                                                                <Input type="file" name="featured_1" id="featured_1"
                                                                    // value={this.state.new_course_title}
                                                                    onChange={this.handle_featured_image_change_factory(1)}
                                                                />
                                                            </div>
                                                            <FormText color="muted">
                                                                choose image 1.
                                                       </FormText>
                                                            <div>
                                                                <div style={{ overflow: 'hidden', width: "150px", height: "100px", display: "flex", alignItems: "center", justifyContent: "center", borderStyle: 'dashed', borderColor: '#cac7c7', borderWidth: 'thin' }}>
                                                                    <img className="img-fluid" id="featured_image_1" src={upload_image_filler} alt="your image" style={{ height: "110%", width: "auto" }} />
                                                                </div>
                                                            </div>
                                                        </Col >

                                                        <Col id="f_image_2" md={6} lg={5} className="mt-2">
                                                            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100px', }}>

                                                                <Input type="file" name="featured_2" id="featured_2"
                                                                    // value={this.state.new_course_title}
                                                                    onChange={this.handle_featured_image_change_factory(2)}
                                                                />
                                                            </div>
                                                            <FormText color="muted">
                                                                choose image 2.
                                                       </FormText>
                                                            <div>
                                                                <div style={{ overflow: 'hidden', width: "150px", height: "100px", display: "flex", alignItems: "center", justifyContent: "center", borderStyle: 'dashed', borderColor: '#cac7c7', borderWidth: 'thin' }}>
                                                                    <img className="img-fluid" id="featured_image_2" src={upload_image_filler} alt="your image" style={{ height: "110%", width: "auto" }} />
                                                                </div>
                                                            </div>
                                                        </Col >

                                                        <Col id="f_image_3" md={6} lg={5} className="mt-2">
                                                            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100px', }}>

                                                                <Input type="file" name="featured_3" id="featured_3"
                                                                    // value={this.state.new_course_title}
                                                                    onChange={this.handle_featured_image_change_factory(3)}
                                                                />
                                                            </div>
                                                            <FormText color="muted">
                                                                choose image 3.
                                                       </FormText>
                                                            <div>
                                                                <div style={{ overflow: 'hidden', width: "150px", height: "100px", display: "flex", alignItems: "center", justifyContent: "center", borderStyle: 'dashed', borderColor: '#cac7c7', borderWidth: 'thin' }}>
                                                                    <img className="img-fluid" id="featured_image_3" src={upload_image_filler} alt="your image" style={{ height: "110%", width: "auto" }} />
                                                                </div>
                                                            </div>
                                                        </Col >

                                                        <Col id="f_image_4" md={6} lg={5} className="mt-2">
                                                            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100px', }}>

                                                                <Input type="file" name="featured_4" id="featured_4"
                                                                    // value={this.state.new_course_title}
                                                                    onChange={this.handle_featured_image_change_factory(4)}
                                                                />
                                                            </div>
                                                            <FormText color="muted">
                                                                choose image 4.
                                                       </FormText>
                                                            <div>
                                                                <div style={{ overflow: 'hidden', width: "150px", height: "100px", display: "flex", alignItems: "center", justifyContent: "center", borderStyle: 'dashed', borderColor: '#cac7c7', borderWidth: 'thin' }}>
                                                                    <img className="img-fluid" id="featured_image_4" src={upload_image_filler} alt="your image" style={{ height: "110%", width: "auto" }} />
                                                                </div>
                                                            </div>
                                                        </Col >





                                                    </Row>




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