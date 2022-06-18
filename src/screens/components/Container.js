import {StyleSheet} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
export const Container = ({children}) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 30,
  },
});
