import React from 'react';
import { Text, View } from 'react-native';

import { Button } from '@/components/ui';
import tw from '@/config/twrnc';

export const ProfileScreen = () => {
  return (
    <View style={tw`flex-1 bg-black w-full p-4`}>
      <View style={tw`flex flex-row justify-between`}>
        <View
          style={tw`bg-white bg-opacity-10 w-[168px] rounded-full px-2 py-5 flex justify-center items-center`}>
          <View>
            <Text style={tw`text-xl text-center text-[#D0FD3E]`}>15 </Text>
            <Text style={tw`text-xl text-center text-[#D0FD3E]`}>матчей</Text>
          </View>
        </View>
        <View
          style={tw`bg-white bg-opacity-10 w-[168px] rounded-full px-2 py-5 flex justify-center items-center `}>
          <View>
            <Text style={tw`text-xl text-center text-[#D0FD3E]`}>8 </Text>
            <Text style={tw`text-xl text-center text-[#D0FD3E]`}>организовано</Text>
          </View>
        </View>
      </View>

      <View style={tw`w-full mt-10`}>
        <View style={tw`mb-5`}>
          <Button
            mod="customOutline"
            onPress={() => console.log('Moe')}
            children="Организованно мной"
          />
        </View>
        <View style={tw`mb-5`}>
          <Button
            mod="customOutline"
            onPress={() => console.log('Report')}
            children="Отчеты событий"
          />
        </View>
      </View>
    </View>
  );
};
