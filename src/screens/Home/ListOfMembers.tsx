import React, { useState, FC } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import tw from 'twrnc';

import { TeamAccordion } from '@/components/Home';

export const ListOfMembers: FC = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScrollView style={tw`flex-1 bg-black p-4`}>
      <TeamAccordion />
      <TeamAccordion />
      <TeamAccordion />
      {/* <View style={tw`border border-white rounded-2xl  w-full p-5 `}>
        <View style={tw`w-full flex flex-row justify-between items-center`}>
          <View>
            <Text style={tw`w-full text-white font-bold text-base`}>Название команды</Text>
            <Text style={tw`w-full mt-1.5 opacity-80 text-white font-bold text-base`}>
              5 человек
            </Text>
          </View>
          <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={tw`w-6 h-3`}>
            <Image
              style={tw`w-full h-full ${isOpen ? 'rotate-90 transition-all' : ''}`}
              source={arrow}
            />
          </TouchableOpacity>
        </View>

        {isOpen && (
          <>
            <View style={tw`w-full flex mt-4 h-[70%] `}>
              <ScrollView contentContainerStyle={tw`flex flex-wrap flex-row gap-x-6`}>
                <Users name="Beka" />
                <Users name="Beka" />
                <Users name="Beka" />
                <Users name="Beka" />
                <Users name="Beka" />
                <Users name="Beka" />
                <Users name="Beka" />
                <Users name="Beka" />
                <Users name="Beka" />
                <Users name="Beka" />
                <Users name="Beka" />
                <Users name="Beka" />
                <Users name="Beka" />
              </ScrollView>
            </View>
            <View style={tw`w-full gap-y-2`}>
              <Button mod="customOutline" onPress={() => console.log('del team')}>
                Убрать команду
              </Button>
              <Button onPress={() => console.log('confirm')}>Подтвердить</Button>
            </View>
          </>
        )}
      </View> */}
    </ScrollView>
  );
};
