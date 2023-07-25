import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Página inicial</Text>
      <Button
        title="Ir para a página Sobre"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
};

export default HomeScreen;
