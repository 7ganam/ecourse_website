import React, { Component } from 'react';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import { Collapse, Navbar, Nav, NavItem, NavLink, NavbarToggler, NavbarBrand } from 'reactstrap';
import { CardImg,       CardSubtitle,   } from 'reactstrap';
// import { Card, Button, CardHeader, CardFooter, CardBody,  CardTitle, CardText } from 'reactstrap';
import ReactStars from "react-rating-stars-component";

import './CourseViewComponent.css'

import {
    Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';

import { Jumbotron } from 'reactstrap';




import hero_image from './gpc-jumbotron-bg.jpg'

class Newworkspace extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            price: '213',
            what_will_you_learn: ['test1' , 'test2', 'test3', 'test4'],
            Sessions: [
                {
                Session_title: '',
                Session_Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                Session_startDate: '',

            },
            {
                Session_title: '',
                Session_Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                Session_startDate: '15/5/2022',
                isOpen: false,
               
            }
        ],
            
        };




    }

     firstExample = {
        size: 30,
        value: 3.5,
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
                            <div  className="d-inline-block ">

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
                                        <i class="fas fa-chevron-circle-down"></i>
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


        

        return (
            <div id="CourseViewComponent_all">
                <Jumbotron className="jumb">
                    <Container className="jumb_container" >
                        <Row id="row_1">
                            {/* <Col sm="12" md={{ size: 6, offset: 6 }} className="mr-auto">.col-sm-12 .col-md-6 .offset-md-3</Col> */}
                            <Col sm={{ size: 6, order: 1, offset: 0 }}>
                                <h1>
                                    Course title 
                                    
                                </h1>
                                <h4>
                                    course slogan ... something emothional and energitic remember to request it in the course form
                                    
                                </h4>
                                <div id="rating_container">
                                    <span id="rating_number">{3.5}</span>
                                    <span>
                                    <ReactStars {...this.firstExample} />
                                    </span>
                                </div>
                                
                                
                                

                            </Col>

                        </Row>
                        <Row>

                            <div id="snippit_info">
                                <div >
                                    <i class="fas fa-chalkboard-teacher mr-1"></i>
                                    instructor: <span className="mr-4"> instructor name</span>
                                </div >

                                    <div >
                                        <i class="fas fa-clock mr-1"></i>
                                        Start date: <span> 15/5/2022</span>
                                </div>  

                                 <div>

                                </div>

                            </div>
                        </Row>
                    </Container>
                </Jumbotron>
                <Container  id='floatin_container' className="">
                    <Row id="floatin_row" className=" ">
                            <Col md={{ size: 4, order: 1, offset: 0 }} className=" ml-auto p-0">
                                <div >
                                
                                    <Card>
                                        
                                        <CardImg top  src="logo1.png" alt="Card image cap"  style={{    height: '15rem',  objectFit: 'cover'}}/>
                                        <CardBody>
                                            <CardTitle>
                                               
                                                <span  style={{fontSize: 35, color:'#82C80B' , fontWeight: 'bolder'}}>
                                                    {this.state.price }
                                                </span >
                                                <i class="fas fa-leaf"  style={{fontSize: 35, color:'#82C80B' , fontWeight: 'bolder'}}></i>
                                                <span style={{fontSize: 20, color:'grey' , fontWeight: 'bold'}}>
                                                    {' EGP'}
                                                </span>
                                            </CardTitle>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <Button className="bg-success" style={{fontWeight:'bold',}}>REGISTER NOW</Button>
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
                                    <Container className="" >
                                        <Row>
                                            <Col className="border-right">
                                                
                                                <p> 
                                                     <i class="fas fa-check-circle mr-2" style={{fontSize: 15, color:'#82C80B' , fontWeight: 'bolder'}}></i>
                                                    test2
                                                </p>
                                                <p> 
                                                 <i class="fas fa-check-circle mr-2" style={{fontSize: 15, color:'#82C80B' , fontWeight: 'bolder'}}></i>
                                                    test1
                                                </p>
                                                <p> 
                                                 <i class="fas fa-check-circle mr-2" style={{fontSize: 15, color:'#82C80B' , fontWeight: 'bolder'}}></i>
                                                    test1
                                                </p>
                                                <p> 
                                                 <i class="fas fa-check-circle mr-2" style={{fontSize: 15, color:'#82C80B' , fontWeight: 'bolder'}}></i>
                                                    test1
                                                </p>
                                            </Col>
                                            <Col className=" border-success ">
                                                
                                            <p> 
                                                     <i class="fas fa-check-circle mr-2" style={{fontSize: 15, color:'#82C80B' , fontWeight: 'bolder'}}></i>
                                                    test2
                                                </p>
                                                <p> 
                                                 <i class="fas fa-check-circle mr-2" style={{fontSize: 15, color:'#82C80B' , fontWeight: 'bolder'}}></i>
                                                    test1
                                                </p>

                                            </Col>
                                        </Row>
                                    </Container>

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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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

export default Newworkspace;