import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeStackParamList } from '../types';

import { EventDetailsScreen, HomeScreen } from '@/screens/Home';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTitleStyle: {
          color: '#FFFFFF',
        },
        headerTintColor: '#FFFFFF',
      }}>
      <Stack.Screen name="HomeScreen" options={{ title: 'События' }} component={HomeScreen} />
      <Stack.Screen
        name="EventDetailsScreen"
        options={{
          title: 'Событие',
        }}
        component={EventDetailsScreen}
      />
    </Stack.Navigator>
  );
}
