import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';

import { BottomTabParamList, MainBottomTabsScreenProps } from './bottom.tab.type';

export type HomeStackParamList = {
  HomeScreen: undefined;
  EventDetailsScreen: undefined;
  CreateEventScreen: undefined;
};

export type HomeStackScreenProps<T extends keyof HomeStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeStackParamList, T>,
  MainBottomTabsScreenProps<keyof BottomTabParamList>
>;
