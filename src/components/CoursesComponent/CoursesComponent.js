import React, { Component } from 'react';
import CourseCard from '../CourseCardComponent/CourseCardComponent';
import { Container, Row, Col } from "reactstrap";
import './CoursesComponent.css'

class Courses extends Component {

    courses = this.props.courses.map((course) => (
        <Col className="mx-1 my-1" xs="8" sm="7" md="5" lg="3" xl="3">
            <div className="card2">
                <CourseCard
                    course_id={course._id}
                    img={course.img}
                    title={course.title}
                    author={course.author}
                    start_date={course.start_date}
                    workspace_name={course.workspace_name}
                    price={course.price}
                    rating={course.rating}
                />
            </div>
        </Col>
    ))
    render() {
        console.log("props.courses", this.props.courses)
        return (
            <div id="all2">
                <Container id="title_container">
                    <h1 id="title2">
                        Explore boot camps.. Find your best oportuinty to learn
                    </h1>
                </Container>


                <Container >

                    <Row className='justify-content-center'>
                        {this.courses}
                    </Row>

                </Container>
            </div>

        );
    }
}

export default Courses;
