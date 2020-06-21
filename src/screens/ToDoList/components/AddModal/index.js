import React, { useState } from 'react';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import ImageSelect from '../ImageSelect';

const AddModal = ({ isVisible, onClose, onAdd }) => {
  const [itemText, setItemText] = useState('');
  const [itemImage, setItemImage] = useState(null);
  const onAddItem = (todoItem) => {
    onAdd(todoItem);
    setItemText('');
    onClose();
  };
  const item = {
    title: itemText,
    image: itemImage,
  };

  const isDisabled = itemText.length < 1;

  return (
    <View>
      <Modal isVisible={isVisible}>
        <View style={styles.modalContent}>
          <TextInput
            style={styles.textInput}
            placeholder="Item text"
            value={itemText}
            onChangeText={(text) => setItemText(text)}
            maxLength={255}
          />
          <ImageSelect
            image={itemImage}
            setImage={(image) => setItemImage(image)}
          />
          <View style={styles.buttons}>
            <TouchableOpacity onPress={onClose}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onAddItem(item)}
              disabled={isDisabled}
            >
              <Text style={isDisabled ? {} : styles.addText}>
                Add item
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

AddModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default AddModal;
