import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ToDoItem from './components/ToDoItem';
import { selectToDoItemsList } from '../../selectors';
import { removeItem } from '../../actions';

const ToDoList = ({ todoItems, remove }) => {
  return (
    <FlatList
      data={todoItems}
      renderItem={({ item }) => (
        <ToDoItem
          key={item.id}
          item={item}
          onPress={() => remove(item.id)}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

ToDoList.propTypes = {
  todoItems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  remove: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  remove: (itemId) => dispatch(removeItem(itemId)),
});

const mapStateToProps = createStructuredSelector({
  todoItems: selectToDoItemsList,
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
