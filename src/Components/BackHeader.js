import React from 'react';
import {Text, View, Image, TouchableOpacity, StatusBar} from 'react-native';
import {
  responsiveFontSize,
  heightPercentageToDP,
  widthPercentageToDP,
} from '../commonStyleSheet/ResponsiveSize';
import {flexVariable} from '../commonStyleSheet/FlexVariable';
import {useNavigation} from '@react-navigation/native';
import Colors from '../commonStyleSheet/Color';
import Fonts from '../commonStyleSheet/Fonts ';

const BackHeader = props => {
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar backgroundColor={'#F3F4F5'} barStyle="dark-content" />
      <View style={style.container}>
        <View style={style.container1}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.5}
            style={style.backContainer}>
            <Image
              source={require('../assets/images/arrow.png')}
              style={[style.img]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={props.forHomePress}
            style={style.textcontainer}
            activeOpacity={0.9}>
            <Text style={style.text}>{props.headertitle}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const style = {
  container: {
    width: widthPercentageToDP('94%'),
    height: heightPercentageToDP(15),
    justifyContent: flexVariable.center,
    alignSelf: 'center',
  },
  container1: {
    width: widthPercentageToDP('94%'),
    height: heightPercentageToDP(8),
    flexDirection: flexVariable.row,
    justifyContent: 'space-between',
  },
  textcontainer: {
    height: heightPercentageToDP(8),
    width: widthPercentageToDP('75%'),
    alignItems: flexVariable.center,
    justifyContent: flexVariable.center,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  imgcontainer: {
    height: 60,
    justifyContent: flexVariable.center,
  },
  img: {
    width: 30,
    height: 30,
    //marginLeft: 8,
  },
  text: {
    fontSize: responsiveFontSize(20),
    textAlign: flexVariable.center,
    color: Colors.colorBackground,
    fontFamily: Fonts.POPPINS_BOLD,
  },
  backContainer: {
    width: widthPercentageToDP('15%'),
    height: heightPercentageToDP(8),
    justifyContent: flexVariable.center,
    backgroundColor: '#000',
    alignItems: 'center',
    borderRadius: 10,
  },
};

export default BackHeader;
