import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Header } from '@/components/Header';
import { FavouritesScreen } from '@/screens/Favourites';
import { FavouritesStackParamList } from '@/types/stacks/favourites.stack.type';

const Stack = createNativeStackNavigator<FavouritesStackParamList>();

export default function FavouritesStack() {
  return (
    <Stack.Navigator
      initialRouteName="FavouritesScreen"
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
        name="FavouritesScreen"
        options={{ title: 'События' }}
        component={FavouritesScreen}
      />
    </Stack.Navigator>
  );
}
