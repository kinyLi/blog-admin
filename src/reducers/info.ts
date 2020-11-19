import { GET_INFO_SUCCESS } from '../actions/infos';

interface IState {
    url: string;
}

interface IAction {
    type: string;
    data: string;
}

const initState: IState = {
    url: '',
};

const getInfo = (state: IState = initState, action: IAction): IState => {
    const { type, data } = action;
    let update = {};
    switch (type) {
        case GET_INFO_SUCCESS:
            console.log('success');
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
