import { Dispatch } from 'redux';
import CALL_API from 'fetch/action';

export const SET_ARTICLE = 'SET_ARTICLE';
export const SET_ARTICLE_SUCCESS = 'SET_ARTICLE_SUCCESS';
export const SET_ARTICLE_FAIL = 'SET_ARTICLE_FAIL';

interface SetArticleData {
    title: string;
    content: string;
    description?: string;
    cover: string;
}

export function setArticle(setData: SetArticleData): (dispatch: Dispatch) => Promise<void> {
    return CALL_API({
        types: [SET_ARTICLE, SET_ARTICLE_SUCCESS, SET_ARTICLE_FAIL],
        options: {
            method: 'post',
            url: '/article/set',
            data: setData,
        },
    });
}
