import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CATEGORY_BG, COLORS} from '../../theme/theme';

const ExpenseCard = ({item}) => {
  return (
    <View
      style={{
        ...styles.cardWrapper,
        backgroundColor: CATEGORY_BG[item?.category],
      }}>
      <View>
        <Text style={styles.expenseTitle}>{item?.title}</Text>
        <Text style={styles.expenseCategory}>{item?.category}</Text>
      </View>
      <View>
        <Text style={styles.expenseAmount}>₹{item?.amount}</Text>
      </View>
    </View>
  );
};

export default ExpenseCard;

const styles = StyleSheet.create({
  cardWrapper: {
    padding: 12,
    marginBottom: 12,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
  },
  expenseTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.TEXT,
  },
  expenseCategory: {
    fontSize: 12,
    marginVertical: 4,
    color: COLORS.FADED_TEXT,
  },
  expenseAmount: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.TEXT,
  },
});
