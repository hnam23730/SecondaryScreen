
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Houses from './Screen/Houses';
import Cate from './Screen/Cate';
import BottomBar from './Screen/BottomNavigation';
const Stack = createStackNavigator();

function Navigation() {
  return (
      <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="BottomBar" component={BottomBar} />
          <Stack.Screen options={{headerShown: false}} name="Houses" component={Houses} />
          <Stack.Screen options={{headerShown: false}} name="Cate" component={Cate} />
      </Stack.Navigator>
  );
}

export default Navigation;
