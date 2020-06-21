import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  item: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 15,
    paddingHorizontal: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    width: '80%',
    fontSize: 16,
    color: 'black',
  },
  itemImage: {
    width: '20%',
    height: 30,
    resizeMode: 'contain',
  },
});
