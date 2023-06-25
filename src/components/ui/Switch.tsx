import React, { FC } from 'react';
import { Switch as SwitchNative, SwitchProps } from 'react-native';

export const Switch: FC<SwitchProps> = (props) => {
  return (
    <SwitchNative
      thumbColor={props.value ? '#D0FD3E' : '#D0FD3E'}
      trackColor={{ false: '#d1d5db', true: '#4b5563' }}
      {...props}
    />
  );
};
