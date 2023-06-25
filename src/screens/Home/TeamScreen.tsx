import { useEffect, useState, FC } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
//@ts-ignore
import ProgressBar from 'react-native-progress/Bar';

import tw from 'twrnc';

import { Button, Input } from '@/components/ui';
import { Users } from '@/components/Home';

export const TeamScreen: FC = (props: any) => {
  const [teamName, setTeamName] = useState(props.route.params.name);

  return (
    <View style={tw`flex-1 bg-black`}>
      <Text>TeamScreen</Text>
    </View>
  );
};
