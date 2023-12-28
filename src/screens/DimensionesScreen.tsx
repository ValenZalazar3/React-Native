import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const DimensionesScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.cajaMorada} />
      <View style={style.cajaNaranja} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: 100,
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
    width: 100,
    height: 100,
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
    width: 100,
    height: 100,
  },
});
