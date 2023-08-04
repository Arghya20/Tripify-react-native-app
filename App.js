import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenWrapper from './components/common/screen-wrapper';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigation/app-navigator';
import {Provider} from 'react-redux';
import {store} from './redux/store/store';
import {COLORS} from './theme/theme';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={COLORS.BACKGROUND} barStyle="dark-content" />
      <NavigationContainer>
        <ScreenWrapper>
          <AppNavigator />
        </ScreenWrapper>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
