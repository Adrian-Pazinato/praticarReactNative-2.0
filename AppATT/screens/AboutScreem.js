import React from 'react';
import { View, Text, Button } from 'react-native';

const AboutScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Sobre</Text>
      <Button
        title="Voltar para a página inicial"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default AboutScreen;
