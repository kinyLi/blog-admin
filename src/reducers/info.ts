import { GET_INFO_SUCCESS } from '../actions';

interface IState {
    url: string;
}

interface IPayload {
    data: string;
}

interface IAction {
    type: string;
    payload?: IPayload;
}

const initState: IState = {
    url: '',
};

const getInfo = (state: IState = initState, action: IAction): IState => {
    const { type, payload = { data: '' } } = action;
    const { data } = payload;
    let update = {};
    switch (type) {
        case GET_INFO_SUCCESS:
            update = {
                url: data,
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

export default getInfo;
