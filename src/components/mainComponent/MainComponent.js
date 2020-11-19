import React, { Component } from 'react';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import { Collapse, Navbar, Nav, NavItem, NavLink, NavbarToggler, NavbarBrand } from 'reactstrap';
import Header from '../HeaderComponent/HeaderComponent';
import Home from '../pages/HomeComponent/HomeComponent';
import NewCourse from '../pages/NewCourseComponent/NewCourseComponent';
import NewWorkSpace from '../pages/NewWorkSpaceComponent/NewWorkSpaceComponent';
import CourseView from '../pages/CourseViewComponent/CourseViewComponent';
import WorkSpaceView from '../pages/WorkSpaceViewComponent/WorkSpaceViewComponent';
import Footer from '../FooterComponent'
import Coursespage from '../pages/CoursesPageComponent/CoursesPageComponent';
import WorkspacesPage from '../pages/WorkspacesPageComponent/WorkspacesPageComponent';


import CourseCard from '../CoursesComponent/CoursesComponent';
import WorkspaceCard from '../WorkspaceCardComponent/WorkspaceCardComponent';


import MapContainer from "../WsViewMapContainer/WsViewMapContainer"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import * as COURSES_DATA from '../../shared/courses_data.json';
import * as WORKSPACES_DATA from '../../shared/workspaces_data.json';








class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: COURSES_DATA.default,
            workspaces: WORKSPACES_DATA.default
        };

        // this.course_with_id = this.course_with_id.bind(this);
    }

    // course_with_id(props) {
    //     return (<CourseView
    //         course={this.state.courses.filter((course) => course._id === parseInt(props.match.params.course_id, 10))[0]}
    // isLoading={this.props.dishes.isLoading}
    // errMess={this.props.dishes.errMess}
    // comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.course_id, 10))}
    // commentsErrMess={this.props.comments.errMess}
    // addComment={this.props.addComment}
    // postComment={this.props.postComment}
    //     />)

    // }

    render() {

        console.log(this.state.courses)




        const course_with_id = ({ match }) => {
            return (
                <CourseView course={this.state.courses.filter((course) => course._id === match.params.course_id)[0]}
                // isLoading={this.props.dishes.isLoading}
                // errMess={this.props.dishes.errMess}
                // comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.course_id, 10))}
                // commentsErrMess={this.props.comments.errMess}
                // addComment={this.props.addComment}
                // postComment={this.props.postComment}
                />
            );
        };
        const workspace_with_id = ({ match }) => {
            return (
                <WorkSpaceView workspace={this.state.workspaces.filter((workspace) => workspace._id === match.params.workspace_id)[0]}
                // isLoading={this.props.dishes.isLoading}
                // errMess={this.props.dishes.errMess}
                // comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.course_id, 10))}
                // commentsErrMess={this.props.comments.errMess}
                // addComment={this.props.addComment}
                // postComment={this.props.postComment}
                />
            );
        };

        return (
            <div>
                <Router>
                    <Header />
                    <Route exact path="/">
                        <Home courses={this.state.courses} workspaces={this.state.workspaces} />
                    </Route>

                    <Route exact path="/workspaces">
                        <WorkspacesPage workspaces={this.state.workspaces} />
                    </Route>

                    <Route exact path="/courses">
                        <Coursespage courses={this.state.courses} />
                    </Route>

                    <Route path="/newcourse">
                        <NewCourse />
                    </Route>

                    <Route path="/newworkspace">
                        <NewWorkSpace />
                    </Route>

                    <Route path="/courseview">
                        <CourseView />
                    </Route>
                    <Route path="/workspaceview">
                        <WorkSpaceView workspace={this.state.workspaces[0]} />
                    </Route>

                    <Route path="/courses/:course_id" component={course_with_id} />

                    <Route path="/workspaces/:workspace_id" component={workspace_with_id} />


                    {/* <MapContainer /> */}
                    <Footer />

                </Router>
            </div >
        );
    }
}

export default Main;