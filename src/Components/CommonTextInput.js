import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, Font, SIZE} from '../Components/theme';

const CommonTextInput = ({
  onChange,
  value,
  onBlur,
  keyboardType,
  placeholder,
  icon,
  showIcon,
  inputStyle,
  secureTextEntry,
  onPress,
  maxLength,
  errors,
  touched,
}) => {
  return (
    <>
      <View
        style={[
          styles.container,
          inputStyle,
          {borderColor: errors && touched ? COLORS.orange : COLORS.light},
        ]}>
        <TextInput
          style={[styles.input]}
          onChangeText={onChange}
          value={value}
          keyboardType={keyboardType}
          placeholder={placeholder}
          placeholderTextColor={COLORS.lightGray}
          secureTextEntry={secureTextEntry}
          maxLength={maxLength}
          onBlur={onBlur}
        />
        {icon && (
          <TouchableOpacity onPress={onPress}>
            <Image
              source={showIcon}
              resizeMode={'contain'}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        )}
      </View>
      {errors && touched && <Text style={styles.errorText}>{errors}</Text>}
    </>
  );
};

export default CommonTextInput;

const styles = StyleSheet.create({
  container: {
    height: hp(6),
    width: wp(90),
    borderWidth: 0.8,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(2.5),
  },
  input: {
    flex: 1,
    color: COLORS.black,
    fontSize: SIZE.M,
    fontFamily: Font.mediam,
  },
  iconStyle: {
    height: hp(2.5),
    width: wp(5),
    tintColor: COLORS.gray,
  },
  errorText: {
    fontSize: SIZE.S,
    color: COLORS.orange,
    fontFamily: Font.regular,
  },
});

//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#2c3e50',
//     },
// });

// //make this component available to the app
// export default CommonTextInput;
