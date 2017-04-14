import actionType from '../actionTypes';

export default function reducer(state={
  messages: [],
  count: null,
  nextPage: null,
  prevPage: null,
  error: null
}, action) {
  switch (action.type) {
    case actionType.FETCH_MESSAGES_FULFILLED: {
      return {
        ...state,
        messages: action.payload.results,
        count: action.payload.count,
        nextPage: action.payload.next,
        prevPage: action.payload.previous
      };
    }
    case actionType.FETCH_MESSAGES_REJECTED: {
      return {
        ...state,
        error: action.payload
      };
    }
    case actionType.POST_MESSAGE_FULFILLED: {
      console.log(action.payload)
      return state
    }
    default: {
      return state;
    }
  }
};
