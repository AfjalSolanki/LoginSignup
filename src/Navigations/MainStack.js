// import React from 'react';

// export default function (Stack) {
//   return (
//     <>

//     </>
//   );
// }

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../Screens/Cart';
import Home from '../Screens/Home/Home';
import ProductDetail from '../Screens/ProductDetail';
import Profile from '../Screens/Profile/Profile';
import Search from '../Screens/Search';
import WishList from '../Screens/WishList';
import Tabe from './Tabe';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tabe" component={Tabe} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="WishList" component={WishList} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default MainStack;
