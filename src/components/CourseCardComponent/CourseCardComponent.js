import React from 'react';
// import "./styles.css";
import ReactStars from "react-rating-stars-component";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "./CourseCard.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const CourseCard = (props) => {

    const firstExample = {
        size: 20,
        value: props.rating,
        edit: false,
        activeColor: "#63C019",
        isHalf: true,

    };
    return (
        <div>
            <Card>

                <CardImg top objectFit="cover" src={props.img} alt="Card image cap" />
                <CardBody>
                    <CardTitle ><h4 className="card_title">{props.title}</h4></CardTitle>
                    {/* <CardSubtitle>Author:</CardSubtitle> */}
                    <ReactStars {...firstExample} />
                    <CardText>
                        <div className="card_text no_overflow">
                            <span className="card_text_main"> Author:</span>
                            <span className="card_text ">{props.author} </span>
                        </div>
                        <div>
                            <span className="card_text_main"> Date: </span>
                            <span >  {props.start_date}    </span>
                        </div>
                        <div>
                            <span className="card_text_main">   workspace:   </span>
                            <span >  {props.workspace_name}  </span>
                        </div>
                    </CardText>
                    <Link to={`/courses/${props.course_id}`} >
                        <Button color="success" >Register: <span className="card_text_main"> {props.price}$</span></Button>
                    </Link >
                </CardBody>
            </Card>
        </div >
    );
};

export default CourseCard;