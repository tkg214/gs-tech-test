import axios from 'axios';
import actionType from '../actionTypes';

export function fetchMessages() {
  return dispatch => {
    axios.get('https://ken-test.herokuapp.com/messages/')
    .then(response => {
      dispatch({
        type: actionType.FETCH_MESSAGES_FULFILLED,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: actionType.FETCH_MESSAGES_REJECTED,
        payload: error
      });
    });
  };
};

export function fetchPageMessages(pageReqURL) {
  return dispatch => {
    axios.get(pageReqURL)
    .then(response => {
      dispatch({
        type: actionType.FETCH_MESSAGES_FULFILLED,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: actionType.FETCH_MESSAGES_REJECTED,
        payload: error
      });
    });
  };
};


export function postMessage(text) {
  return dispatch => {
    axios.post('https://ken-test.herokuapp.com/messages/', { text })
    .then(response => {
      dispatch({
        type: actionType.POST_MESSAGE_FULFILLED,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: actionType.POST_MESSAGE_REJECTED,
        payload: error
      });
    });
  };
};

export function deleteMessage(id) {
  return dispatch => {
    axios.delete('https://ken-test.herokuapp.com/messages/' + id + '/', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    .then(response => {
      dispatch({
        type: actionType.DELETE_MESSAGE_FULFILLED,
        payload: id
      });
    })
    .catch(error => {
      dispatch({
        type: actionType.DELETE_MESSAGE_REJECTED,
        payload: error
      });
    });
  };
};
