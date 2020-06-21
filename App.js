import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { Text, View, AppState } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import reducers from './src/reducers';
import ToDoList from './src/screens/ToDoList';
import AddButton from './src/screens/ToDoList/components/AddButton';
import AddModal from './src/screens/ToDoList/components/AddModal';
import { addItem } from './src/actions';
import styles from './styles';

const store = createStore(reducers, applyMiddleware(thunk));

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStoreLoading: false,
      reduxStore: store,
    };
  }

  componentDidMount() {
    const self = this;
    AppState.addEventListener(
      'change',
      this.handleAppStateChange.bind(this),
    );

    AsyncStorage.getItem('completeStore')
      .then((value) => {
        if (value && value.length) {
          const initialStore = JSON.parse(value);
          self.setState({
            reduxStore: createStore(
              reducers,
              initialStore,
              applyMiddleware(thunk),
            ),
          });
        } else {
          self.setState({ reduxStore: store });
        }
        self.setState({ isStoreLoading: false });
      })
      .catch(() => {
        self.setState({ reduxStore: store });
        self.setState({ isStoreLoading: false });
      });
  }

  componentWillUnmount() {
    AppState.removeEventListener(
      'change',
      this.handleAppStateChange.bind(this),
    );
  }

  handleAppStateChange() {
    const { reduxStore } = this.state;
    const storingValue = JSON.stringify(reduxStore.getState());
    AsyncStorage.setItem('completeStore', storingValue);
  }

  render() {
    const { isStoreLoading, reduxStore } = this.state;
    if (isStoreLoading) {
      return <Text>Loading Store ...</Text>;
    }
    return (
      <Provider store={reduxStore}>
        <ConnectedApp />
      </Provider>
    );
  }
}
export default App;
