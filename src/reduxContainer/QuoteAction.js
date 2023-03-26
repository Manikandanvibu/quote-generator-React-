import  axios  from "axios";

// Define action types
export const FETCH_QUOTE_REQUEST = 'FETCH_QUOTE_REQUEST';
export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS';
export const FETCH_QUOTE_FAILURE = 'FETCH_QUOTE_FAILURE';


// Define action creators
export const fetchQuoteRequest = () => ({
  type: FETCH_QUOTE_REQUEST,
});

export const fetchQuoteSuccess = (quote, author) => ({
  type: FETCH_QUOTE_SUCCESS,
  payload: {
    quote,
    author
  }
});

export const fetchQuoteFailure = (error) => ({
  type: FETCH_QUOTE_FAILURE,
  payload: error,
});

// Define async action creator
export const fetchQuote = () => {
    return (dispatch) => {
      dispatch(fetchQuoteRequest());
      axios
        .get('https://api.quotable.io/random')
        .then((response) => {
          const quote = response.data.content;
          const author = response.data.author;
          dispatch(fetchQuoteSuccess(quote, author));
        })
        .catch((error) => {
          const errorMessage = error.message;
          dispatch(fetchQuoteFailure(errorMessage));
        });
    };
  };

