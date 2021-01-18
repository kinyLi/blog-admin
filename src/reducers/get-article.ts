import { GET_ARTICLE_SUCCESS } from '../actions';

interface IState {
    list: ArticleItem[];
    isEnd: number;
}

interface ArticleItem {
    content: string;
    date: number;
    description: string;
    title: string;
    _id: string;
}
interface IPayload {
    data: string;
    isEnd?: number;
}

interface IAction {
    type: string;
    payload?: IPayload;
}

const initState: IState = {
    list: [],
    isEnd: 0,
};

const getArticle = (state: IState = initState, action: IAction): IState => {
    const { type, payload = { data: '' } } = action;
    const { data, isEnd } = payload;
    let update = {};
    switch (type) {
        case GET_ARTICLE_SUCCESS:
            update = {
                list: data,
                isEnd,
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

export default getArticle;
