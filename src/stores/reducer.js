import * as actionCreators from '../actions/actions'

const initialState = {
    returnedMessage: 'empty msg - bow bow',
    paymentList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionCreators.GET_ALL_STATUS:
            let listOfPayments = action.data
            console.log('List of Payment Status')
            console.log(listOfPayments)
            return {
                returnedMessage: 'recieved all payment details !! ching!',
                paymentList: listOfPayments
            }

        case actionCreators.ADD_CARD_PAYMENT:
            let messageAfterCardAddition = action.data.message
            let listAfterCardAddition = action.data.payments
            console.log('Addition of card payments')
            console.log(listAfterCardAddition)
            console.log(messageAfterCardAddition)
            return {
                returnedMessage: messageAfterCardAddition,
                paymentList: listAfterCardAddition
            }
            case actionCreators.ADD_UPI_PAYMENT:
                let messageAfterUpiAddition = action.data.message
                let listAfterUpiAddition = action.data.payments
                console.log('Addition of upi payments')
                console.log(listAfterUpiAddition)
                console.log(messageAfterUpiAddition)
                return {
                    returnedMessage: messageAfterUpiAddition,
                    paymentList: listAfterUpiAddition
                }
       
                case actionCreators.GET_STAUS_BY_ID:
                    let listOfStatusById = action.data.payments
                    console.log('status by id')
                    console.log(listOfStatusById)
                    return {
                        paymentList: listOfStatusById
                    } 
        case actionCreators.CLEAR_STATE:
            return {
                returnedMessage: '',
                paymentList: []
            }

        default:
            return state
    }
}

export default reducer;