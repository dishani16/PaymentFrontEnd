import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/actions'

class AddUpiPayment extends Component {

    constructor(props) {
        super(props)
        this.upiId = React.createRef();
        this.password = React.createRef();

    }

    componentDidMount() {
        this.props.clearState()
    }
    componentDidUpdate() {
        let msg=this.props.returnedMessage
        let check = this.props.returnedMessage.split(' ')
        if (check[0] === 'Successfully') {
            setTimeout(() => {
                this.props.history.push('/')
            }, 2000)
            alert(msg)
        }
    }
    add() {

        let newUpiPayment = {
            upiId: this.upiId.current.value,
            password: this.password.current.value,

        }
        this.props.onAddUpiPayment(newUpiPayment)
    }

    render() {
        return (
            <div>

                <div className="card-body">
                   
                 <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="mb-3 add-upi-payment">
                        <input type="text" ref={this.upiId} className="form-control" style={{ borderColor: 'blue', alignSelf: "flex-start"}} id="upi id" placeholder="enter upi id" />
                    </div>

                    <div className="mb-3 add-upi-payment">
                        <input type="password" ref={this.password} className="form-control" style={{ borderColor: 'blue', alignSelf: "flex-start"}} id="password" placeholder="enter password" />
                    </div>

                    {/* <div className="mb-3 add-card-payment">
                        <input type="text" ref={this.department} className="form-control" id="employeedepartment" placeholder="Employee Department" />
                    </div> */}

                    {/* <div className="mb-3 add-employee">
                        <input type="number" ref={this.salary} className="form-control" id="employeesalary" placeholder="Employee Salary" />
                    </div> */}

                    <button type="button" onClick={this.add.bind(this)} className="btn btn-primary add-button">Pay</button>
                    {/* <button type="button" onClick={this.update.bind(this)} className="btn btn-primary add-button">Update</button> */}

                </div>
                </div>
                <div style={{height: "10px"}}></div>
                <img src="http://static.businessworld.in/article/article_extra_large_image/1589892172_FHqF6Z_UPI.jpg" alt="PlantingTree" data-rimg="" srcSet="http://static.businessworld.in/article/article_extra_large_image/1589892172_FHqF6Z_UPI.jpg 1x" 
                style={{ width: '1400px', height: '650px'}}></img>
                <div className={(this.props.returnedMessage === '') ? '' : "alert "} role="alert">
                    {this.props.returnedMessage}
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        returnedMessage: state.returnedMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddUpiPayment: (payment) => {
            dispatch(actionCreators.addUpi(payment))
        },
        clearState: () => {
            dispatch(actionCreators.clearState())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddUpiPayment))