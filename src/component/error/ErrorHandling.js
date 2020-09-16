import React, { Component } from 'react'
import axios from 'axios'

class ErrorHandling extends Component {
    constructor(props){
        super(props);

        this.state ={
            userID: null,
            errorMessage: null
        };
    }

    componentDidMount() {
        axios.post(`https://api.github.com/users`)
        .then(response => this.setState({ userID: response.data.id}))
        .catch(error => {
            this.setState({errorMessage: error.message});
            console.error('Something is wrong!', error)
        })
    }
    render() {
        const { errorMessage } = this.state;
        return (
            <div className="error-body">
                Error: {errorMessage}
            </div>
        )
    }
}

export default ErrorHandling