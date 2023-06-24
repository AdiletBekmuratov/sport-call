import MaterialCommunity from '@expo/vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ComponentProps } from 'react';
import { View } from 'react-native';

import HomeStack from './HomeStack';
import { BottomTabParamList } from '../types';

import tw from '@/config/twrnc';
import FavouritesStack from './FavouritesStack';

type MaterialCommunityName = ComponentProps<typeof MaterialCommunity>['name'];

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function MainBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#000000',
          height: 60,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: 'Главная',
          tabBarIcon: ({ focused, color, size }) => {
            const iconName: MaterialCommunityName = 'home-outline';

            return (
              <View style={tw`p-2 rounded-lg ${focused ? 'bg-[#D0FD3E]' : 'bg-transparent'}`}>
                <MaterialCommunity name={iconName} size={size} color={color} />
              </View>
            );
          },
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#FFFFFF',
        }}
      />
      <Tab.Screen
        name="FavouritesStack"
        component={FavouritesStack}
        options={{
          title: 'Сохраненные',
          tabBarIcon: ({ focused, color, size }) => {
            const iconName: MaterialCommunityName = 'bookmark-outline';

            return (
              <View style={tw`p-2 rounded-lg ${focused ? 'bg-[#D0FD3E]' : 'bg-transparent'}`}>
                <MaterialCommunity name={iconName} size={size} color={color} />
              </View>
            );
          },
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#FFFFFF',
        }}
      />
    </Tab.Navigator>
  );
}
