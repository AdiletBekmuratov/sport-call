import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import tw from 'twrnc';
//@ts-ignore
import ProgressBar from 'react-native-progress/Bar';
import { ScrollView } from 'react-native-gesture-handler';
import { Users } from '@/components/Home';
import { Button } from '@/components/ui';
const width = Dimensions.get('screen').width;

export const PaymentScreen = (props: any) => {
  // console.log();
  const teamId = props.route.params.teamId;
  console.log(teamId);
  return (
    <View style={tw`flex-1 bg-black w-full p-4 gap-4`}>
      <View style={tw`w-full`}>
        <Text style={tw`text-white text-center text-2xl mb-5`}>Оплатили 3/12</Text>
        <ProgressBar
          width={width - 40}
          progress={0.3}
          height={16}
          style={tw`rounded-full`}
          borderWidth={0}
          color="#D0FD3E"
          unfilledColor="#D0FD3E30"
        />
      </View>
      <ScrollView contentContainerStyle={tw`w-full flex mt-16  flex-1`}>
        <View style={tw`flex flex-wrap flex-row gap-x-12`}>
          <Users name="Beka" isPayed />
          <Users name="Beka" />
          <Users name="Beka" />
          <Users name="Beka" />
          <Users name="Beka" isPayed />
          <Users name="Beka" />
          <Users name="Beka" />
          <Users name="Beka" />
          <Users name="Beka" isPayed />
        </View>
      </ScrollView>
      <View style={tw`bottom-0`}>
        <Button
          customChildren
          style="w-full bg-[#D0FD3E]"
          // disabled={true}
          onPress={() => {
            console.log('ОПЛАТИ!');
          }}>
          <Text style={tw`font-bold text-xl`}>Отправить оплату команды</Text>
        </Button>
      </View>
    </View>
  );
};
