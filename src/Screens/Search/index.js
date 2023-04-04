//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../../commonStyleSheet/Color';
import Fonts from '../../commonStyleSheet/Fonts ';
import {
  heightPercentageToDP,
  responsiveFontSize,
  responsiveVerticalSize,
  widthPercentageToDP,
} from '../../commonStyleSheet/ResponsiveSize';
import DashboardHeader from '../../Components/DashboardHeader';
const Search = () => {
  const products = useSelector(state => state);
  const [search, setSearch] = useState('');
  const [searchedList, setSearchedList] = useState(oldData);
  const [oldData, setOldData] = useState(products.product.data);
  const filterData = text => {
    let newData = oldData.filter(item => {
      return item.title.toLowerCase().match(text.toLowerCase());
    });
    // console.log('----newData----', newData);
    setSearchedList(newData);
  };
  return (
    <View style={styles.container}>
      <DashboardHeader title={'products'} />
      <View style={{flex: 1, marginHorizontal: 10}}>
        <View style={styles.SearchView}>
          <Image
            style={styles.Searchicon}
            source={require('../../assets/images/Search.png')}
          />
          <TextInput
            style={styles.TextInput}
            placeholder="Search item here..."
            value={search}
            onChangeText={text => {
              setSearch(text);
              filterData(text);
            }}
          />
          {search !== '' && (
            <TouchableOpacity
              onPress={() => {
                setSearch('');
                filterData('');
              }}>
              <Image
                style={styles.close_btn}
                source={require('../../assets/images/close_btn.png')}
              />
            </TouchableOpacity>
          )}
        </View>
        <FlatList
          data={searchedList}
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
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  SearchView: {
    borderWidth: 1,
    borderRadius: 10,
    // width: '90%',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  Searchicon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    marginStart: 10,
  },
  close_btn: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    marginEnd: 10,
  },
  TextInput: {
    flex: 1,
    marginStart: 10,
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
export default Search;
