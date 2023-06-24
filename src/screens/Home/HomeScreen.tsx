import React, { FC, useEffect, useState } from 'react';
import { View } from 'react-native';

import { HeaderActionButton } from '@/components/Home';
import { EventCard } from '@/components/Home/EventCard';
import { Input } from '@/components/ui';
import tw from '@/config/twrnc';
import { HomeStackScreenProps } from '@/types/index';

export const HomeScreen: FC<HomeStackScreenProps<'HomeScreen'>> = ({ navigation }) => {
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
      <EventCard navigation={navigation} />
    </View>
  );
};
