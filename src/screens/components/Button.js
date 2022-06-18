import {useActor} from '@xstate/react';
import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import { useAppContext } from '../../../App';
export const Button = ({title,event,onPress}) => {
  const {service} = useAppContext();
  const [state, send] = useActor(service);

  const handlePress=()=>{
    onPress? onPress() : send(event)
  }
  return (
    <Pressable style={styles.button} onPress={handlePress}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export const styles = StyleSheet.create({
  button: {
    margin: 10,
    marginTop:0,
    backgroundColor: 'yellow',
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
