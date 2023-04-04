//import liraries
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
// import '../language/i18n';
import '../../language/i18n';

import {useTranslation} from 'react-i18next';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
// create a component
const SalectLanguage = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setCurrentLanguage(value))
      .catch(err => console.log(err));
  };

  const data = [
    {text: 'English', type: 'en'},
    {text: 'हिंदी', type: 'hi'},
    {text: 'عربي', type: 'ar'},
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={
          currentLanguage === item.type ? styles.selected : styles.unselected
        }
        onPress={() => changeLanguage(item.type)}>
        <Text
          style={[
            styles.langTxt,
            {
              color: currentLanguage === item.type ? '#FFFF' : 'black',
            },
          ]}>
          {item.text}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.SalectLanguage}>{t('SalectLanguage')}</Text>
      <View style={{flex: 1}}>
        <FlatList
          contentContainerStyle={styles.flatList}
          data={data}
          renderItem={renderItem}
        />
      </View>
      {/* <ButtonComp
          onPress={() => navigation.navigate('LoginScreen')}
          btnText={'SalectLanguage'}
        /> */}
      <ButtonWithLoader
        text="SalectLanguage"
        onPress={() => {
            navigation.navigate('Login');
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
  flatList: {
    // marginHorizontal: 10,
    // flex: 1,
  },

  selected: {
    marginHorizontal: 10,
    marginVertical: 20,
    paddingVertical: 10,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'orange',
  },

  unselected: {
    marginHorizontal: 10,
    marginVertical: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    // alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: 'orange',
  },
  langTxt: {
    // fontFamily:'',
    fontSize: 20,
    fontWeight: 'bold',
  },
  SalectLanguage: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF',
    // alignSelf:'center'
  },
});

//make this component available to the app
export default SalectLanguage;
