//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Routes from './src/Navigations/Route';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
      <FlashMessage position="bottom" />
    </Provider>
  );
};

export default App;
