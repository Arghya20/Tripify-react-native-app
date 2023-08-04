import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMAGES} from '../../assets/assets';

const EmptyExpense = () => {
  return (
    <View style={styles.EmptyExpense}>
      <Image source={IMAGES.EMPTY_EXPENSES} style={styles.banner} />
      <Text style={styles.massage}>
        You haven't recorded any expenses trip{' '}
      </Text>
    </View>
  );
};

export default EmptyExpense;

const styles = StyleSheet.create({
  EmptyExpense: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  banner: {
    height: 240,
    width: 240,
  },
  massage: {
    fontSize: 14,
    fontWeight: '600',
  },
});
