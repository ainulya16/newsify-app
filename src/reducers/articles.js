import { LOAD_ARTICLE, LOAD_ARTICLE_FAILURE, LOAD_ARTICLE_SUCCESS } from '../actions';
const INITIAL_STATE = {
    data:[],
    loading_articles:false,
}


export default ( state=INITIAL_STATE, action ) => {
    switch (action.type) {
        case LOAD_ARTICLE:
            return { ...state, loading_articles:true}
            
        case LOAD_ARTICLE_SUCCESS:
            return { ...state, loading_articles:false, data: action.payload }
            
        case LOAD_ARTICLE_FAILURE:
            return { ...state, loading_articles:false }
    
        default:
            return state
            
    }


}