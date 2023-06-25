import { FC } from 'react';
import { View, Text, Image } from 'react-native';

import { Button } from '../ui';

import tw from '@/config/twrnc';

type Props = {
  date?: string;
  title?: string;
  description?: string;
};

export const RequestCard: FC<Props> = (props) => {
  return (
    <View style={tw`w-full h-[248px] mb-5`}>
      <View style={tw`w-full h-[50%] rounded-3xl`}>
        <Image
          style={tw`w-full rounded-3xl h-full`}
          source={require('../../components/Schedule/sport.png')}
        />
      </View>
      <View style={tw`w-full mt-3 h-full`}>
        <Text style={tw`font-bold text-lg text-white`}>Любительская лига </Text>
        <Text style={tw`text-white mb-2 opacity-60`}>Место: Название места</Text>
        <Text style={tw`text-white mb-2 opacity-60`}>18 июня, 20:00 ( ПН )</Text>
        <View style={tw`w-[50%]`}>
          <Button
            mod="solid"
            style="h-[30px] flex justify-center items-center text-black p-0 "
            onPress={() => console.log('pressed')}
            children="Посмотреть заявку"
          />
        </View>
      </View>
    </View>
  );
};
