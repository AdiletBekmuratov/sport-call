import React from 'react';
import { Text, View, Dimensions } from 'react-native';
// @ts-ignore
import ProgressBar from 'react-native-progress/Bar';

import tw from '@/config/twrnc';
import { Button } from '@/components/ui';

const width = Dimensions.get('screen').width;

export const EventDetailsScreen = ({ navigation }: any) => {
  return (
    <View style={tw`flex-1 bg-black w-full p-4 gap-4`}>
      <View style={tw`items-center justify-center gap-2 mb-4`}>
        <Text style={tw`text-white text-2xl font-bold`}>Name of the event</Text>
        <Text style={tw`border rounded-lg border-gray-100/50 text-white p-2`}>20 may 20:00</Text>
      </View>
      <View>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`font-bold text-white text-xl`}>
            Осталось: <Text style={tw`font-normal text-lg`}>2 места</Text>
          </Text>
          <Text style={tw`text-white text-xl py-1 px-2 rounded-lg border border-gray-100/50`}>
            5000T
          </Text>
        </View>
      </View>
      <ProgressBar
        width={width - 40}
        progress={0.3}
        height={16}
        style={tw`rounded-full`}
        borderWidth={0}
        color="#D0FD3E"
        unfilledColor="#D0FD3E30"
      />

      <View style={tw`mt-2`}>
        <Text style={tw`text-white text-xl font-bold`}>Участники</Text>
        <Text style={tw`text-white/80`}>Редактируйте и согласовывайте список гостей!</Text>
        <Button
          style={`bg-[#D0FD3E] mt-5`}
          customChildren
          onPress={() => navigation.navigate('ListOfMembers')}>
          <Text style={tw`font-bold text-[#111] text-base`}>Проверить список</Text>
        </Button>
      </View>

      <View style={tw`gap-2`}>
        <Text style={tw`text-white text-xl font-bold`}>О мероприятии</Text>
        <Text style={tw`text-white/80`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugiat recusandae, harum
          nostrum quia est nulla maiores consequatur ipsum voluptas optio minus saepe quisquam
          obcaecati commodi similique officiis quos iste!
        </Text>
        <View style={tw`flex-row gap-2`}>
          <Text style={tw`bg-white/30 px-3 py-1 rounded-full text-white`}>Hello</Text>
          <Text style={tw`bg-white/30 px-3 py-1 rounded-full text-white`}>Hello</Text>
          <Text style={tw`bg-white/30 px-3 py-1 rounded-full text-white`}>Hello</Text>
        </View>
      </View>
      <Button
        onPress={() => {
          navigation.navigate('PartyScreen');
        }}>
        Записаться
      </Button>
    </View>
  );
};
