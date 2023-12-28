import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={style.conteiner}>
      <Text style={style.title}>BoxObjectModel</Text>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 20,
    borderWidth: 10,
    // backgroundColor: 'red',
  },
  conteiner: {
    backgroundColor: 'red',
    flex: 1,
  },
});
