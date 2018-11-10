import { api } from '../config';

export const LOAD_ARTICLE = 'LOAD_ARTICLE'
export const LOAD_ARTICLE_SUCCESS = 'LOAD_ARTICLE_SUCCESS'
export const LOAD_ARTICLE_FAILURE = 'LOAD_ARTICLE_FAILURE'

export const get_articles = (params) =>{
    return {
        type:LOAD_ARTICLE,
        payload:{
            request:{
                url:api.articles,
                params
            },
            options:{
                onSuccess:({dispatch, response})=>{
                    dispatch({type: LOAD_ARTICLE_SUCCESS, payload: response.data})
                },
                onError:({dispatch})=>{
                    dispatch({type: LOAD_ARTICLE_FAILURE})
                }
            }
        }
    }
}