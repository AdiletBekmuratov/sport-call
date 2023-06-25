import { useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
//@ts-ignore
import ProgressBar from 'react-native-progress/Bar';
import tw from 'twrnc';

import { Users } from '@/components/Home';
import { Button, Input } from '@/components/ui';

const width = Dimensions.get('screen').width;

export const PartyScreen = ({ navigation }: { navigation: any }) => {
  const [teamName, setTeamName] = useState('');

  const handleTeamName = (text: string) => {
    setTeamName(text);
  };

  return (
    <>
      <View style={tw` flex-1 bg-black w-full p-4 gap-4`}>
        <View style={tw`flex   w-full h-[148px] justify-center items-center `}>
          <View
            style={tw`flex items-center h-[68px] w-[159px] border border-white rounded-xl mt-16`}>
            <Text style={tw`text-white opacity-60 text-base`}>Team PIN:</Text>
            <Text style={tw`text-white text-2xl font-bold`}>876589</Text>
          </View>
          <View style={tw`w-full mt-5`}>
            <Text style={tw`text-xl text-white text-center`}>Осталось: 2 места</Text>
            <ProgressBar
              width={width - 30}
              progress={0.8}
              height={16}
              style={tw`rounded-full`}
              borderWidth={0}
              color="#D0FD3E"
              unfilledColor="#D0FD3E30"
            />
            <Input
              style="mt-4"
              placeholder="Название команды"
              value={teamName}
              onChangeText={handleTeamName}
            />
          </View>
        </View>
        <ScrollView contentContainerStyle={tw`w-full flex mt-16  flex-1`}>
          <View style={tw`flex flex-wrap flex-row gap-x-12`}>
            <Users name="Beka" />
            <Users name="Beka" />
            <Users name="Beka" />
            <Users name="Beka" />
          </View>
        </ScrollView>
        <View>
          <Button
            customChildren
            style={`bg-[#D0FD3E] `}
            onPress={() => navigation.navigate('ScheduleStack')}>
            <Text style={tw`text-[#111111] font-bold text-xl`}>Регистрация команды</Text>
          </Button>
        </View>
      </View>
    </>
  );
};
