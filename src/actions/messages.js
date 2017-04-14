import axios from 'axios';
import actionType from '../actionTypes'

export function fetchMessages() {
  return dispatch => {
    axios.get('https://ken-test.herokuapp.com/messages/')
    .then(response => {
      dispatch({
        type: actionType.FETCH_MESSAGES_FULFILLED,
        payload: response.data})
    })
    .catch(error => {
      dispatch({
        type: actionType.FETCH_MESSAGES_REJECTED,
        payload: error
      })
    });
  };
};
