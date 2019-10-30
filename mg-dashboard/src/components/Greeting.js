import React, { Component } from 'react'

export class Greeting extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-5">
                    Welcome back, { this.props.user.name }!
                </h1>
            </div>
        )
    }
}

export default Greeting
