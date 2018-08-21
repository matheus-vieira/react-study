import React from "react";
import { Link } from 'react-router-dom';

import { Chip } from 'react-materialize';

const GithubUser = (props) => (
  <Link to={{pathname: "/details/" + props.login }}>
    <Chip><img src={props.avatar} alt='Avatar img' />{props.login}</Chip>
  </Link>
);

export default GithubUser;


