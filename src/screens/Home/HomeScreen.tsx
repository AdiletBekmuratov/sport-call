import React, { FC, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import { HeaderActionButton } from '@/components/Home';
import { EventCard } from '@/components/Home/EventCard';
import { Input } from '@/components/ui';
import tw from '@/config/twrnc';
import { useFindAllEventsQuery } from '@/redux/services/event.service';
import { HomeStackScreenProps } from '@/types/index';

export const HomeScreen: FC<HomeStackScreenProps<'HomeScreen'>> = ({ navigation }) => {
  const { data = [], isLoading } = useFindAllEventsQuery();
  const [search, setSearch] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderActionButton navigation={navigation} />,
    });
  }, [navigation]);

  const handleSearch = (text: string) => {
    setSearch(text);
  };
  return (
    <View style={tw`flex-1 bg-black w-full p-4 gap-4`}>
      <Input placeholder="Найти событие" value={search} onChangeText={handleSearch} />
      <FlatList
        refreshing={isLoading}
        contentContainerStyle={tw`gap-6`}
        data={[...data].reverse()}
        renderItem={({ item }) => <EventCard navigation={navigation} {...item} />}
      />
    </View>
  );
};
