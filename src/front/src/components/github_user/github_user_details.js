import React from "react";

import { Col, Card, CardTitle } from 'react-materialize';

const GithubUserDetail = (props) => (
  <Col m={7} s={12}>
    <Card horizontal header={<CardTitle image={props.avatar}></CardTitle>}>
        <p>I am a very simple card. I am good at containing small bits of information</p>
      </Card>
  </Col>
);

export default GithubUserDetail;