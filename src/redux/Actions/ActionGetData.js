import axios from 'axios';

export const GET_DATA_BEGIN = "GET_DATA_BEGIN"
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS"
export const GET_DATA_FAILED = "GET_DATA_FAILED"

export const getDataBegin = () => {
    return{
        type: GET_DATA_BEGIN
    }
}

export const getDataSuccess = (result) => {
    return{
        type: GET_DATA_SUCCESS,
        result
    }
}

export const getDataFailed = (failed) => {
    return{
        type: GET_DATA_FAILED,
        failed
    }
}

export const getDataAPI = () => {
    return (dispatch) => {
        dispatch(getDataBegin())

        axios.get("jsonplaceholder.typicode.com/todos")
        .then(result => dispatch(getDataSuccess(result.data)))
        .catch(error => dispatch(getDataFailed(error.message)))
    }
}