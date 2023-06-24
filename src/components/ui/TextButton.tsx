import React, { FC, ReactNode } from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';

import tw from '@/config/twrnc';
import { onPressVibrate } from '@/utils/vibration';

interface ITextButtonProps {
  children?: ReactNode;
  onPress: (event: GestureResponderEvent) => void;
  textStyle?: string;
  containerStyle?: string;
  disabled?: boolean;
}

export const TextButton: FC<ITextButtonProps> = ({
  children,
  disabled,
  onPress,
  textStyle = '',
  containerStyle = '',
}) => {
  return (
    <TouchableOpacity
      style={tw`${containerStyle}`}
      onPress={() => onPressVibrate(onPress)}
      activeOpacity={0.5}
      disabled={disabled}>
      <Text style={tw`${textStyle}`}>{children}</Text>
    </TouchableOpacity>
  );
};
