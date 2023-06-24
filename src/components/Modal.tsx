import { Portal } from '@gorhom/portal';
import React, { FC, ReactNode } from 'react';
import { GestureResponderEvent, Text, TouchableWithoutFeedback, View } from 'react-native';

import { TextButton } from './ui';

import tw from '@/config/twrnc';

type IModalProps = {
  label: string;
  text: string;
  okAction?: (event: GestureResponderEvent) => void;
  cancelAction: (event: GestureResponderEvent) => void;
  okText?: string;
  children?: ReactNode;
  visible: boolean;
};

const Modal: FC<IModalProps> = ({
  label,
  text,
  cancelAction,
  okAction,
  okText,
  children,
  visible,
}) => {
  if (!visible) {
    return <></>;
  }

  return (
    <Portal>
      <TouchableWithoutFeedback style={tw`absolute inset-0 items-center justify-center`}>
        <View style={tw`absolute inset-0 items-center justify-center bg-black/20`}>
          <View style={tw`rounded-lg bg-white`}>
            <View style={tw`p-5`}>
              <Text style={tw`text-xl font-bold`}>{label}</Text>
              <Text style={tw`font-medium text-gray-500 mt-2`}>{text}</Text>
              {children}
            </View>

            <View style={tw`border-t-[0.5px] flex-row justify-between`}>
              <TextButton
                containerStyle={`flex-1 py-5 ${okAction ? 'border-r-[0.5px]' : ''}`}
                textStyle="text-center font-bold text-gray-500"
                onPress={cancelAction}>
                Отмена
              </TextButton>
              {okAction && (
                <TextButton
                  containerStyle="flex-1 py-5"
                  textStyle="text-center font-bold"
                  onPress={okAction}>
                  {okText ?? 'OK'}
                </TextButton>
              )}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Portal>
  );
};

export default Modal;
