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
import Auth from "../shared/pages/AuthPageComponent/AuthPageComponent"


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



// FOR TESTING -------------------------------------------------------
// import * as COURSES_DATA from '../../shared/courses_data.json';
import * as WORKSPACES_DATA from '../../shared/workspaces_data.json';

import { baseUrl } from "../../shared/baseURL"

import { AuthContext } from '../shared/context/auth-context';





class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: [],
            courses_are_loading: true,
            workspaces: WORKSPACES_DATA.default,
            workspaces_are_loading: true,
            isLoggedIn: false,

        };

        this.fetchCourses = this.fetchCourses.bind(this);
        this.fetchWorkspaces = this.fetchWorkspaces.bind(this);
        this.login = this.login.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);




    }

    login() {
        this.setState({ isLoggedIn: true });
    };
    logout() {
        this.setState({ isLoggedIn: false });
    };






    componentDidMount() {
        this.fetchCourses()
        this.fetchWorkspaces()

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

    fetchWorkspaces = () => {
        return fetch(baseUrl + 'workspaces')
            .then(response => response.json())
            .then(recieved_workspaces => {
                // console.log("coursesd", coursesd)
                this.setState({ workspaces: recieved_workspaces })
                this.setState({ workspaces_are_loading: false })
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
                    isLoading={this.state.workspaces_are_loading}

                // errMess={this.props.dishes.errMess}

                />
            );
        };

        return (
            <div>
                <AuthContext.Provider
                    value={{ isLoggedIn: this.state.isLoggedIn, login: this.login, logout: this.logout }}
                >
                    <Router>
                        <Header />
                        <Route exact path="/">
                            <Home courses={this.state.courses}
                                coursesAreLoading={this.state.courses_are_loading}
                                workspaces={this.state.workspaces}
                                workspacesAreLoading={this.state.workspaces_are_loading}
                            />
                        </Route>

                        <Route exact path="/workspaces">
                            <WorkspacesPage workspaces={this.state.workspaces} workspacesAreLoading={this.state.workspaces_are_loading} />
                        </Route>

                        <Route exact path="/courses">
                            <Coursespage courses={this.state.courses} coursesAreLoading={this.state.courses_are_loading} />
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

                        <Route path="/auth" component={Auth} />
                        {/* <MapContainer /> */}
                        <Footer />

                    </Router>
                </AuthContext.Provider>

            </div >
        );
    }
}

export default Main;