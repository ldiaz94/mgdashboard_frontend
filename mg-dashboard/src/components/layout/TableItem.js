import React, { Component } from 'react'

export class TableItem extends Component {
    render() {
        const {name, loan, deposit, term } = this.props.loan
        return (
            <tr>
                <td> { name }</td>
                <td> { loan }</td>
                <td> { deposit }</td>
                <td> { term }</td>
            </tr>
        )
    }
}

export default TableItem
