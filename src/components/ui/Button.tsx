import React, { FC, ReactNode } from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import tw from '@/config/twrnc';
import { onPressVibrate } from '@/utils/vibration';

interface IButtonProps {
  children?: ReactNode;
  onPress: (event: GestureResponderEvent) => void;
  style?: string;
  disabled?: boolean;
  loading?: boolean;
  customChildren?: boolean;
  mod?: 'solid' | 'outlined';
}

const solidBtnStyle = 'bg-white';
const outlinedBtnStyle = 'bg-white border border-2 border-black';

export const Button: FC<IButtonProps> = ({
  children,
  onPress,
  style = '',
  disabled,
  loading,
  customChildren,
  mod = 'solid',
}) => {
  if (disabled || loading) {
    return (
      <View
        style={tw`flex flex-row px-4 py-3 rounded-lg items-center justify-center ${
          mod === 'solid' ? solidBtnStyle : outlinedBtnStyle
        } opacity-50 ${style}`}>
        {loading && <ActivityIndicator color="gray" size={16} />}
        {customChildren ? (
          children
        ) : (
          <Text
            style={tw`${mod === 'solid' ? 'text-black' : 'text-white'} ${loading ? 'ml-2' : ''}`}>
            {children}
          </Text>
        )}
      </View>
    );
  }
  return (
    <TouchableOpacity
      style={tw`px-4 py-3 rounded-lg items-center ${
        mod === 'solid' ? solidBtnStyle : outlinedBtnStyle
      } ${style}`}
      onPress={() => onPressVibrate(onPress)}
      activeOpacity={0.5}
      disabled={disabled}>
      {customChildren ? (
        children
      ) : (
        <Text style={tw`text-white ${mod === 'solid' ? 'text-black' : 'text-white'}`}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
};
