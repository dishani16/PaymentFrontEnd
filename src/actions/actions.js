import axios from 'axios'

export const ADD_CARD_PAYMENT = 'ADD_CARD_PAYMENT'
export const ADD_UPI_PAYMENT = 'ADD_UPI_PAYMENT'
export const GET_ALL_STATUS = 'GET_ALL_STATUS'
export const GET_STAUS_BY_ID = 'GET_STAUS_BY_ID'
export const CLEAR_STATE = 'CLEAR_STATE'
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'

const BASE_URL = 'http://localhost:9060/api/'

const getAllStatusAction = (data) => {
    return {
        type: GET_ALL_STATUS,
        data
    }
}

export const getAllStatus = () => {
    return (dispatch) => {
        axios.get(BASE_URL)
            .then((response) => {
                dispatch(getAllStatusAction(response.data))
            })
    }
}

const addCardAction = (data) => {
    return {
        type: ADD_CARD_PAYMENT,
        data
    }
}

export const addCard = (newCardPayment) => {
    return (dispatch) => {
        axios.post(BASE_URL, newCardPayment)
            .then((response) => {
                dispatch(addCardAction(response.data))
            })
    }
}
const addUpiAction = (data) => {
    return {
        type: ADD_UPI_PAYMENT,
        data
    }
}

export const addUpi = (newUpiPayment) => {
    return (dispatch) => {
        let URL = `http://localhost:9060/api/upi/`
        axios.post(URL, newUpiPayment)
            .then((response) => {
                dispatch(addUpiAction(response.data))
            })
    }
}

//search by names action
const getStatusAction = (data) => {
    return {
        type: GET_STAUS_BY_ID,
        data
    }
}

//search by id function
export const getStatus = (id) => {
    return (dispatch) => {
        let URL = `http://localhost:9060/api/searchById?id=${id}`
        axios.get(URL)
            .then((response) => {
                dispatch(getStatusAction(response.data))
            })
    }
}

//action to clear state
const clearStateAction = (data) => {
    return {
        type: CLEAR_STATE,
        data
    }
}

//clear state function
export const clearState = () => {
    return (dispatch) => {
        dispatch(clearStateAction())
    }
}