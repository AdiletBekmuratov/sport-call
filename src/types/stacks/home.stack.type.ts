import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';

import { BottomTabParamList, MainBottomTabsScreenProps } from './bottom.tab.type';

export type HomeStackParamList = {
  HomeScreen: undefined;
  MakesScreen: undefined;
  VehicleScreen: { vehicle: { id: number; title: string } };
  VehiclesScreen: { filters?: string; title?: string };
};

export type HomeStackScreenProps<T extends keyof HomeStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeStackParamList, T>,
  MainBottomTabsScreenProps<keyof BottomTabParamList>
>;
