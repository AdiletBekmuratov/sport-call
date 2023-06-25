import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Header } from '@/components/Header';
import { ProfileScreen, ReportScreen } from '@/screens/Profile';
import { ProfileStackParamList } from '@/types/stacks/profile.stack.type';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

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
      <Stack.Screen name="ReportScreen" options={{ title: 'Отчет' }} component={ReportScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
