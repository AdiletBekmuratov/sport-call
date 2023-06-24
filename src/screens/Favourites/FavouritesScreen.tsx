import React, { FC, useState } from 'react';
import { View } from 'react-native';

import { EventCard } from '@/components/Home/EventCard';
import { Input } from '@/components/ui';
import tw from '@/config/twrnc';
import { FavouritesStackScreenProps } from '@/types/index';

export const FavouritesScreen: FC<FavouritesStackScreenProps<'FavouritesScreen'>> = ({
  navigation,
}) => {
  const [search, setSearch] = useState('');

  const handleSearch = (text: string) => {
    setSearch(text);
  };
  return (
    <View style={tw`flex-1 bg-black w-full p-5 gap-4`}>
      <Input placeholder="Поиск" value={search} onChangeText={handleSearch} />
      <EventCard navigation={navigation} />
    </View>
  );
};
