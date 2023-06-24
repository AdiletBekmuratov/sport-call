import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Header } from '@/components/Header';
import { ProfileScreen } from '@/screens/Profile';

const Stack = createNativeStackNavigator<any>();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerBackTitleVisible: false,
        headerTitleAlign: 'left',
        headerTitleStyle: {
          color: '#FFFFFF',
        },
        headerTintColor: '#FFFFFF',
        headerTitle: Header,
      }}>
      <Stack.Screen
        name="ProfileScreen"
        options={{ title: 'Мой профиль' }}
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
