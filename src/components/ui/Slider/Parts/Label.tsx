import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

import tw from '@/config/twrnc';

const Label: FC<{ text: number }> = ({ text }) => {
  return (
    <View style={tw`items-center p-2 rounded-lg bg-gray-200 mb-2 absolute bottom-0 -left-4`}>
      <Text style={tw`text-black text-base`}>{text}</Text>
    </View>
  );
};

export default memo(Label);
