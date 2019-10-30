import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navlink extends Component {
    render() {
        
            if (this.props.page.type === "login"){
                return (
                    <a href="http://localhost:8000/admin" style= { loginStyle }> { this.props.page.title }</a>)
            } else if (this.props.page.type === "normal") {
                return (
                    <Link to= { this.props.page.url } style= { linkStyle }> { this.props.page.title }</Link>)
            }
    }
}

const linkStyle = {
    padding: '10px'
}

const loginStyle = {
    padding: '10px',
    marginRight: '10px',
    marginLeft: 'auto'
}

export default Navlink
