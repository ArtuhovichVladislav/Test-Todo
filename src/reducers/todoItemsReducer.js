import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { ADD_TODO_ITEM, REMOVE_TODO_ITEM } from '../actions';

export const initialState = {
  list: [
    {
      title: 'First item',
      id: uuidv4(),
    },
    {
      title: 'Second item',
      id: uuidv4(),
    },
    {
      title: 'Third item',
      id: uuidv4(),
    },
    {
      title: 'Fourth item',
      id: uuidv4(),
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ITEM: {
      const newItem = { ...action.payload, id: uuidv4() };
      return { ...state, list: [...state.list, newItem] };
    }
    case REMOVE_TODO_ITEM: {
      const itemId = action.payload;
      const newList = state.list.filter((item) => item.id !== itemId);
      return { ...state, list: newList };
    }
    default: {
      return state;
    }
  }
};
