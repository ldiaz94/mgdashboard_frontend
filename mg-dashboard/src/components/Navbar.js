import React, { Component } from 'react'
import Navlink from './Navlink'

export class Navbar extends Component {
    render() {
        return (
            <div style={ navStyle }>
                { this.props.pages.map( 
                            page => ( <Navlink key={page.id} page={page}/>)
                ) }
            </div>
        );
    }
}

const navStyle = {
    background: '#f4f4f4',
    display: 'flex'
}

export default Navbar
