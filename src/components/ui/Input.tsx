import React, { FC, useState } from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputFocusEventData,
  View,
} from 'react-native';
import { MaskedTextInput, MaskedTextInputProps } from 'react-native-mask-text';

import { IconButton } from './IconButton';

import tw from '@/config/twrnc';
import { onPressVibrate } from '@/utils/vibration';

interface IInputProps {
  label?: string;
  placeholder: string;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onChangeText: (
    text: string
  ) => void | ((masked: string, unmasked: string, obfuscated: string) => void);
  value?: string;
  errorText?: string;
  style?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  mask?: MaskedTextInputProps['mask'];
  options?: MaskedTextInputProps['options'];
  numberOfLine?: number;
  multiline?: boolean;
}

export const Input: FC<IInputProps> = ({
  label,
  placeholder,
  onBlur,
  onChangeText,
  value,
  errorText,
  style = '',
  secureTextEntry,
  keyboardType,
  numberOfLine,
  mask,
  options,
  multiline = false,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(true);

  const handleTogglePassVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <View style={tw`${style}`}>
      {label && <Text style={tw`mb-0.5 font-bold text-white text-base`}>{label}</Text>}
      <View style={tw`relative bg-white/20 rounded-lg justify-center px-4 py-2`}>
        {mask ? (
          <MaskedTextInput
            mask={mask}
            options={options}
            keyboardType={keyboardType ?? 'default'}
            secureTextEntry={secureTextEntry ? passwordVisible : false}
            style={tw`text-black ${secureTextEntry ? 'pr-10' : ''}`}
            placeholder={placeholder}
            onBlur={handleOnBlur}
            onChangeText={onChangeText}
            value={value}
            numberOfLines={numberOfLine}
            multiline={multiline}
            textAlignVertical={multiline ? 'top' : 'auto'}
          />
        ) : (
          <TextInput
            keyboardType={keyboardType ?? 'default'}
            secureTextEntry={secureTextEntry ? passwordVisible : false}
            style={tw`text-white ${secureTextEntry ? 'pr-10' : ''}`}
            placeholder={placeholder}
            onBlur={handleOnBlur}
            onChangeText={onChangeText}
            value={value}
            placeholderTextColor="#FFFFFF50"
            numberOfLines={numberOfLine}
            multiline={multiline}
            textAlignVertical={multiline ? 'top' : 'auto'}
          />
        )}

        {secureTextEntry && (
          <IconButton
            name={passwordVisible ? 'eye' : 'eye-off'}
            style="absolute right-0"
            onPress={() => onPressVibrate(handleTogglePassVisibility)}
          />
        )}
      </View>

      {errorText && <Text style={tw`text-xs text-red-500 mt-0.5`}>{errorText}</Text>}
    </View>
  );
};
