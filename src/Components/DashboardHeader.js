import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import {
  responsiveFontSize,
  widthPercentageToDP,
  heightPercentageToDP,
} from '../commonStyleSheet/ResponsiveSize';
import {flexVariable} from '../commonStyleSheet/FlexVariable';
import Colors from '../commonStyleSheet/Color';
import Fonts from '../commonStyleSheet/Fonts ';
import {useSelector} from 'react-redux';

const DashboardHeader = ({
  title,
  leftIcon,
  rightIcon,
  // onClickLeftIcon,
  onClickRightIcon,
  Style,
  isCart
}) => {
  const navigation = useNavigation();
  const onClickLeftIcon = () => {
    navigation.goBack();
  };
  const cartItem = useSelector(state => state.cart);

  return (
    <View>
      <StatusBar backgroundColor="transparent" barStyle={'dark-content'} />
      <View style={[styles.container, {...Style}]}>
        <TouchableOpacity onPress={onClickLeftIcon} activeOpacity={0.9}>
          <Image source={leftIcon} style={[styles.img]} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9}>
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
        {!isCart &&<View/>}
        {isCart &&(
           <TouchableOpacity onPress={onClickRightIcon} activeOpacity={0.9}>
           <Image source={rightIcon} style={[styles.img]} />
           <View
             style={{
               position: 'absolute',
               height: 20,
               width: 20,
               borderRadius: 10,
               backgroundColor: '#fff',
               top: 0,
               right: 0,
               alignItems: 'center',
               justifyContent: 'center',
             }}>
             <Text style={{color: '#000'}}>{cartItem.data.length}</Text>
           </View>
         </TouchableOpacity>
        )}
       
      </View>
    </View>
  );
};

const styles = {
  text: {
    color: Colors.colorBackground,
    fontSize: responsiveFontSize(17),
    textAlign: flexVariable.center,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  container: {
    width: '100%',
    height: 60,
    flexDirection: flexVariable.row,
    alignItems: flexVariable.center,
    backgroundColor: 'blue',
    justifyContent: flexVariable.spaceBetween,
    paddingHorizontal: 10,
    elevation: 3,

    // justifyContent:''
  },
  container1: {},
  textcontainer: {
    height: 50,
    width: '70%',
    alignItems: flexVariable.center,
    justifyContent: flexVariable.center,
  },
  imgcontainer: {
    height: 50,
    justifyContent: flexVariable.center,
  },
  img: {
    width: widthPercentageToDP(5),
    height: heightPercentageToDP(5),
    // marginLeft: widthPercentageToDP(5),
    resizeMode: 'contain',
  },
  main: {
    width: '15%',
    height: 50,
    justifyContent: flexVariable.center,
  },
};

export default DashboardHeader;
