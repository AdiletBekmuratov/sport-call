import { FC } from 'react';
import { ActivityIndicator, View, ViewProps } from 'react-native';

import tw from '@/config/twrnc';

type SpinnerProps = {
  style?: string;
  pointerEvents?: ViewProps['pointerEvents'];
};

const Spinner: FC<SpinnerProps> = ({ style = '', pointerEvents }) => (
  <View
    pointerEvents={pointerEvents}
    style={tw`flex-1 justify-center items-center absolute inset-0 bg-gray-100 z-50 ${style}`}>
    <ActivityIndicator size="large" color="#000000" />
  </View>
);

export default Spinner;
