import { GET_CACHE_IMAGE_LIST_SUCCESS } from '../actions';
import { Action, CacheImageListInit } from './reducer.interface';

const initState = {
    list: [],
};

const cacheImageList = (state = initState, action: Action<string[]>): CacheImageListInit => {
    const { type, payload = { data: [] } } = action;
    const { data } = payload;
    let update = {};
    switch (type) {
        case GET_CACHE_IMAGE_LIST_SUCCESS:
            update = {
                list: data,
            };
            break;
        default:
            break;
    }

    return Object.keys(update).length
        ? {
              ...state,
              ...update,
          }
        : state;
};

export default cacheImageList;
