import { ScheduleScreen } from '@/screens/Schedule';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator<any>();

export const ScheduleStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ScheduleScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTitleStyle: {
          color: '#FFFFFF',
        },
      }}>
      <Stack.Screen
        name="ScheduleScreen"
        options={{ title: 'Расписание' }}
        component={ScheduleScreen}
      />
    </Stack.Navigator>
  );
};
