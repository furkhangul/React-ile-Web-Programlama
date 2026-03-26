import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class Header extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return (
      <Container>
        <Row xs="6" className="bg-primary text-white p-2">
            <Col><h3>{this.props.title}</h3></Col>
            <Col><p>{this.props.descript}</p></Col>
                
        </Row>
      </Container>
    );
  }
}
