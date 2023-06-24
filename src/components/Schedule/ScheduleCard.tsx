import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';

type Props = {
  date?: string;
  title?: string;
  description?: string;
};

export const ScheduleCard: FC<Props> = (props) => {
  return (
    <View style={tw`w-full h-[150px]`}>
      <View style={tw`w-full`}>
        <Text style={tw`w-full text-white font-medium text-xl`}>18 июня, 20:00 ( ПН )</Text>
      </View>
      <View style={tw`w-full flex flex-wrap mt-3 ml-3 border-l-2 border-gray-400 h-[92px]`}>
        <View style={tw`w-[92px] h-full`}>
          <Image source={require('./sport.png')} style={tw`w-full h-full mx-3`} />
        </View>
        <View style={tw`w-full h-full`}>
          <Text style={tw`ml-6 font-bold text-white text-base mb-1.5`}>Любительская лига</Text>
          <View style={tw`ml-6`}>
            <Text style={tw`text-white text-base mb-1.5`}>Место: Название места</Text>
            <Text style={tw`text-white text-base`}>
              {`Игра в футбол, 5 команд по 11 игроков`.slice(0, 23) + '...'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
