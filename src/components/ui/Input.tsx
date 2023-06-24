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
  activeColor?: string;
  mask?: MaskedTextInputProps['mask'];
  options?: MaskedTextInputProps['options'];
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
  activeColor,
  mask,
  options,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [onFocus, setOnFocus] = useState(false);

  const handleTogglePassVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setOnFocus(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <View style={tw`${style}`}>
      {label && <Text style={tw`mb-0.5 font-bold`}>{label}</Text>}
      <View
        style={tw`relative border ${
          activeColor && onFocus ? activeColor : 'border-gray-200'
        } rounded-lg justify-center px-4 py-2`}>
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
            onFocus={() => setOnFocus(true)}
          />
        ) : (
          <TextInput
            keyboardType={keyboardType ?? 'default'}
            secureTextEntry={secureTextEntry ? passwordVisible : false}
            style={tw`text-black ${secureTextEntry ? 'pr-10' : ''}`}
            placeholder={placeholder}
            onBlur={handleOnBlur}
            onChangeText={onChangeText}
            value={value}
            onFocus={() => setOnFocus(true)}
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
