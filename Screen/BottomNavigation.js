import React, { useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Cate from './Cate';
import Houses from './Houses';
import Saves from './Saves';
import  Icon from "react-native-vector-icons/FontAwesome";
const BottomBar = () => {
    const Tab = createBottomTabNavigator();
    return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
            return <Icon size={20} name='home'/>
          },
        }}
      />
      <Tab.Screen
        name="Collection"
        component={Cate}
        options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
                return <Icon size={20} name='bars'/>
              },
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saves}
        options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
                return <Icon size={20} name='heart-o'/>
              },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Houses}
        options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
                return <Icon size={20} name='search'/>
              },
        }}
      />
    </Tab.Navigator>
    );
};
export default BottomBar;