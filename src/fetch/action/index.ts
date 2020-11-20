import { Dispatch } from 'redux';
import $axios from '../axios';
import CallApi from './index.interface';

/**
 * @types 传输action行为, 顺序为0 = 发起, 1 = 响应成功, 2 = 响应失败
 * @options axios官方参数
 */
function CALL_API({ types, options }: CallApi) {
    return (dispatch: Dispatch): Promise<void> => {
        dispatch({ type: types[0] });
        return $axios(options)
            .then((res) => {
                dispatch({ type: types[1], payload: res });
            })
            .catch((err) => {
                console.log(err);
                dispatch({ type: types[2] });
            });
    };
}

export default CALL_API;
