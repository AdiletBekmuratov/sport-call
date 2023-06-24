import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';

import { BottomTabParamList, MainBottomTabsScreenProps } from './bottom.tab.type';

export type FavouritesStackParamList = {
  FavouritesScreen: undefined;
};

export type FavouritesStackScreenProps<T extends keyof FavouritesStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<FavouritesStackParamList, T>,
    MainBottomTabsScreenProps<keyof BottomTabParamList>
  >;
