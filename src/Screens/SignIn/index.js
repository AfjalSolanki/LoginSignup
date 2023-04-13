import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import Toast from 'react-native-toast-message';
import * as yup from 'yup';
import {Formik} from 'formik';
// import Spinner from 'react-native-loading-spinner-overlay/lib';

import Container from '../../Components/Container';
// import GlobalInput from '../component/GlobalInput';
// import GlobalButton from '../component/GlobalButton';
import {COLORS, Font, ImagePath, SIZE} from '../../Components/theme';
// import GlobalHeader from '../component/GlobalHeader';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import CommonTextInput from '../../Components/CommonTextInput';
import CommanHeader from '../../Components/CommanHeader';

const SignIn = ({navigation}) => {
  const [showIcon, setShowIcon] = useState(false);
  const [conformShowIcon, setConformShowIcon] = useState(false);
  const [loading, setLoading] = useState(false);

  const loginValidationSchema = yup.object().shape({
    fullNames: yup
      .string()
      .matches(/(\w.+\s).+/, 'Enter at least 2 names')
      .required('Full name is required'),
    mobileNumber: yup.string().required('Mobile number is required'),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        'Password must have a special character',
      )
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    conformPassword: yup
      // .string()
      // .oneOf([yup.ref('password')], 'Password dont match')
      // .required('Conform password is required'),
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
  });

  const onHandle = () => {
    alert('--------');
  };

  return (
    <Container>
      <Formik
        initialValues={{
          fullNames: '',
          mobileNumber: '',
          password: '',
          conformPassword: '',
        }}
        validationSchema={loginValidationSchema}
        onSubmit={values => onHandle(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <CommanHeader
              onPressLeft={() => navigation.goBack()}
              title={'newAccount'}
            />
            <Image source={ImagePath.user} style={styles.logoImage} />
            <CommonTextInput
              inputStyle={styles.inputStyles}
              placeholder={'name'}
              keyboardType={'default'}
              value={values.fullNames}
              onChange={handleChange('fullNames')}
              onBlur={handleBlur('fullNames')}
              errors={errors.fullNames}
              touched={touched.fullNames}
            />
            <CommonTextInput
              maxLength={10}
              inputStyle={styles.inputStyles}
              keyboardType="number-pad"
              placeholder={'number'}
              value={values.mobileNumber}
              onChange={handleChange('mobileNumber')}
              onBlur={handleBlur('mobileNumber')}
              errors={errors.mobileNumber}
              touched={touched.mobileNumber}
            />
            <CommonTextInput
              inputStyle={styles.inputStyles}
              placeholder={'password'}
              value={values.password}
              onChange={handleChange('password')}
              onBlur={handleBlur('password')}
              errors={errors.password}
              touched={touched.password}
              icon
              secureTextEntry={showIcon == true ? false : true}
              onPress={() => setShowIcon(showIcon => !showIcon)}
              showIcon={showIcon == true ? ImagePath.hidden : ImagePath.eye}
            />
            <CommonTextInput
              placeholder={'newPassword'}
              inputStyle={styles.inputStyles}
              value={values.conformPassword}
              onChange={handleChange('conformPassword')}
              onBlur={handleBlur('conformPassword')}
              errors={errors.conformPassword}
              touched={touched.conformPassword}
              icon
              secureTextEntry={conformShowIcon == true ? false : true}
              onPress={() =>
                setConformShowIcon(conformShowIcon => !conformShowIcon)
              }
              showIcon={
                conformShowIcon == true ? ImagePath.hidden : ImagePath.eye
              }
            />
            <ButtonWithLoader
              btnStyle={{marginTop: 20}}
              text={'signup'}
              onPress={handleSubmit}
            />
            <View style={styles.loginView}>
              <Text style={styles.logiStyle}>{'Already Account'} </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.signUpText}>{'Login'}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </Formik>
    </Container>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingBottom: wp(3),
    alignSelf: 'center',
    width: wp(100),
    paddingHorizontal: wp(5),
  },
  logoImage: {
    width: wp(56),
    height: hp(10),
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical: hp(2.5),
  },
  inputStyles: {
    marginTop: hp(2),
  },
  loginView: {
    marginVertical: hp(2.5),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logiStyle: {
    color: COLORS.lightBlack,
    fontFamily: Font.mediam,
    fontSize: SIZE.NL,
  },
  signUpText: {
    color: COLORS.purple,
    fontFamily: Font.semiBold,
    fontSize: SIZE.NL,
  },
});
