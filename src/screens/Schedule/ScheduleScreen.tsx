import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import tw from '@/config/twrnc';
import { ScheduleCard } from '@/components/Schedule';
import { ScrollView } from 'react-native-gesture-handler';

export const ScheduleScreen = () => {
  const [isPlanned, setIsPlanned] = useState(true);

  return (
    <View style={tw`flex-1 bg-black w-full p-4 gap-4`}>
      <View
        style={tw`w-full h-[60px] bg-white bg-opacity-20 flex flex-row gap-2.5 p-2 rounded-full`}>
        <TouchableOpacity
          onPress={() => setIsPlanned(true)}
          style={tw`w-[164px] h-full rounded-full flex justify-center items-center ${
            isPlanned ? 'bg-[#D0FD3E]' : ''
          }`}>
          <Text
            style={tw`text-[#161616] ${
              isPlanned ? 'text-[#161616]' : 'text-[#D0FD3E]'
            } font-semibold`}>
            Запланировано
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsPlanned(false)}
          style={tw`w-[164px] h-full rounded-full flex justify-center items-center ${
            isPlanned ? '' : 'bg-[#D0FD3E]'
          }`}>
          <Text style={tw` ${!isPlanned ? 'text-[#161616]' : 'text-[#D0FD3E]'} font-semibold`}>
            Заявка
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
      </ScrollView>
    </View>
  );
};
