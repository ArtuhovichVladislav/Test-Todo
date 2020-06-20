import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';

const ToDoItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
      {item.image ? (
        <Image style={styles.itemImage} source={item.image} />
      ) : null}
    </TouchableOpacity>
  );
};

ToDoItem.propTypes = {
  item: PropTypes.shape().isRequired,
  onPress: PropTypes.func.isRequired,
};

export default React.memo(ToDoItem);
