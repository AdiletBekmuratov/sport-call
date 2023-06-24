import { MaterialIcons } from '@expo/vector-icons';
import React, { FC } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import tw from '@/config/twrnc';

type RadioButton = {
  id: string;
  label: string;
  value: string;
};

type RadioGroupProps = {
  options: RadioButton[];
  active: string;
  onChange: (text: string) => void;
};

export const RadioGroup: FC<RadioGroupProps> = ({ options, active, onChange }) => {
  return (
    <FlatList
      contentContainerStyle={tw``}
      data={options}
      ItemSeparatorComponent={() => <View style={tw`h-[0.5px] bg-gray-500 my-4`} />}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`py-2 flex-row items-center justify-between`}
          onPress={() => onChange(item.value)}>
          <Text style={tw`text-base`}>{item.label}</Text>
          <MaterialIcons
            name="check"
            size={20}
            color="#fff"
            style={tw`${active === item.value ? 'bg-black' : 'bg-white border'} rounded-full`}
          />
        </TouchableOpacity>
      )}
    />
  );
};
