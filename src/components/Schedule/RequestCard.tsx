import { FC } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import tw from '@/config/twrnc';

type Props = {
  id?: number;
  date?: string;
  title?: string;
  description?: string;
  navigation: any;
  isPayed?: boolean;
};

export const RequestCard: FC<Props> = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('PaymentScreen', {
          teamId: props.id! | 1,
        });
      }}
      style={tw`w-full h-[220px] mb-5`}>
      <View style={tw`w-full h-[160px] rounded-3xl`}>
        <Image
          style={tw`w-full rounded-3xl h-full`}
          source={require('../../components/Schedule/sport.png')}
        />
        <View
          style={tw`absolute flex justify-center items-center w-[152px] h-[36px] top-0 m-4 right-0 rounded-md ${
            props.isPayed ? 'bg-white' : 'bg-[#F5B6EF]'
          }`}>
          <Text style={tw`font-semibold text-base`}>
            {props.isPayed ? 'На подтверждении' : 'Ожидается оплата'}
          </Text>
        </View>
      </View>
      <View style={tw`w-full ml-3 mt-3 h-full`}>
        <Text style={tw`font-bold text-lg text-white`}>Любительская лига </Text>
      </View>
    </TouchableOpacity>
  );
};
