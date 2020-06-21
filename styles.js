import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
