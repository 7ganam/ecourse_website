import React, { Component } from 'react';
import WorkspaceCard from '../../WorkspaceCardComponent/WorkspaceCardComponent';

import { Container, Row, Col } from "reactstrap";
import './WorkspacesPageComponent.css'

class WorkspacesPage extends Component {


    workspaces = this.props.workspaces.map((workspace) => (
        <Col className="mx-1 my-1" xs="8" sm="7" md="5" lg="3" xl="3">
            <div className="WorkspacesPage_card2">
                <WorkspaceCard
                    workspace_id={workspace._id}
                    img={"workspaces_images/" + workspace.logo_image}
                    title={workspace.workspace_name}
                    price={workspace.session_price}
                    rating={workspace.rating}
                    address={workspace.address}
                />
            </div>
        </Col>
    ))
    render() {
        return (
            <div id="WorkspacesPage_all2">
                <Container id="WorkspacesPage_title_container">
                    <h1 id="WorkspacesPage_title2">
                        Explore Work spaces
                    </h1>
                </Container>


                <Container >

                    <Row className='justify-content-center'>
                        {this.workspaces}
                    </Row>

                </Container>
            </div>

        );
    }
}

export default WorkspacesPage;
