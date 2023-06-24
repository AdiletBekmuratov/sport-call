import { Portal } from '@gorhom/portal';
import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import tw from '@/config/twrnc';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { clearMessage } from '@/redux/slices/message';

const SnackBar = () => {
  const dispatch = useAppDispatch();
  const { message, action } = useAppSelector((state) => state.message);

  const [visible, setVisible] = useState(false);

  const onDismissSnackBar = () => dispatch(clearMessage());

  useEffect(() => {
    setVisible(message !== null && message !== undefined && message.length > 0);
  }, [message]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (visible) {
      timer = setTimeout(() => {
        setVisible(false);
        onDismissSnackBar();
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [visible]);

  if (!visible) {
    return <></>;
  }

  return (
    <Portal>
      <SafeAreaView style={tw.style(`w-full px-5 items-center absolute inset-0 h-full`)}>
        <View
          style={tw`px-4 py-3 rounded-lg border border-black absolute bottom-8 bg-white flex flex-row justify-between items-center w-full`}>
          <Text style={tw`flex-1`}>{message}</Text>
          {action && (
            <TouchableOpacity onPress={action.onPress} style={tw`bg-gray-100 py-2 px-3 rounded`}>
              <Text style={tw`${action.textColor ?? ''} font-bold`}>{action.text}</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </Portal>
  );
};

export default SnackBar;
