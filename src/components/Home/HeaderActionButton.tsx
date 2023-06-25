import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { FC } from 'react';
import { View, Text } from 'react-native';

import { Button } from '../ui';

import tw from '@/config/twrnc';
import { HomeStackScreenProps } from '@/types/index';

export const HeaderActionButton: FC<Pick<HomeStackScreenProps<'HomeScreen'>, 'navigation'>> = ({
  navigation,
}) => {
  return (
    <Button onPress={() => navigation.navigate('CreateEventScreen')} customChildren style="py-2">
      <View style={tw`flex-row items-center gap-2`}>
        <MaterialCommunityIcons color="#000000" size={18} name="plus" />
        <Text>Добавить</Text>
      </View>
    </Button>
  );
};
