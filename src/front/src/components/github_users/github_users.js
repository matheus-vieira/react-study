import React from "react";
import GithubUser from '../github_user/github_user';

import { ProgressBar } from 'react-materialize';

class GithubUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/users")
            .then(res => res.json())
            .then(
                (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
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
            return (items.map(item => (<GithubUser login={item.login} avatar={item.avatar} />)));
        }
    }
}
  
 export default GithubUsers;