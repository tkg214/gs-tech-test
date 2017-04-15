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
      if ((!state.nextPage && !state.prevPage && state.messages.length <= 5) || (!state.nextPage && state.messages.length <= 5)) {
        let updatedMessages = [...state.messages];
        updatedMessages.push(action.payload);
        const prevURL = state.prevPage;
        let updatedNextPage;
        if (!state.prevPage && !state.nextPage && state.messages.length === 5) {
          updatedNextPage = 'https://ken-test.herokuapp.com/messages/?page=2';
          return {
            ...state,
            nextPage: updatedNextPage
          };
        } else if (state.messages.length === 5){
          const pageNum = Number(prevURL.substr(prevURL.length - 1)) + 2;
          updatedNextPage = state.prevPage.slice(0, -1) + String(pageNum);
          console.log(updatedNextPage)
          return {
            ...state,
            nextPage: updatedNextPage
          };
        }

        return {
          ...state,
          messages: updatedMessages
        };
      } else {
        return state;
      }
    }
    case actionType.DELETE_MESSAGE_FULFILLED: {
      let messageList = [...state.messages];
      let updatedMessages = messageList.filter(message => {
        return message.id !== action.payload;
      });
      return {...state, messages: updatedMessages}
    }
    default: {
      return state;
    }
  }
};
