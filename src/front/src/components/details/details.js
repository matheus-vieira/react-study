import React from "react";
import GithubUser from '../github_user/github_user';

import { ProgressBar } from 'react-materialize';

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            item: []
        };
    }

    componentDidMount() {
        const { username } = this.props.match.params;
        fetch("http://localhost:8000/api/users/" + username + "/details")
            .then(res => res.json())
            .then(
                (result) => {
                this.setState({
                    isLoaded: true,
                    item: result
                });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
                }
            );
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (<ProgressBar />);
        } else {
            return (<GithubUserDetails avatar={item.avatar_url} />);
        }
    }
}
  
 export default Details;