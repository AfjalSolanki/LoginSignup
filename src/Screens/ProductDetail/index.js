//import liraries
import {useRoute} from '@react-navigation/native';
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Fonts from '../../commonStyleSheet/Fonts ';
import {
  heightPercentageToDP,
  responsiveFontSize,
  responsiveVerticalSize,
  widthPercentageToDP,
} from '../../commonStyleSheet/ResponsiveSize';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import DashboardHeader from '../../Components/DashboardHeader';
import {useDispatch} from 'react-redux';
import {addItemToWishList} from '../../redux/slices/WishlistSlices';
import {addItemToCart} from '../../redux/slices/CartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AskFromLoginModal from '../../Components/AskFromLoginModal';

// create a component
const ProductDetail = ({navigation}) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [madalVisible, setMadalVisible] = useState(false);

  const chackUserStatus = async () => {
    let isUserLoggedIn = false;
    const status = await AsyncStorage.getItem('IS_USER_LOGGED_IN');

    if (status == null) {
      isUserLoggedIn = false;
    } else {
      isUserLoggedIn = true;
    }
    console.log(isUserLoggedIn);
    return isUserLoggedIn;
  };
  return (
    <View style={styles.container}>
      <DashboardHeader
        rightIcon={require('../../assets/images/shopping-bag.png')}
        title={'Product Detail'}
        leftIcon={require('../../assets/images/arrow.png')}
        isCart={true}
      />
      <ScrollView>
        <Image
          style={styles.productIcon}
          source={{uri: route.params.data.image}}
        />
        <Text style={styles.title}>
          {route.params.data.title.length < 30
            ? `${route.params.data.title}`
            : `${route.params.data.title.substring(0, 30)}...`}
        </Text>
        <Text style={styles.description}>{route.params.data.description}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.price, {color: '#000000'}]}>{'Price'}</Text>
          <Text style={styles.price}>{'$' + route.params.data.price}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            if (chackUserStatus() === true) {
              dispatch(addItemToWishList(route.params.data));
            } else {
              setMadalVisible(true);
            }
          }}
          style={styles.wisvishbtn}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/love.png')}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              if (qty > 1) {
                setQty(qty - 1);
              }
            }}>
            <Text style={{fontSize: 18, fontWeight: '800'}}>-</Text>
          </TouchableOpacity>
          <Text style={styles.qty}>{qty}</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setQty(qty + 1);
            }}>
            <Text style={{fontSize: 18, fontWeight: '800'}}>+</Text>
          </TouchableOpacity>
        </View>

        <ButtonWithLoader
          btnStyle={{marginHorizontal: 10, marginTop: 40}}
          text="Add to Card"
          onPress={() => {
            if (chackUserStatus() === true) {
              dispatch(
                addItemToCart({
                  category: route.params.data.category,
                  description: route.params.data.description,
                  id: route.params.data.id,
                  image: route.params.data.image,
                  price: route.params.data.price,
                  qty: qty,
                  rating: route.params.data.rating,
                  title: route.params.data.title,
                }),
              );
            } else {
              setMadalVisible(true);
            }
          }}
        />
      </ScrollView>
      <AskFromLoginModal
        madalVisible={madalVisible}
        onClose={() => {
          setMadalVisible(false);
        }}
        onPressLogin={() => {
          setMadalVisible(false);
          navigation.replace('AuthStack', {screen: 'Login'});

        }}
        onPressSignup={() => {
          setMadalVisible(false);
          navigation.replace('AuthStack', {screen: 'Signup'});
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // paddingHorizontal:10
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'center',
  },

  productIcon: {
    height: heightPercentageToDP(40),
    width: widthPercentageToDP('100%'),
    resizeMode: 'center',
    marginTop: responsiveVerticalSize(1),
  },
  title: {
    fontSize: responsiveFontSize(17),
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.titleDiscriptionColor,
    marginStart: responsiveVerticalSize(1),
  },
  description: {
    fontSize: responsiveFontSize(15),
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.titleDiscriptionColor,
    marginStart: responsiveVerticalSize(1),
  },
  price: {
    fontSize: responsiveFontSize(17),
    fontFamily: Fonts.POPPINS_BOLD,
    color: 'green',
    marginStart: responsiveVerticalSize(1),
    marginTop: responsiveVerticalSize(2),
  },
  wisvishbtn: {
    position: 'absolute',
    backgroundColor: '#E2DFDF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 45,
    borderRadius: 100,
    right: 20,
    top: 150,
  },
  icon: {
    height: heightPercentageToDP(8),
    width: widthPercentageToDP(8),
    resizeMode: 'center',
  },
  qty: {
    fontSize: responsiveFontSize(15),
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.titleDiscriptionColor,
    marginHorizontal: responsiveVerticalSize(1),
  },
  price: {
    fontSize: responsiveFontSize(17),
    fontFamily: Fonts.POPPINS_BOLD,
    color: 'green',
    marginStart: responsiveVerticalSize(1),
  },
  btn: {
    padding: 5,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 30,
    marginHorizontal: 5,
    marginVertical: 0,
  },
});

//make this component available to the app
export default ProductDetail;
