import React, { Component } from 'react'
import TableItem from './layout/TableItem'

export class LoansTable extends Component {
    render() {
        return (
            <table className="table">
                <tbody>
                    <tr>
                        <th> Name </th>
                        <th> Loan </th>
                        <th> Deposit </th>
                        <th> Term </th>
                    </tr>
                    { this.props.loans.map( loan => (
                        <TableItem key={loan.id} loan = {loan} />
                        )
                    ) }   
                </tbody>
            </table>
    )
    }
}

export default LoansTable
