import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actions'

class SearchById extends Component {

    constructor(props) {
        super(props)
    
        this.id = React.createRef()
    }
    
    search() {
       this.props.onSearchById(this.id.current.value)
       
    }

    componentDidMount() {
        this.props.clearState()
    }

    render() {
        
        let payment = this.props.payments.map((Payment, index) => {
            return (
                <tr key={index}>
                    <th>{Payment.id}</th>
                    <td>{Payment.cardNo}</td>
                    <td>{Payment.cvv}</td>
                    <td>{Payment.upiId}</td>
                    <td>{Payment.password}</td>
                    <td>{Payment.status}</td>
                </tr>
            )
        })
        
        return (
            <div className="search-id">
                <div className="mb-3 input-search-id ">
                    <input type="text" ref={this.customerId} className="form-control" id="customerId" placeholder="Customer Id" />
                </div>

                <div>
                    <button className="btn btn-primary" onClick={this.search.bind(this)}>Search</button>
                </div>

                <hr />

                <div className="emp-table-div">

                    <table className="table table-info customer-table">
                        <thead>
                            <tr>
                                <th scope="col">Customer Id</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">email</th>
                                {/* <th>Salary</th> */}
                                
                            </tr>
                        </thead>
                        <tbody>
                            {payment}
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        payments: state.payments,
        returnedMessage: state.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchById: (id) => dispatch(actionCreators.getStatus(id)),
        clearState: () => dispatch(actionCreators.clearState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchById)