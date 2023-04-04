// //import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// // create a component
// const Cart = () => {
//     return (
//         <View style={styles.container}>
//             <Text>Cart</Text>
//         </View>
//     );
// };

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#2c3e50',
//     },
// });

// //make this component available to the app
// export default Cart;

//import liraries
import {useNavigation} from '@react-navigation/native';
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

import Fonts from '../../commonStyleSheet/Fonts ';
import {
  heightPercentageToDP,
  responsiveFontSize,
  responsiveVerticalSize,
  widthPercentageToDP,
} from '../../commonStyleSheet/ResponsiveSize';
import DashboardHeader from '../../Components/DashboardHeader';
import {addItemToCart, reduceItemToCart,removeItemfromCart } from '../../redux/slices/CartSlice';

// create a component
const Cart = () => {
  const navigation = useNavigation();
  const items = useSelector(state => state.cart);
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setCartItems(items.data);
  }, [items]);
  return (
    <View style={styles.container}>
      <DashboardHeader title={'WishList Item'} />
      <FlatList
        data={cartItems}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('ProductDetail', {data: item});
              }}
              style={styles.productItem}>
              <Image style={styles.productIcon} source={{uri: item.image}} />
              <View>
                <Text style={styles.title}>
                  {item.title.length < 30
                    ? `${item.title}`
                    : `${item.title.substring(0, 25)}...`}
                </Text>
                <Text numberOfLines={2} style={styles.description}>
                  {item.description.length < 35
                    ? `${item.description}`
                    : `${item.description.substring(0, 32)}...`}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <Text style={styles.price}>{'$' + item.price}</Text>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                      if (item.qty > 1) {
                        dispatch(reduceItemToCart(item));
                      } else {
                        dispatch(removeItemfromCart(index));
                      }
                    }}>
                    <Text style={{fontSize: 18, fontWeight: '800'}}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.qty}>{item.qty}</Text>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                      dispatch(addItemToCart(item));
                    }}>
                    <Text style={{fontSize: 18, fontWeight: '800'}}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productItem: {
    width: Dimensions.get('window').width,
    height: 100,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  productIcon: {
    height: heightPercentageToDP(14),
    width: widthPercentageToDP(14),
    resizeMode: 'contain',
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
export default Cart;
