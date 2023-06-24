import { ProfileScreen } from '@/screens/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator<any>();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTitleStyle: {
          color: '#FFFFFF',
        },
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
