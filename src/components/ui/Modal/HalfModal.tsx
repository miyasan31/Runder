import type { FC, ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

import { View } from '~/components/ui/View';
import { useThemeColor } from '~/hooks/useThemeColor';

type Props = {
  children: ReactNode;
  size?: 0.9 | 0.7 | 0.5 | 0.3;
  isVisible: boolean;
  onCloseModal: () => void;
};

export const HalfModal: FC<Props> = ({ children, size = 0.7, isVisible, onCloseModal }) => {
  const backdropColor = useThemeColor({}, 'primary');

  return (
    <Modal
      isVisible={isVisible}
      coverScreen
      animationIn="slideInUp"
      propagateSwipe
      swipeDirection={['down']}
      useNativeDriverForBackdrop
      onSwipeComplete={onCloseModal}
      onBackdropPress={onCloseModal}
      style={defaultStyle.modal}
      backdropColor={backdropColor}
    >
      <View style={[defaultStyle.modal_box, { flex: size }]} bg="bg1">
        <View style={defaultStyle.handle_box}>
          <View style={defaultStyle.handle} bg="bg3" />
        </View>
        {children}
      </View>
    </Modal>
  );
};

const defaultStyle = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modal_box: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  handle_box: {
    alignItems: 'center',
  },
  handle: {
    width: '25%',
    height: 8,
    borderRadius: 999,
    marginVertical: 10,
  },
});
