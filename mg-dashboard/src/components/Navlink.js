import React, { Component } from 'react'

export class Navlink extends Component {
    render() {
        
            if (this.props.page.type === "login"){
                return (
                    <a href="#" style= { loginStyle }> { this.props.page.title }</a>)
            } else if (this.props.page.type === "normal") {
                return (
                    <a href="#" style= { linkStyle }> { this.props.page.title }</a>)
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
