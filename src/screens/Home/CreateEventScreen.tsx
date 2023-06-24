import React from 'react';
import { ScrollView, View } from 'react-native';

import { Button, Input } from '@/components/ui';
import tw from '@/config/twrnc';

export const CreateEventScreen = () => {
  return (
    <View style={tw`flex-1 bg-black w-full p-4 gap-4`}>
      <ScrollView contentContainerStyle={tw`gap-4`}>
        <Input
          label="Название*"
          placeholder="Название для мероприятия"
          onChangeText={(text) => console.log(text)}
        />
        <Input
          label="Описание*"
          placeholder="Описание"
          numberOfLine={10}
          multiline
          onChangeText={(text) => console.log(text)}
        />
        <Input
          keyboardType="numeric"
          label="Минимальное количество человек*"
          placeholder="Минимальное количество человек"
          onChangeText={(text) => console.log(text)}
        />
        <Input
          label="Что будет на мероприятии?*"
          placeholder="Введите для добавления"
          onChangeText={(text) => console.log(text)}
        />
      </ScrollView>

      <Button onPress={() => {}} style="bg-[#D0FD3E]">
        Далее
      </Button>
    </View>
  );
};
