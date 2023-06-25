import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeStackParamList } from '../types';

import { Header } from '@/components/Header';
import {
  CreateEventScreen,
  EventDetailsScreen,
  HomeScreen,
  ListOfMembers,
  PartyScreen,
  TeamScreen,
} from '@/screens/Home';

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
      <Stack.Screen
        name="PartyScreen"
        options={{
          title: 'Создание команды',
        }}
        component={PartyScreen}
      />
      <Stack.Screen
        name="TeamScreen"
        options={{
          title: 'Оплата',
        }}
        component={TeamScreen}
      />
      <Stack.Screen
        name="ListOfMembers"
        options={{
          title: 'Список участников',
        }}
        component={ListOfMembers}
      />
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
