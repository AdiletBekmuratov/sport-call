import React, { memo } from 'react';
import { View } from 'react-native';

import tw from '@/config/twrnc';

const Rail = () => {
  return <View style={tw`flex-1 bg-gray-300 h-1 rounded-full`} />;
};

export default memo(Rail);
