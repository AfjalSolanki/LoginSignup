//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Colors from '../../commonStyleSheet/Color';
import {flexVariable} from '../../commonStyleSheet/FlexVariable';
import Fonts from '../../commonStyleSheet/Fonts ';
import {
  heightPercentageToDP,
  responsiveFontSize,
  responsiveVerticalSize,
  widthPercentageToDP,
} from '../../commonStyleSheet/ResponsiveSize';
import BackHeader from '../../Components/BackHeader';
import DashboardHeader from '../../Components/DashboardHeader';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addProducts} from '../../redux/slices/ProductSlices';
// create a component
const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProduct(json);
        json.map(item => {
          item.qty = 1;
        });
        dispatch(addProducts(json));
      });
  };
  return (
    <View style={styles.container}>
      {/* <BackHeader headertitle={'aaaaaaaaaaaaaa'} /> */}
      <DashboardHeader
        rightIcon={require('../../assets/images/shopping-bag.png')}
        title={'BITCOIN WALLET'}
        onClickRightIcon={()=>navigation.navigate('Cart')}
        isCart={true}
      />
      <FlatList
        data={product}
        showsVerticalScrollIndicator={false}
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

  container1: {
    width: '60%',
    // alignSelf: flexVariable.center,
    alignItems: flexVariable.center,
    height: heightPercentageToDP(10),
    justifyContent: flexVariable.center,
    borderRadius: 8,
    marginVertical: heightPercentageToDP(2),
    borderWidth: 2,
    borderColor: '#000000',
    paddingVertical: heightPercentageToDP(1),
  },
  text: {
    fontSize: responsiveFontSize(10),
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.colorBackground,
  },
  Textcss: {},
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
export default Home;
