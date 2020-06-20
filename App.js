import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { StyleSheet, Text, View } from 'react-native';
import reducers from './src/reducers';
import ToDoList from './src/screens/ToDoList';
import AddButton from './src/screens/ToDoList/components/AddButton';

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

const App = () => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.container}>
        <Text style={styles.welcome}>React Native</Text>
        <ToDoList />
      </View>
      <View style={styles.border}>
        {/* <View /> */}
        <View style={styles.buttonWrapper}>
          <AddButton
            onPress={() => {
              console.log('onPress');
            }}
          />
        </View>
      </View>
    </View>
  );
};

const MyApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default MyApp;
