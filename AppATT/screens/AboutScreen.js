import React from 'react';
import { View, Text, Button, Image } from 'react-native';

const AboutScreen = ({ navigation }) => {
  return (
    <View>
      <Image
      source={require('../assets/icon.png')}
      style={{ width: 400, height: 500 }}
    />
    </View>
  );
};

export default AboutScreen;
