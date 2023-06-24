import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
        headerTitleStyle: {
          color: '#FFFFFF',
        },
      }}>
      <Stack.Screen
        name="FavouritesScreen"
        options={{ title: 'События' }}
        component={FavouritesScreen}
      />
    </Stack.Navigator>
  );
}
