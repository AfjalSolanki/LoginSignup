//import liraries
import {useNavigation} from '@react-navigation/native';
import React, {Component, useState} from 'react';
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
import Fonts from '../../commonStyleSheet/Fonts ';
import {
  heightPercentageToDP,
  responsiveFontSize,
  responsiveVerticalSize,
  widthPercentageToDP,
} from '../../commonStyleSheet/ResponsiveSize';
import DashboardHeader from '../../Components/DashboardHeader';

// create a component
const WishList = () => {
  const navigation = useNavigation();
  const items = useSelector(state => state.wishlist);
  const [wishlistItem, setWishlistItem] = useState(items.data);
  return (
    <View style={styles.container}>
      <DashboardHeader title={'WishList Item'} />
      <FlatList
        data={wishlistItem}
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
                <Text style={styles.price}>{'$' + item.price}</Text>
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
  price: {
    fontSize: responsiveFontSize(17),
    fontFamily: Fonts.POPPINS_BOLD,
    color: 'green',
    marginStart: responsiveVerticalSize(1),
  },
});

//make this component available to the app
export default WishList;
