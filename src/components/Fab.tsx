import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
  TouchableOpacity,
} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  position?: 'br' | 'bl';
}

export const Fab = ({title, onPress, position = 'br'}: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={[
          style.fabLocation,
          position === 'bl' ? style.left : style.right,
        ]}
        onPress={() => {
          onPress;
        }}>
        <View style={style.fab}>
          <Text style={style.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View
        style={[
          style.fabLocation,
          position === 'bl' ? style.left : style.right,
        ]}>
        <TouchableNativeFeedback
          onPress={() => {
            onPress;
          }}
          background={TouchableNativeFeedback.Ripple('black', false, 30)}>
          <View style={style.fab}>
            <Text style={style.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };
  return Platform.OS === 'ios' ? ios() : android();
};

const style = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  left: {
    left: 25,
  },
  right: {
    right: 25,
  },
  fab: {
    backgroundColor: 'purple',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 8,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
