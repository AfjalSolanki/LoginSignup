//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import ButtonWithLoader from './ButtonWithLoader';

// create a component
const AskFromLoginModal = ({madalVisible, onPressLogin, onPressSignup,onClose}) => {
  return (
    <Modal visible={madalVisible} transparent>
      <View style={styles.modelView}>
        <View style={styles.manlView}>
          <TouchableOpacity
            onPress={() => {
              onClose();
            }}>
            <Image
              style={styles.close_btn}
              source={require('../assets/images/close_btn.png')}
            />
          </TouchableOpacity>
          <ButtonWithLoader
            onPress={onPressLogin}
            btnStyle={{marginHorizontal: 20}}
            text="Login"
          />
          <ButtonWithLoader
            onPress={onPressSignup}
            btnStyle={{marginHorizontal: 20, marginTop: 20}}
            text="Create Account"
          />
        </View>
      </View>
    </Modal>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  modelView: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  manlView: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 20,
    // height: 200,
    width: '90%',
    // alignItems:'center',
    justifyContent: 'center',
  },
  close_btn: {
    height: 26,
    width: 25,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginEnd: 10,
    bottom: 10,
  },
});

//make this component available to the app
export default AskFromLoginModal;
