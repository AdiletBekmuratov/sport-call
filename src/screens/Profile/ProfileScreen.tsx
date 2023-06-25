import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { Button } from '@/components/ui';
import tw from '@/config/twrnc';
import { useAppDispatch } from '@/redux/hooks';
import { logout } from '@/redux/slices/auth';
import { ProfileStackScreenProps } from '@/types/stacks/profile.stack.type';

export const ProfileScreen: FC<ProfileStackScreenProps<'ProfileScreen'>> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <View style={tw`flex-1 bg-black w-full p-4`}>
      <View style={tw`flex flex-row justify-between gap-4`}>
        <View
          style={tw`bg-white bg-opacity-10 flex-1 rounded-lg px-2 py-4 flex justify-center items-center`}>
          <View>
            <Text style={tw`text-xl text-center text-[#D0FD3E]`}>1 </Text>
            <Text style={tw`text-xl text-center text-[#D0FD3E]`}>матчей</Text>
          </View>
        </View>
        <View
          style={tw`bg-white bg-opacity-10 flex-1 rounded-lg px-2 py-4 flex justify-center items-center `}>
          <View>
            <Text style={tw`text-xl text-center text-[#D0FD3E]`}>1 </Text>
            <Text style={tw`text-xl text-center text-[#D0FD3E]`}>организовано</Text>
          </View>
        </View>
      </View>

      <View style={tw`w-full mt-10 flex-1`}>
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
            onPress={() => navigation.navigate('ReportScreen')}
            children="Отчеты событий"
          />
        </View>
      </View>

      <Button onPress={handleLogout} style="bg-red-500">
        Выйти
      </Button>
    </View>
  );
};
