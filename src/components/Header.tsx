import React, { FC } from 'react';
import { View, Text } from 'react-native';

import tw from '@/config/twrnc';

interface HeaderProps {
  children: string;
  tintColor?: string | undefined;
}

export const Header: FC<HeaderProps> = (props) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Text style={tw`text-white font-bold text-xl`}>{props.children}</Text>
    </View>
  );
};
