import type { FC, ReactNode } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

import { View } from '~/components/ui/View';
// import { useThemeColor } from "~/hooks/useThemeColor";

type Props = {
  children: ReactNode;
  isVisible: boolean;
  onCloseModal: () => void;
};

export const RNModal: FC<Props> = ({ children, isVisible, onCloseModal }) => {
  // const backdropColor = useThemeColor({}, "");

  return (
    <Modal
      isVisible={isVisible}
      coverScreen
      animationIn="zoomIn"
      animationInTiming={150}
      animationOut="fadeOut"
      animationOutTiming={150}
      useNativeDriverForBackdrop
      onBackdropPress={onCloseModal}
      style={defaultStyle.modal}
      // backdropColor={backdropColor}
    >
      <View style={[defaultStyle.content]} bg="bg1">
        {children}
      </View>
    </Modal>
  );
};

const defaultStyle = StyleSheet.create({
  modal: {},
  content: {
    borderRadius: 20,
  },
});
