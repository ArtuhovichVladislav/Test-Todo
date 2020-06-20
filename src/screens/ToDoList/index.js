import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ToDoItem from './components/ToDoItem';
import { selectToDoItemsList } from '../../selectors';
import { removeItem } from '../../actions';

const ToDoList = ({ todoItems }) => {
  return (
    <FlatList
      data={todoItems}
      renderItem={({ item }) => (
        <ToDoItem
          key={item.id}
          item={item}
          onPress={() => removeItem(item.id)}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

ToDoList.propTypes = {
  todoItems: PropTypes.arrayOf().isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemId) => dispatch(removeItem(itemId)),
});

const mapStateToProps = createStructuredSelector({
  todoItems: selectToDoItemsList,
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
