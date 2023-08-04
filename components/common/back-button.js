import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ICONS} from '../../assets/assets';
import {COLORS} from '../../theme/theme';

const BackButton = props => {
  const {onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.iconWrapper}>
        <Image source={ICONS.BACK} style={styles.backIcon} />
      </View>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backIcon: {
    height: 25,
    width: 25,
  },
  iconWrapper: {
    padding: 6,
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
    width: 40,
    height: 40,
  },
});
