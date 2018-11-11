import { api } from '../config';

export const LOAD_ARTICLE = 'LOAD_ARTICLE'
export const LOAD_ARTICLE_SUCCESS = 'LOAD_ARTICLE_SUCCESS'
export const LOAD_MORE_ARTICLE_SUCCESS = 'LOAD_MORE_ARTICLE_SUCCESS'
export const LOAD_ARTICLE_FAILURE = 'LOAD_ARTICLE_FAILURE'

export const get_articles = (params) =>{
    console.log(params)

    return {
        type:LOAD_ARTICLE,
        payload:{
            request:{
                url:api.articles,
                params
            },
            options:{
                onSuccess:({dispatch, response})=>{
                    dispatch({type: LOAD_ARTICLE_SUCCESS, payload: response.data.response.docs})
                },
                onError:({dispatch,error})=>{
                    console.log(error.message)
                    dispatch({type: LOAD_ARTICLE_FAILURE})
                }
            }
        }
    }
}
export const load_more_article = (params) =>{
    return {
        type:LOAD_ARTICLE,
        payload:{
            request:{
                url:api.articles,
                params
            },
            options:{
                onSuccess:({dispatch, response})=>{
                    console.log(response.data.response.docs)
                    dispatch({type: LOAD_MORE_ARTICLE_SUCCESS, payload: response.data.response.docs})
                },
                onError:({dispatch,error})=>{
                    console.log(error)
                    dispatch({type: LOAD_ARTICLE_FAILURE})
                }
            }
        }
    }
}