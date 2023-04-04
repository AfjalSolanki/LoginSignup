//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Keyboard,
} from 'react-native';
import DashboardHeader from '../Components/DashboardHeader';
import Profile from '../Screens/Profile/Profile';
import Home from '../Screens/Home/Home';
import Search from '../Screens/Search';
import WishList from '../Screens/WishList';
// create a component
const Tabe = () => {
  const [selected, setSelected] = useState(0);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* <DashboardHeader
        rightIcon={require('../assets/images/notificationIcon.png')}
        leftIcon={require('../assets/images/notificationIcon.png')}
        title={'BITCOIN WALLET'}
      /> */}
      {selected == 0 ? (
        <Home />
      ) : selected == 1 ? (
        <Search />
      ) : selected == 2 ? (
        <WishList />
      ) : selected == 3 ? (
        <Home />
      ) : selected == 4 ? (
        <Profile />
      ) : (
        <Home />
      )}
      {!isKeyboardVisible && (
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            onPress={() => setSelected(0)}
            style={styles.bottomTabe}>
            <Image
              style={styles.TabeIcon}
              source={require('../assets/images/home.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected(1)}
            style={styles.bottomTabe}>
            <Image
              style={styles.TabeIcon}
              source={require('../assets/images/Search.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected(2)}
            style={styles.bottomTabe}>
            <Image
              style={styles.TabeIcon}
              source={require('../assets/images/love.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected(3)}
            style={styles.bottomTabe}>
            <Image
              style={styles.TabeIcon}
              source={require('../assets/images/notification.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected(4)}
            style={styles.bottomTabe}>
            <Image
              style={styles.TabeIcon}
              source={require('../assets/images/user.png')}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    elevation: 5,
    borderTopColor: '#fff',
    borderTopWidth: 1,
    zIndex:1
  },
  bottomTabe: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TabeIcon: {
    width: 25,
    height: 25,
  },
});

//make this component available to the app
export default Tabe;
