import React, { FC } from 'react';
import { View } from 'react-native';

import { TextButton } from '@/components/ui';
import tw from '@/config/twrnc';
import { HomeStackScreenProps } from '@/types/index';

export const HomeScreen: FC<HomeStackScreenProps<'HomeScreen'>> = ({ navigation }) => {
  return (
    <View style={tw`flex-1 bg-gray-100 w-full p-5`}>
      <TextButton onPress={() => {}}>Hello</TextButton>
    </View>
  );
};
