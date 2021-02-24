import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/actions'

class AddCardPayment extends Component {

    constructor(props) {
        super(props)

        this.cvv = React.createRef();
        this.cardNo = React.createRef();

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

        let newCardPayment = {
            cardNo: this.cardNo.current.value,
            cvv: this.cvv.current.value
        }
        this.props.onAddCardPayment(newCardPayment)
    }

    render() {
        return (
            <div  className="card-body">

<div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="mb-3 add-card-payment">
                        <input type="text" ref={this.cardNo} className="form-control" style={{ borderColor: 'blue', alignSelf: "flex-start"}} id="card no" placeholder="enter card number" />
                    </div>

                    <div className="mb-3 add-card-payment">
                        <input type="text" ref={this.cvv} className="form-control" style={{borderColor: 'blue', alignSelf: "flex-start"}} className="form-control" id="cvv" placeholder="enter cvv" />
                    </div>

                    <button type="button" onClick={this.add.bind(this)} className="btn btn-primary add-button">Pay</button>

                </div>
                <div style={{height: "40px"}}></div>
    <img src="https://png.pngitem.com/pimgs/s/1-15855_visa-png-visa-card-logo-png-transparent-png.png" alt="card" data-rimg="" srcSet="https://png.pngitem.com/pimgs/s/1-15855_visa-png-visa-card-logo-png-transparent-png.png 1x" 
    style={{ width: '1000px', height: '350px'}}></img>

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
        onAddCardPayment: (Payment) => {
            dispatch(actionCreators.addCard(Payment))
        },
        clearState: () => {
            dispatch(actionCreators.clearState())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddCardPayment))