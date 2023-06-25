import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';

import { BottomTabParamList, MainBottomTabsScreenProps } from './bottom.tab.type';

export type ProfileStackParamList = {
  ProfileScreen: undefined;
  ReportScreen: undefined;
};

export type ProfileStackScreenProps<T extends keyof ProfileStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<ProfileStackParamList, T>,
  MainBottomTabsScreenProps<keyof BottomTabParamList>
>;
