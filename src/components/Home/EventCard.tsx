import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import tw from '@/config/twrnc';
import { HomeStackScreenProps } from '@/types/index';
import { blurhash } from '@/utils/blurhash';

export const EventCard: FC<Pick<HomeStackScreenProps<'HomeScreen'>, 'navigation'>> = ({
  navigation,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('EventDetailsScreen')}>
      <View style={tw`relative`}>
        <Image
          style={tw`rounded-lg w-full h-46`}
          contentFit="cover"
          placeholder={blurhash}
          source="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/176455/s960_Football_gov.uk.jpg"
        />
        <TouchableOpacity style={tw`absolute right-2 top-2`}>
          <View style={tw`bg-white/40 py-2 px-3 rounded-lg items-center`}>
            <MaterialCommunityIcons name="bookmark-outline" color="#FFFFFF" size={24} />
            <Text style={tw`text-xs text-white`}>404</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={tw`px-2 mt-3 gap-2`}>
        <View style={tw`flex-row gap-2 items-center`}>
          <View style={tw`rounded-lg bg-[#D0FD3E] px-2 py-1`}>
            <Text>Food</Text>
          </View>
        </View>
        <Text style={tw`text-white text-xl font-bold`}>Name of the event</Text>
      </View>
    </TouchableOpacity>
  );
};
