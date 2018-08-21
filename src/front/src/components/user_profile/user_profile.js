import React from "react";
import { Row, Col, Card } from 'react-materialize';

const UserProfile = () => (
  <Card>
      <Row>
        <Col s={8} m={8} offset="s2 m2">
          <img src="https://matheus-vieira.github.io/images/profile.png" className="circle responsive-img" alt="My Avatar" />
        </Col>
      </Row>
      <Row className="center-align">
        <h5>Hello</h5>
      </Row>
      <Row className="center-align">
        <p className="grey darken-2 white-text">Full stack Developer</p>
      </Row>
  </Card>
);

export default UserProfile;