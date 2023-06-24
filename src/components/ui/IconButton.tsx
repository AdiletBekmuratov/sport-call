import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { ComponentProps, FC } from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';

import tw from '@/config/twrnc';
import { onPressVibrate } from '@/utils/vibration';

type MaterialCommunityIconsName = ComponentProps<typeof MaterialCommunityIcons>['name'];

type IconButtonProps = {
  name: MaterialCommunityIconsName;
  onPress?: (event: GestureResponderEvent) => void;
  style?: string;
  disabled?: boolean;
  size?: number;
  color?: string;
};

export const IconButton: FC<IconButtonProps> = ({
  name,
  onPress,
  style = '',
  disabled,
  size = 16,
  color = '#FFFFFF',
}) => {
  return (
    <TouchableOpacity
      style={tw`p-4 rounded-full ${style}`}
      onPress={() => onPressVibrate(onPress)}
      activeOpacity={0.5}
      disabled={disabled}>
      <MaterialCommunityIcons name={name as MaterialCommunityIconsName} color={color} size={size} />
    </TouchableOpacity>
  );
};
