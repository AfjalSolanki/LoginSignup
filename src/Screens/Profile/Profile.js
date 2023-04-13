import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import {auth} from '../../firebase/firebase.config';
import {signOut} from 'firebase/auth';
import {useNavigation} from '@react-navigation/native';
const Profile = () => {
  const navigation = useNavigation();

  const [isLoading, setLoading] = useState(false);
  const onLogoutAlert = () => {
    Alert.alert(
      'Logout',
      'Are you sure, yout want to logout from this device',
      [{text: 'Yes', onPress: logout}, {text: 'No'}],
      {cancelable: true},
    );
  };
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log('Sign-out successful');
        // navigation.replace('Login');
        navigation.replace('AuthStack', {screen: 'Login'});
      })
      .catch(error => {
        // An error happened.
      });

    // setLoading(true)
    // setTimeout(() => {
    //     // actions.logout()
    //     setLoading(false)
    // }, 2000);
  };
  return (
    <View style={styles.container}>
      <ButtonWithLoader
        isLoading={isLoading}
        text="Logout"
        onPress={onLogoutAlert}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Profile;
