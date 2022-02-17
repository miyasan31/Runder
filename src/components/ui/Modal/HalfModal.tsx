import type { ReactNode, VFC } from 'react';
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

export const HalfModal: VFC<Props> = ({ children, size = 0.7, isVisible, onCloseModal }) => {
  const backdropColor = useThemeColor({}, 'primary');

  return (
    <Modal
      isVisible={isVisible}
      coverScreen
      animationIn="slideInUp"
      swipeDirection={['down']}
      propagateSwipe
      useNativeDriverForBackdrop
      onSwipeComplete={onCloseModal}
      onBackdropPress={onCloseModal}
      style={defaultStyle.modal}
      backdropColor={backdropColor}
    >
      <View style={[defaultStyle.content, { flex: size }]} bgTheme="bg1">
        <View style={defaultStyle.handleWrap}>
          <View style={defaultStyle.handle} bgTheme="bg3" />
        </View>
        {children}
      </View>
    </Modal>
  );
};

const defaultStyle = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  content: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  handleWrap: {
    alignItems: 'center',
  },
  handle: {
    width: '25%',
    height: 8,
    borderRadius: 999,
    marginVertical: 10,
  },
});
