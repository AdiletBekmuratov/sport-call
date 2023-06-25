import { useState, FC } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import tw from 'twrnc';

import { Users } from './Users';
import { Button } from '../ui';

const arrow = require('@/assets/Arrow.png');

type Props = {
  users?: {
    name: string;
    id: number;
  };
  teamId?: number;
};

export const TeamAccordion: FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={tw`border mb-5 border-white rounded-2xl w-full p-5 `}>
      <View style={tw`w-full flex flex-row justify-between items-center`}>
        <View>
          <Text style={tw`w-full text-white font-bold text-base`}>Название команды</Text>
          <Text style={tw`w-full mt-1.5 opacity-80 text-white font-bold text-base`}>5 человек</Text>
        </View>
        <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={tw`w-6 h-3`}>
          <Image style={tw`w-full h-full`} source={arrow} />
        </TouchableOpacity>
      </View>

      {isOpen && (
        <>
          <View style={tw`w-full flex mt-4 h-[500px] `}>
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
    </View>
  );
};
