import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';

import { HomeStackParamList } from './home.stack.type';

export type BottomTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
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
