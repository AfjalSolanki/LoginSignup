import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import {auth} from '../firebase/firebase.config';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="AuthStack" component={AuthStack} />
          <Stack.Screen name="MainStack" component={MainStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
