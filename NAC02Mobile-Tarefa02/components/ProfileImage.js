import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

export default class ProfileImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Image
        style={{
          width: '100%',
          height: 20,
          resizeMode: 'contain',
        }}
        source={{uri:this.props.imageSource}}/>
    );
  }
}

ProfileImage.propTypes = { imageSource: PropTypes.string.isRequired };