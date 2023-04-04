import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import TextInputWithLable from '../../Components/TextInputWithLabel';

// import firestore from '@react-native-firebase/firestore';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase/firebase.config';

// import validator from '../../utils/validations';
// import {showError} from '../../utils/helperFunction';
// import actions from '../../redux/actions';
// import {showMessage} from 'react-native-flash-message';
// import firestore from '@react-native-firebase/firestore';

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const addUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log('-----',userCredential);

        alert('User Created Successfully');
        navigation.replace('Home');
        // // Signed in
        // const user = userCredential.user;
        // // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
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
  };
  // const [state, setState] = useState({
  //   isLoading: false,
  //   userName: '',
  //   email: '',
  //   password: '',
  //   isSecure: true,
  // });
  // const {isLoading, name, email, password, isSecure} = state;
  // const updateState = data => setState(() => ({...state, ...data}));

  // const isValidData = () => {
  //   const error = validator({
  //     name,
  //     email,
  //     password,
  //   });
  //   if (error) {
  //     showError(error);
  //     return false;
  //   }
  //   return true;
  // };

  // const onSignup = async () => {
  //   const checkValid = isValidData();
  //   // if (checkValid) {
  //   //     updateState({ isLoading: true })
  //   //     try {
  //   //         const res = await actions.signup({
  //   //             name: userName,
  //   //             email,
  //   //             password
  //   //         })
  //   //         console.log("res of signup==>>>>>", res)
  //   //         showMessage("Registered successfully...!!!! Please verify your email")
  //   //         updateState({ isLoading: false })
  //   //         navigation.goBack()
  //   //     } catch (error) {
  //   //         console.log("error raised")
  //   //         showError(error.message)
  //   //         updateState({ isLoading: false })
  //   //     }
  //   // }
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.Signup}>{'Sign Up'}</Text>
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
