// //import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// // create a component
// const CommanHeader = () => {
//     return (
//         <View style={styles.container}>
//             <Text>CommanHeader</Text>
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
// export default CommanHeader;

import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageStyle,
} from 'react-native';
import {COLORS, SIZE, Font, ImagePath} from './theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CommanHeader = ({
  title,
  rightIcon,
  rightImage,
  onPressLeft,
  onPresright,
  rightIconStyle,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={{flex: 0.2}}>
        <TouchableOpacity onPress={onPressLeft}>
          <Image style={styles.back} source={ImagePath.back} />
        </TouchableOpacity>
      </View>
      <Text style={styles.titles}>{title}</Text>
      <View style={{flex: 0.2}}>
        {rightImage && (
          <TouchableOpacity
            onPress={onPresright}
            style={{alignSelf: 'flex-end'}}>
            <Image source={rightIcon} style={rightIconStyle} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default CommanHeader;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: hp(1.5),
  },
  titles: {
    color: COLORS.lightBlack,
    fontSize: SIZE.L,
    fontFamily: Font.semiBold,
    textAlign: 'center',
    flex: 1,
  },
  back: {
    tintColor: COLORS.darkGray,
    height: SIZE.XXXl,
    width:  SIZE.XXXl,
    resizeMode: 'contain',
  },
});
