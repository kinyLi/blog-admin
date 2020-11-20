import { Dispatch } from 'redux';
import CALL_API from '../fetch/action';

export const GET_INFO = 'GET_INFO';
export const GET_INFO_SUCCESS = 'GET_INFO_SUCCESS';
export const GET_INFO_FAIL = 'GET_INFO_FAIL';

// 理解并封装改写 action axios
export function getInfo(): (dispatch: Dispatch) => Promise<void> {
    return CALL_API({
        types: [GET_INFO, GET_INFO_SUCCESS, GET_INFO_FAIL],
        options: {
            method: 'get',
            url: '/Setting/setting',
        },
    });
}
