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
      if ((!state.nextPage && !state.prevPage && state.messages.length < 5) || (!state.nextPage && state.messages.length < 5)) {
        let updatedMessages = [...state.messages];
        updatedMessages.push(action.payload);
        const prev = state.prevPage;
        let updatedNextPage;
        if (!state.prevPage && !state.nextPage && state.messages.length === 5) {
          updatedNextPage = 'https://ken-test.herokuapp.com/messages/?page=2';
        } else if (state.messages.length === 5){
          const pageNum = Number(prev.substr(prev.length - 1)) + 1;
          updatedNextPage = prev.slice(0, -1) + pageNum;
        }

        return {
          ...state,
          messages: updatedMessages,
          nextPage: updatedNextPage
        };
      } else {
        return state;
      }
    }
    default: {
      return state;
    }
  }
};
