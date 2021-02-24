import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import * as actionCreated from '../actions/actions'

class ViewPaymentStatus extends React.Component {

    componentDidMount() {
        this.props.onGetPayments()
    }

    render() {
        let paymentList = this.props.paymentList.map((Payment, index) => {
            return (
                <tr key={index}>
                    <th class="table-success">{Payment.id}</th>
                    <td>{Payment.status}</td>
                    <td class="table-warning">{Payment.mode}</td>
                
                </tr>
            )
        })

        return (
            <div className="emp-table-div">
               <h4 style={{backgroundColor: "rgb(143,255,204)", left:"25%", fontFamily:"Baskerville Old Face", fontSize:"40px", color:"green", textShadow:"2px 1px black"}}>{this.props.returnedMessage}</h4>
             
            <div className="container">
                <table className="table table-info payment-table">
                    <thead>
                        <tr>
                            <th class="p-3 mb-2 bg-success text-white" scope="col">Payment Id</th>
                            <th class="p-3 mb-2 bg-primary text-white" scope="col">Status</th>
                            <th class="p-3 mb-2 bg-warning text-white" scope="col">Payment Mode</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentList}
                    </tbody>
                </table>
                </div>

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        paymentList: state.paymentList,
        returnedMessage: state.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetPayments: () => {
            return dispatch(actionCreated.getAllStatus())
        },
        clearState: () => {
            return dispatch(actionCreated.clearState())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPaymentStatus)
