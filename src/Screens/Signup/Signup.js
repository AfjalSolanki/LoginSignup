import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import TextInputWithLable from '../../Components/TextInputWithLabel';
import {useTranslation} from 'react-i18next';
import firestore from '@react-native-firebase/firestore';

// import firestore from '@react-native-firebase/firestore';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase/firebase.config';

// import validator from '../../utils/validations';
import {showError, showSuccess} from '../../utils/helperFunction';
// import actions from '../../redux/actions';
// import {showMessage} from 'react-native-flash-message';
// import firestore from '@react-native-firebase/firestore';

const Signup = ({navigation}) => {
  const {t} = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const addUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log('-----',userCredential);
        showSuccess('User Created Successfully')
        navigation.navigate('Login');
        // // Signed in
        // const user = userCredential.user;
        // // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // alert(errorMessage);
        showError(errorMessage)
        // ..
      });

    // firestore()
    // .collection('Users')
    // .add({
    //   name: name,
    //   email: email,
    //   mobile: mobile,
    //   password: password,
    //   conPassword: conPassword,
    // })
    // .then(() => {
    //   console.log('User added!');
    // });
    // firestore()
    //   .collection('Users')
    //   .add({
    //     name: 'Ada Lovelace',
    //     age: 30,
    //   })
    //   .then(() => {
    //     console.log('User added!');
    //   });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Signup}>{t('SIgn Up')}</Text>
      <TextInputWithLable
        label="Email"
        placheHolder="enter your email"
        value={email}
        onChangeText={text => {
          setEmail(text);
        }}
      />
      <TextInputWithLable
        label="Password"
        placheHolder="enter your password"
        // isSecure={isSecure}
        value={password}
        onChangeText={text => {
          setPassword(text);
        }}
      />
      <ButtonWithLoader
        text="Signup"
        onPress={() => {
          addUser();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
  },
  Signup: {
    fontSize: 26,
    color: '#000000',
    fontWeight: 'bold',
    marginVertical: 20,
  },
});

export default Signup;
