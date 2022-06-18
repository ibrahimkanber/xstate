import React from 'react';
import { View } from 'react-native';
export const ButtonContainer= ({children}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: 400,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {children}
    </View>
  );
};
