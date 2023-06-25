import React, { FC, useState } from 'react';
import { FlatList, View } from 'react-native';

import { EventCard } from '@/components/Home/EventCard';
import { Input } from '@/components/ui';
import tw from '@/config/twrnc';
import { useFindAllEventsQuery } from '@/redux/services/event.service';
import { FavouritesStackScreenProps } from '@/types/index';

export const FavouritesScreen: FC<FavouritesStackScreenProps<'FavouritesScreen'>> = ({
  navigation,
}) => {
  const [search, setSearch] = useState('');
  const { data = [], isLoading } = useFindAllEventsQuery();

  const handleSearch = (text: string) => {
    setSearch(text);
  };
  return (
    <View style={tw`flex-1 bg-black w-full p-5 gap-4`}>
      <Input placeholder="Поиск" value={search} onChangeText={handleSearch} />
      <FlatList
        refreshing={isLoading}
        contentContainerStyle={tw`gap-6`}
        data={[...data].reverse()}
        renderItem={({ item }) => <EventCard navigation={navigation} {...item} />}
      />
    </View>
  );
};
