import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeStackParamList } from '../types';

import { HomeScreen } from '@/screens/Home';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" options={{ title: 'Главная' }} component={HomeScreen} />
    </Stack.Navigator>
  );
}
