import React, { useState } from 'react';
import { View } from 'react-native';

import { Button, Input } from '@/components/ui';
import tw from '@/config/twrnc';

export const MyPaymentScreen = ({ navigation }: any) => {
  const [cardNumber, setCardNumber] = useState('');
  const [date, setDate] = useState('');
  const [cvv, setCvv] = useState('');
  return (
    <View style={tw`flex-1 bg-black w-full p-4 gap-4`}>
      <View style={tw`flex-1 gap-4`}>
        <Input
          keyboardType="numeric"
          label="Номер карты*"
          placeholder="0000 0000 0000 0000"
          mask="9999 9999 9999 9999"
          onChangeText={setCardNumber}
          value={cardNumber}
        />
        <Input
          keyboardType="numeric"
          label="Дата*"
          placeholder="**/**"
          mask="99/99"
          onChangeText={setDate}
          value={date}
        />
        <Input
          keyboardType="numeric"
          label="CVV*"
          placeholder="***"
          secureTextEntry
          onChangeText={setCvv}
          value={cvv}
        />
      </View>
      <Button onPress={() => navigation.navigate('ProfileStack')}>Оплатить</Button>
    </View>
  );
};
