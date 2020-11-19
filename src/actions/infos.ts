import axios from 'axios';
import { Dispatch } from 'redux';

export const GET_INFO = 'GET_INFO';
export const GET_INFO_SUCCESS = 'GET_INFO_SUCCESS';
export const GET_INFO_FAIL = 'GET_INFO_FAIL';

interface IStore {
    data: string;
    type: string;
}

function fetchInfo() {
    return {
        types: [GET_INFO, GET_INFO_SUCCESS, GET_INFO_FAIL],
        url: 'http://207.148.115.114:5000/Setting/setting',
    };
}

// 理解并封装改写 action axios
export function getInfo() {
    const actions = fetchInfo();
    return (dispatch: Dispatch) => {
        dispatch({ type: actions.types[0] });
        return axios
            .get(actions.url)
            .then((data) => dispatch({ type: actions.types[1], data: data.data }))
            .catch((err) => dispatch({ type: actions.types[2], data: err }));
    };
}
