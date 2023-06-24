import { Portal } from '@gorhom/portal';
import React, { FC, ReactNode } from 'react';
import { Modal, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import tw from '@/config/twrnc';

type IModalProps = {
  children?: ReactNode;
  visible: boolean;
  onRequestClose: () => void;
};

const FullScreenModal: FC<IModalProps> = ({ children, visible, onRequestClose }) => {
  return (
    <Portal>
      <Modal visible={visible} presentationStyle="fullScreen" onRequestClose={onRequestClose}>
        <TouchableWithoutFeedback style={tw`absolute inset-0 items-center justify-center`}>
          <SafeAreaView style={tw`absolute inset-0 items-center justify-center`}>
            {children}
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </Modal>
    </Portal>
  );
};

export default FullScreenModal;
