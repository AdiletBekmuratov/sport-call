import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeStackParamList } from '../types';

import { Header } from '@/components/Header';
import { CreateEventScreen, EventDetailsScreen, HomeScreen } from '@/screens/Home';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
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
      <Stack.Screen name="HomeScreen" options={{ title: 'События' }} component={HomeScreen} />
      <Stack.Screen
        name="EventDetailsScreen"
        options={{
          title: 'Событие',
        }}
        component={EventDetailsScreen}
      />
      <Stack.Screen
        name="CreateEventScreen"
        options={{
          title: 'Новое событие',
        }}
        component={CreateEventScreen}
      />
    </Stack.Navigator>
  );
}
