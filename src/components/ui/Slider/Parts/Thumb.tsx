import React, { memo } from 'react';
import { View } from 'react-native';

import tw from '@/config/twrnc';

const Thumb = () => {
  return <View style={tw`p-2 rounded-full bg-black border-2 border-gray-100`} />;
};

export default memo(Thumb);
