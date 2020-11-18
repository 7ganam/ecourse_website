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
import { baseUrl } from "../../../shared/baseURL"
import './CourseViewComponent.css'

function What_will_you_learn_view(props) {
    let concepts_array = props.what_will_learn;
    let first_half_concepts = concepts_array.slice(0, Math.ceil(concepts_array.length / 2));
    let second_half_concepts = concepts_array.slice(Math.ceil(concepts_array.length / 2), concepts_array.length);
    let first_half_views = first_half_concepts.map((concept_text, index) => (
        <p>
            <FontAwesomeIcon icon={faCheckCircle} className=" mr-2" style={{ fontSize: 15, color: '#82C80B', fontWeight: 'bolder' }} />
            {concept_text}
        </p>
    ))
    let second_half_views = second_half_concepts.map((concept_text, index) => (
        <p>
            <FontAwesomeIcon icon={faCheckCircle} className=" mr-2" style={{ fontSize: 15, color: '#82C80B', fontWeight: 'bolder' }} />
            {concept_text}
        </p>
    ))

    // return <h1>Hello</h1>;
    return (

        <Container className="" >
            <Row>
                <Col className="border-right">
                    {first_half_views}
                </Col>
                <Col className=" border-success ">
                    {second_half_views}
                </Col>

            </Row>
        </Container>




    );
}








class CourseView extends Component {
    constructor(props) {
        super(props);

        this.state = {

            Sessions: this.props.course.sessions // i need to keep the sessions in state because the closed opened of the cards is stored in it ... this is a bad design TODO: fix this issue later

        };




    }

    rating_stars_confs = {
        size: 30,
        value: this.props.course.rating,
        edit: false,
        activeColor: "#63C019",
        isHalf: true,

    };

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
                    <div className=" d-flex    flex-row  align-content-center align-items-center" id="header_content_alijfe">
                        <div className="d-inline-block ">

                            <span>Session {index + 1} </span>

                        </div>
                        <div className="d-inline-block flex-grow-1 ml-4 flex-fill font-weight-bolder">

                            <div>
                                {this.state.Sessions[index].Session_title}
                                        test
                                    </div>

                        </div>
                        <div className="d-inline-block ">

                            <Button color="success" onClick={this.handle_session_card_toggle_factory(index)} >
                                <FontAwesomeIcon icon={faChevronCircleDown} />
                            </Button>

                        </div>
                    </div>


                </CardHeader>

                <Collapse isOpen={this.state.Sessions[index].isOpen}>
                    <CardBody>
                        <div>
                            {this.state.Sessions[index].Session_startDate}
                        </div>
                        <div>
                            {this.state.Sessions[index].Session_Description}
                        </div>
                    </CardBody>
                </Collapse>
            </Card>
        ))


        console.log("course_veiw", this.props)

        return (
            <div id="CourseViewComponent_all">
                <Jumbotron className="jumb">
                    <Container className="jumb_container">
                        <Row id="row_1">
                            {/* <Col sm="12" md={{ size: 6, offset: 6 }} className="mr-auto">.col-sm-12 .col-md-6 .offset-md-3</Col> */}
                            <Col sm={{ size: 6, order: 1, offset: 0 }}>
                                <h1>
                                    {this.props.course.title}
                                </h1>
                                <h4>
                                    {this.props.course.course_slogan}
                                </h4>
                                <div id="rating_container">
                                    <span id="rating_number">{this.props.course.rating}</span>
                                    <span>
                                        <ReactStars {...this.rating_stars_confs} />
                                    </span>
                                </div>
                            </Col>

                        </Row>
                        <Row>
                            <div id="snippit_info" className="mt-3">
                                <div >
                                    <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-2" style={{ color: "grey" }} />

                                    instructor: <span className="mr-4"> {this.props.course.author}</span>
                                </div >

                                <div >
                                    <FontAwesomeIcon icon={faClock} className="mr-1" style={{ color: "grey" }} />
                                        Start date: <span> {this.props.course.start_date}</span>
                                </div>

                                <div>

                                </div>

                            </div>
                        </Row>
                    </Container>
                </Jumbotron>
                <Container id='floatin_container' className="">
                    <Row id="floatin_row" className=" ">
                        <Col md={{ size: 4, order: 1, offset: 0 }} className=" ml-auto p-0">
                            <div >

                                <Card>

                                    <CardImg top src={`${baseUrl}/${this.props.course.img}`} alt="Card image cap" style={{ height: '15rem', objectFit: 'cover' }} />
                                    <CardBody>
                                        <CardTitle>

                                            <span style={{ fontSize: 35, color: '#82C80B', fontWeight: 'bolder' }}>
                                                {this.props.course.price}
                                            </span >
                                            {/* <i class="fas fa-leaf" style={{ fontSize: 35, color: '#82C80B', fontWeight: 'bolder' }}></i> */}
                                            <FontAwesomeIcon icon={faLeaf} className="mr-1" style={{ fontSize: 35, color: '#82C80B', fontWeight: 'bolder' }} />
                                            <span style={{ fontSize: 20, color: 'grey', fontWeight: 'bold' }}>
                                                {' EGP'}
                                            </span>
                                        </CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button className="bg-success" style={{ fontWeight: 'bold', }}>REGISTER NOW</Button>
                                    </CardBody>
                                    <CardFooter>Footer</CardFooter>
                                </Card>



                            </div>

                        </Col>

                    </Row>
                </Container>

                <Container id="main_content_container" >
                    <Row id="row_1">
                        {/* <Col sm="12" md={{ size: 6, offset: 6 }} className="mr-auto">.col-sm-12 .col-md-6 .offset-md-3</Col> */}
                        <Col md={{ size: 8, order: 1, offset: 0 }}>
                            <Card>

                                <CardBody>
                                    <CardTitle className="card_title122">What will you learn </CardTitle>
                                    <div id="whatwilllearncontent">

                                        <What_will_you_learn_view what_will_learn={this.props.course.what_will_learn} />


                                    </div>

                                </CardBody>
                            </Card>




                        </Col>

                    </Row>

                    <Row id="row_2" className="mt-5">
                        <Col className="" md={{ size: 8, order: 1, offset: 0 }}>
                            <h2 className="px-3">
                                Coures description
                                        </h2>
                            <p className="px-3">
                                {this.props.course.course_description}
                            </p>
                        </Col>
                    </Row>

                </Container>



                <Container >
                    <Row>
                        <Col className="" md={{ size: 8, order: 1, offset: 0 }}>
                            {Sessions_views}
                        </Col>
                    </Row>
                </Container>

            </div>

        );
    }
}

export default CourseView;