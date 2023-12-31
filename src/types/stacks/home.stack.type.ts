import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';

import { BottomTabParamList, MainBottomTabsScreenProps } from './bottom.tab.type';
import { IEvent } from '../create-event.type';

export type HomeStackParamList = {
  HomeScreen: undefined;
  EventDetailsScreen: IEvent;
  CreateEventScreen: undefined;
  PartyScreen: undefined;
  TeamScreen: undefined;
  ListOfMembers: undefined;
};

export type HomeStackScreenProps<T extends keyof HomeStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeStackParamList, T>,
  MainBottomTabsScreenProps<keyof BottomTabParamList>
>;
