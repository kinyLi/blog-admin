import { Dispatch } from 'redux';
import CALL_API from 'fetch/action';

export const GET_ARTICLE = 'GET_ARTICLE';
export const GET_ARTICLE_SUCCESS = 'GET_ARTICLE_SUCCESS';
export const GET_ARTICLE_FAIL = 'GET_ARTICLE_FAIL';

interface GetArticleData {
    limit: number;
    page: number;
}

export function getArticle(getData: GetArticleData): (dispatch: Dispatch) => Promise<void> {
    return CALL_API({
        types: [GET_ARTICLE, GET_ARTICLE_SUCCESS, GET_ARTICLE_FAIL],
        options: {
            method: 'get',
            url: '/article/Get',
            params: getData,
        },
    });
}
