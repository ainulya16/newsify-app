import { api } from '../config';

export const LOAD_BOOK = 'LOAD_BOOK'
export const LOAD_BOOK_SUCCESS = 'LOAD_BOOK_SUCCESS'
export const LOAD_MORE_BOOK_SUCCESS = 'LOAD_MORE_BOOK_SUCCESS'
export const LOAD_BOOK_FAILURE = 'LOAD_BOOK_FAILURE'

export const get_book = (params) =>{
    return {
        type:LOAD_BOOK,
        payload:{
            request:{
                url:api.books,
                params
            },
            options:{
                onSuccess:({dispatch, response})=>{
                    console.log(response.data)
                    dispatch({type: LOAD_BOOK_SUCCESS, payload: response.data.results})
                },
                onError:({dispatch,error})=>{
                    console.log(error.response)
                    dispatch({type: LOAD_BOOK_FAILURE})
                }
            }
        }
    }
}