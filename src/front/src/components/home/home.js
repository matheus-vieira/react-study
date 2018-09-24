import React from "react";
import { Row, Col, Card } from 'react-materialize';
import UserProfile from '../user_profile/user_profile'

const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">About</h5>
        <Card>
          <div>
            <p><b>ReactJS</b></p>
            <p>Learning ReactJS framework</p>
          </div>
        </Card>
        {/* <h5 className="subtitle">Experiences</h5> */}
        {/* <Experience />
        <Experience /> */}
    </Col>
  </Row>
);

export default Home;