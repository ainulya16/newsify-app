import { LOAD_BOOK, LOAD_BOOK_FAILURE, LOAD_BOOK_SUCCESS } from '../actions';
const INITIAL_STATE = {
    data:[],
    loading_book:false,
}


export default ( state=INITIAL_STATE, action ) => {
    switch (action.type) {
        case LOAD_BOOK:
            return { ...state, loading_book:true}
            
        case LOAD_BOOK_SUCCESS:
            return { ...state, loading_book:false, data: action.payload }

        case LOAD_BOOK_FAILURE:
            return { ...state, loading_book:false }
    
        default:
            return state
    }


}