import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

import React from 'react';

import { PartyScreen } from '@/screens/Party';

const Stack = createNativeStackNavigator();

const PartyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="PartyScreen"
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
      }}>
      <Stack.Screen
        options={{
          title: 'Создание команды',
        }}
        name="PartyScreen"
        component={PartyScreen}
      />
    </Stack.Navigator>
  );
};

export default PartyStack;
