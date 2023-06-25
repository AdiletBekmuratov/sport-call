import { FC } from 'react';
import { View, Text, Image } from 'react-native';

import tw from 'twrnc';

const messi = require('../../../assets/Messi.png');

type Props = {
  name?: string;
  isPayed?: boolean;
};

export const Users: FC<Props> = (props) => {
  return (
    <View
      style={tw`w-[88px] h-[97px] ${
        props.isPayed ? 'border border-[#D0FD3E] border-2 rounded-md' : ''
      }`}>
      <Image source={messi} style={tw`w-full h-[73px] rounded-md`} />
      <Text style={tw`text-xs text-[#D0FD3E] text-center`}>{props.name || 'Messi'}</Text>
    </View>
  );
};
