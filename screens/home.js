import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/common/screen-wrapper';
import {COLORS} from '../theme/theme';
import {IMAGES, RANDOM_THUMBNAIL, THUMBNAIL} from '../assets/assets';
import EmptyList from '../components/home/empty-list';
import {useSelector} from 'react-redux';

const Home = ({navigation}) => {
  const tripList = useSelector(state => state.trips.trips);
  return (
    <ScreenWrapper>
      <View>
        <View style={styles.homeHeader}>
          <Text style={styles.heading}>Tripify</Text>
        </View>
        <View style={styles.bannerContainer}>
          <Image source={IMAGES.TRIPIFY_BANNER} style={styles.banner} />
          <TouchableOpacity onPress={() => navigation.navigate('Add Trip')}>
            <View style={styles.addTripButon}>
              <Text style={styles.addButtonText}>Add Trip</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.subHeading}>RECENT TRIPS</Text>
      <View style={styles.flatlistContainer}>
        <FlatList
          ListEmptyComponent={<EmptyList />}
          columnWrapperStyle={styles.tripList}
          data={tripList}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Trip Expenses', item)}>
              <View style={styles.tripCard}>
                <Image style={styles.tripCardBanner} source={item.banner} />
                <Text style={styles.tripCardPlace}>{item.place}</Text>
                <Text style={styles.tripCardCountry}>{item.country}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  tripCard: {
    backgroundColor: COLORS.WHITE,
    marginBottom: 12,
    padding: 8,
    borderRadius: 8,
  },
  tripCardPlace: {
    fontSize: 14,
    marginLeft: 6,
    fontWeight: '600',
  },
  tripCardCountry: {
    fontSize: 10,
    fontWeight: '600',
    marginLeft: 6,
  },
  tripList: {justifyContent: 'space-between'},
  flatlistContainer: {
    marginBottom: 150,
    height: 400,
  },
  tripCardBanner: {width: 130, height: 140},
  heading: {
    fontSize: 28,
    color: COLORS.TEXT,
    fontWeight: '800',
  },
  banner: {
    width: '150%',
    height: 300,
    resizeMode: 'contain',
  },
  bannerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  addButtonText: {
    fontWeight: '700',
    color: COLORS.TEXT,
  },
  addTripButon: {
    position: 'absolute',
    backgroundColor: COLORS.WHITE,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 18,
    bottom: 35,
    left: 50,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.TEXT,
    marginBottom: 12,
  },
});
