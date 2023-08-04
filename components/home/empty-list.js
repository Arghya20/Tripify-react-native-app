import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMAGES} from '../../assets/assets';

const EmptyList = () => {
  return (
    <View style={styles.emptyList}>
      <Image source={IMAGES.EMPTY_TRIPS} style={styles.banner} />
      <Text style={styles.massage}>You haven't recorded any trip yet</Text>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
  emptyList: {
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
