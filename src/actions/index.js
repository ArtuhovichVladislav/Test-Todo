export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM';

export const addItem = (item) => (dispatch) => {
  return dispatch({
    type: ADD_TODO_ITEM,
    payload: item,
  });
};

export const removeItem = (itemId) => (dispatch) => {
  return dispatch({
    type: REMOVE_TODO_ITEM,
    payload: itemId,
  });
};
