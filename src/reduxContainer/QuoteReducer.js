import { FETCH_QUOTE_REQUEST,FETCH_QUOTE_SUCCESS,FETCH_QUOTE_FAILURE } from "./QuoteAction";
  
const initialState = {
    quote: '',
    author: '',
    loading: false,
    error: null,
    bookmarks: []
  };
  
  const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_QUOTE_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_QUOTE_SUCCESS:
        return {
          ...state,
          quote: action.payload.quote,
          author: action.payload.author,
          loading: false,
          error: null
        };
      case FETCH_QUOTE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
      default:
        return state;
    }
  };
  
  export default quoteReducer;
  