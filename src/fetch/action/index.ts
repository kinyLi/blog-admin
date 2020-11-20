import { Dispatch } from 'redux';
import $axios from '../axios';
import CallApi from './index.interface';

/**
 * 二次封装action,使用更为合理
 */
function CALL_API({ types, path, method }: CallApi) {
    return (dispatch: Dispatch) => {
        dispatch({ type: types[0] });
        return $axios(path)
            .then((res) => {
                dispatch({ type: types[1], payload: res });
            })
            .catch((err) => {
                dispatch({ type: types[2] });
            });
    };
}

export default CALL_API;
