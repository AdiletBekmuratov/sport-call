import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Header } from '@/components/Header';
import { MyPaymentScreen, PaymentScreen, ScheduleScreen } from '@/screens/Schedule';

const Stack = createNativeStackNavigator<any>();

export const ScheduleStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ScheduleScreen"
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
        name="ScheduleScreen"
        options={{ title: 'Расписание' }}
        component={ScheduleScreen}
      />
      <Stack.Screen
        name="PaymentScreen"
        options={{ title: 'Олпатить' }}
        component={PaymentScreen}
      />
      <Stack.Screen
        name="MyPaymentScreen"
        options={{ title: 'Оплата' }}
        component={MyPaymentScreen}
      />
    </Stack.Navigator>
  );
};
