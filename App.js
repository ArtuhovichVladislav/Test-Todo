import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { StyleSheet, Text, View } from 'react-native';
import reducers from './src/reducers';
import ToDoList from './src/screens/ToDoList';
import AddButton from './src/screens/ToDoList/components/AddButton';
import AddModal from './src/screens/ToDoList/components/AddModal';
import { addItem } from './src/actions';

const store = createStore(reducers, applyMiddleware(thunk));

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  welcome: {
    fontSize: 32,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  border: {
    borderWidth: 1,
    borderColor: '#eee',
    width: '100%',
    elevation: 2,
    alignSelf: 'flex-end',
    alignItems: 'center',
    height: 50,
  },
  buttonWrapper: {
    marginTop: -25,
  },
});

const RootComponent = ({ addToDo }) => {
  const [isVisible, setIsVisible] = useState(false);
  const onAddItem = (item) => {
    addToDo(item);
  };

  return (
    <View style={styles.appContainer}>
      <AddModal
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
        onAdd={onAddItem}
      />
      <View style={styles.container}>
        <Text style={styles.welcome}>React Native</Text>
        <ToDoList />
      </View>
      <View style={styles.border}>
        <View style={styles.buttonWrapper}>
          <AddButton onPress={() => setIsVisible(true)} />
        </View>
      </View>
    </View>
  );
};

RootComponent.propTypes = {
  addToDo: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addToDo: (item) => dispatch(addItem(item)),
});

const ConnectedApp = connect(null, mapDispatchToProps)(RootComponent);

export default () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);
