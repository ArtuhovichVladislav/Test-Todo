import { combineReducers } from 'redux';
import todoItems, {
  initialState as todoItemsInitialState,
} from './todoItemsReducer';

export default combineReducers({
  todoItems,
});

export const initialState = {
  todoItems: todoItemsInitialState,
};
