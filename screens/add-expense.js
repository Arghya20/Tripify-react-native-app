import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../components/common/screen-wrapper';
import BackButton from '../components/common/back-button';
import AddButton from '../components/common/add-button';
import {IMAGES} from '../assets/assets';
import {COLORS} from '../theme/theme';
import {useDispatch} from 'react-redux';
import {addExpense} from '../redux/slice/trips';

const CATEGORY = ['Shopping', 'Food', 'Commute', 'Entertainment', 'Others'];

const AddExpense = ({navigation, route}) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const selectedTrip = route.params;

  const dispatch = useDispatch();

  const handelExpenseAdded = () => {
    const expense = {
      id: Date.now(),
      title,
      amount,
      category,
    };
    const data = {
      tripId: selectedTrip.id,
      expense,
    };
    dispatch(addExpense(data));

    navigation.navigate('Trip Expenses', selectedTrip);
  };
  return (
    <ScreenWrapper>
      <View style={styles.addExpenseWrapper}>
        <View>
          <BackButton onPress={() => navigation.goBack()} />
          <View style={styles.bannerContainer}>
            <Image source={IMAGES.ADD_EXPENSES_BANNER} style={styles.banner} />
            <View style={styles.subHeadingContainer}>
              <Text style={styles.subHeading}>ADD NEW EXPENSE</Text>
            </View>
          </View>

          <View style={styles.form}>
            <View style={styles.formItem}>
              <Text style={styles.label}>For What?</Text>
              <TextInput
                value={title}
                onChangeText={e => setTitle(e)}
                style={styles.input}
              />
            </View>

            <View style={styles.formItem}>
              <Text style={styles.label}>How Much?</Text>
              <TextInput
                value={amount}
                onChangeText={e => setAmount(Number(e))}
                style={styles.input}
              />
            </View>

            <View style={styles.formItem}>
              <Text style={styles.label}>Category</Text>
              <View style={styles.categoryOptions}>
                {CATEGORY.map(cat => (
                  <TouchableOpacity
                    style={{
                      ...styles.category,
                      backgroundColor:
                        category === cat ? COLORS.DARK_ORANGE : COLORS.WHITE,
                    }}
                    onPress={() => setCategory(cat)}>
                    <Text
                      style={{
                        ...styles.categoryLable,
                        color: category === cat ? COLORS.WHITE : 'black',
                      }}>
                      {cat}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </View>
        <AddButton onPress={handelExpenseAdded} />
      </View>
    </ScreenWrapper>
  );
};

export default AddExpense;

const styles = StyleSheet.create({
  addExpenseWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
  },
  banner: {height: 240, width: '120%'},
  bannerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  subHeading: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.TEXT,
  },
  subHeadingContainer: {
    position: 'absolute',
    bottom: -25,
    paddingVertical: 12,
    width: '70%',
    backgroundColor: COLORS.WHITE,
    borderRadius: 18,
  },
  category: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginRight: 6,
    marginBottom: 16,
    borderRadius: 18,
  },
  categoryOptions: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
  },
  categoryLable: {
    fontSize: 12,
    fontWeight: '600',
  },
  form: {
    marginVertical: 24,
    marginBottom: 0,
  },
  formItem: {
    marginVertical: 16,
  },
  input: {
    backgroundColor: COLORS.WHITE,
    marginTop: 12,
    fontSize: 16,
    padding: 12,
    borderRadius: 8,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.TEXT,
  },
});
