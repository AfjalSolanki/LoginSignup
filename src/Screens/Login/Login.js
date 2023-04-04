import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import TextInputWithLable from '../../Components/TextInputWithLabel';

import validator from '../../utils/validations';
import {showError} from '../../utils/helperFunction';
// import actions from '../../redux/actions';
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from 'firebase/auth';
import {auth} from '../../firebase/firebase.config';
const Login = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        //  navigation.replace('Home')
        navigation.replace('MainStack', {screen: 'Tabe'});
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  const onLogin = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        alert('User Logi Successfully');
        navigation.replace('Tabe');
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
  };

  // const [state, setState] = useState({
  //   isLoading: false,
  //   email: '',
  //   password: '',
  //   isSecure: true,
  // });
  // const {isLoading, email, password, isSecure} = state;
  // const updateState = data => setState(() => ({...state, ...data}));

  // const isValidData = () => {
  //   const error = validator({
  //     email,
  //     password,
  //   });
  //   if (error) {
  //     showError(error);
  //     return false;
  //   }
  //   return true;
  // };

  // const onLogin = async () => {
  //   const checkValid = isValidData();
  //   if (checkValid) {
  //     navigation.navigate('Home');
  //     // updateState({ isLoading: true })
  //     // try {
  //     //     // const res = await actions.login({
  //     //     //     email,
  //     //     //     password
  //     //     // })
  //     //     // console.log("res==>>>>>", res)
  //     //     // if(!res.data.emailVerified){
  //     //     //     alert("Please verify your email")
  //     //     // }
  //     //     updateState({ isLoading: false })
  //     // } catch (error) {
  //     //     console.log("error raised")
  //     //     showError(error.message)
  //     //     updateState({ isLoading: false })
  //     // }
  //   }
  // };

  const resetPassword = () => {
    if (email == null) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert('Password reset email has been sent successfully');
          // Password reset email sent!
          // ..
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
          // ..
        });
    } else {
      alert('please enter a valid email');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.login}>{'Log In'}</Text>
      <TextInputWithLable
        label="Email"
        placheHolder="enter your email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInputWithLable
        label="Password"
        placheHolder="enter your password"
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <ButtonWithLoader
        text="Login"
        onPress={() => {
          onLogin();
        }}
      />

      <View style={{marginVertical: 8}} />

      <ButtonWithLoader
        text="Signup"
        onPress={() => navigation.navigate('Signup')}
      />
      <View style={{marginVertical: 8}} />

      <TouchableOpacity onPress={() => resetPassword()}>
        <Text>{'forget Password'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
  },
  login: {
    fontSize: 26,
    color: '#000000',
    fontWeight: 'bold',
    marginVertical: 20,
  },
});

export default Login;
