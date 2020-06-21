import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';

const ImageSelect = ({ setImage }) => {
  const [source, setSource] = useState(null);
  const selectFile = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setSource(response.uri);
        setImage(response.uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      {source ? (
        <Image source={{ uri: source }} style={styles.image} />
      ) : null}
      <TouchableOpacity onPress={selectFile} style={styles.button}>
        <Text style={styles.buttonText}>Add Image</Text>
      </TouchableOpacity>
    </View>
  );
};

ImageSelect.propTypes = {
  setImage: PropTypes.func.isRequired,
};

export default ImageSelect;
