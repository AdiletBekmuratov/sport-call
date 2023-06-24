import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';

import { FavouritesStackParamList } from './favourites.stack.type';
import { HomeStackParamList } from './home.stack.type';

export type BottomTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  FavouritesStack: NavigatorScreenParams<FavouritesStackParamList>;
  ScheduleStack: NavigatorScreenParams<any>;
  ProfileStack: NavigatorScreenParams<any>;
};

export type MainBottomTabsScreenProps<T extends keyof BottomTabParamList> = BottomTabScreenProps<
  BottomTabParamList,
  T
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends BottomTabParamList {}
  }
}
