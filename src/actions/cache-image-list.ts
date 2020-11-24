import { Dispatch } from 'redux';
import CALL_API from 'fetch/action';

export const GET_CACHE_IMAGE_LIST = 'GET_CACHE_IMAGE_LIST';
export const GET_CACHE_IMAGE_LIST_SUCCESS = 'GET_CACHE_IMAGE_LIST_SUCCESS';
export const GET_CACHE_IMAGE_LIST_FAIL = 'GET_CACHE_IMAGE_LIST_FAIL';

export function getCacheImageList(username: string): (dispatch: Dispatch) => Promise<void> {
    return CALL_API({
        types: [GET_CACHE_IMAGE_LIST, GET_CACHE_IMAGE_LIST_SUCCESS, GET_CACHE_IMAGE_LIST_FAIL],
        options: {
            method: 'get',
            url: '/life/getCache',
            params: {
                username,
            },
        },
    });
}
