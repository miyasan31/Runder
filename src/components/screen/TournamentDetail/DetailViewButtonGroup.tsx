import type { FC } from 'react';
import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';

import { Button } from '~/components/ui/Button';
import { View } from '~/components/ui/View';

import { TournamentDetailModal } from './modal';

const button = [
  { index: 0, label: 'ルール' },
  { index: 1, label: 'ポイント' },
  { index: 2, label: 'ランキング' },
];

export const DetailViewButtonGroup: FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const onCloseModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  const onOpenModal = useCallback((index: number) => {
    setActiveTabIndex(index);
    setModalVisible(true);
  }, []);

  return (
    <>
      <View style={style.buttonGroup}>
        {button.map((item) => (
          <Button
            key={item.index}
            label={item.label}
            bg="bg2"
            isBorder
            textStyle={style.buttonText}
            viewStyle={style.buttonBg}
            outlineStyle={style.buttonOutline}
            onPress={() => onOpenModal(item.index)}
          />
        ))}
      </View>

      <TournamentDetailModal
        isVisible={isModalVisible}
        activeTabIndex={activeTabIndex}
        onCloseModal={onCloseModal}
      />
    </>
  );
};

const style = StyleSheet.create({
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '6%',
  },
  buttonOutline: {
    width: '31%',
  },
  buttonBg: {
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 15,
  },
});
