import React, { Component } from 'react';

import Header from '../shared/components/HeaderComponent/HeaderComponent';
import Home from '../shared/pages/HomeComponent/HomeComponent';
import NewCourse from '../course/pages/NewCourseComponent/NewCourseComponent';
import NewWorkSpace from '../workspace/pages/NewWorkSpaceComponent/NewWorkSpaceComponent';
import CourseView from '../course/pages/CourseViewComponent/CourseViewComponent';
import WorkSpaceView from '../workspace/pages/WorkSpaceViewComponent/WorkSpaceViewComponent';
import Footer from '../shared/components/FooterComponent'
import Coursespage from '../course/pages/CoursesPageComponent/CoursesPageComponent';
import WorkspacesPage from '../workspace/pages/WorkspacesPageComponent/WorkspacesPageComponent';



import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



// FOR TESTING -------------------------------------------------------
// import * as COURSES_DATA from '../../shared/courses_data.json';
import * as WORKSPACES_DATA from '../../shared/workspaces_data.json';

import { baseUrl } from "../../shared/baseURL"






class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: "",
            courses_are_loading: true,
            workspaces: WORKSPACES_DATA.default,
            workspaces_are_loadin: true,
        };

        this.fetchCourses = this.fetchCourses.bind(this);
    }



    componentDidMount() {
        this.fetchCourses()
    }



    fetchCourses = () => {
        return fetch(baseUrl + 'courses')
            .then(response => response.json())
            .then(recieved_courses => {
                // console.log("coursesd", coursesd)
                this.setState({ courses: recieved_courses })
                this.setState({ courses_are_loading: false })
            });
        //TODO:: error handling 
    }


    render() {

        const course_with_id = ({ match }) => {
            return (
                <CourseView
                    course={this.state.courses.filter((course) => course._id === match.params.course_id)[0]}
                    isLoading={this.state.courses_are_loading}  // every component that depends on data fetched should be notified if the data arrived or not so id dosen't render undefined data

                // errMess={this.props.dishes.errMess}
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
                        <Home courses={this.state.courses} isLoading={this.state.courses_are_loading} workspaces={this.state.workspaces} />
                    </Route>

                    <Route exact path="/workspaces">
                        <WorkspacesPage workspaces={this.state.workspaces} />
                    </Route>

                    <Route exact path="/courses">
                        <Coursespage courses={this.state.courses} isLoading={this.state.courses_are_loading} />
                    </Route>

                    <Route path="/newcourse">
                        <NewCourse workspaces={this.state.workspaces} />
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