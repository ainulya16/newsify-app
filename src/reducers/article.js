import { LOAD_ARTICLE, LOAD_ARTICLE_FAILURE, LOAD_ARTICLE_SUCCESS, LOAD_MORE_ARTICLE_SUCCESS } from '../actions';
const INITIAL_STATE = {
    data:[],
    loading_article:false,
}


export default ( state=INITIAL_STATE, action ) => {
    switch (action.type) {
        case LOAD_ARTICLE:
            return { ...state, loading_article:true}
            
        case LOAD_ARTICLE_SUCCESS:
            return { ...state, loading_article:false, data: action.payload }

        case LOAD_MORE_ARTICLE_SUCCESS:
            return { ...state, loading_article:false, data: [...state.data, ...action.payload] }
            
        case LOAD_ARTICLE_FAILURE:
            return { ...state, loading_article:false }
    
        default:
            return state
            
    }


}