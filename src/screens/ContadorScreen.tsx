import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {useState} from 'react';
import {Fab} from '../components/Fab';
export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);
  return (
    <View style={style.conteiner}>
      <Text style={style.title}>Contador de NPCs: {contador}</Text>

      {/* <TouchableOpacity
        onPress={() => {
          setContador(contador - 1);
        }}
        style={style.fabLocationBL}>
        <View style={style.fab}>
          <Text style={style.fabText}>-</Text>
        </View>
      </TouchableOpacity> */}
      <Fab title="+1" onPress={() => setContador(contador + 1)} />
      <Fab title="-1" position="bl" onPress={() => setContador(contador - 1)} />
    </View>
  );
};

const style = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -10,
  },
});
