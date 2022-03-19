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

type Props = {
  id: number;
};

type Status = {
  isModalVisible: boolean;
  activeTabIndex: number;
};

export const DetailViewButtonGroup: FC<Props> = ({ id }) => {
  const [status, setStatus] = useState<Status>({
    isModalVisible: false,
    activeTabIndex: 0,
  });

  const onOpenModal = useCallback(async (index: number) => {
    setStatus({
      isModalVisible: true,
      activeTabIndex: index,
    });
  }, []);

  const onCloseModal = useCallback(() => {
    setStatus((prev) => ({ ...prev, isModalVisible: false }));
  }, []);

  return (
    <>
      <View style={style.button_group}>
        {button.map((item) => (
          <Button
            key={item.index}
            label={item.label}
            bg="bg2"
            isBorder
            textStyle={style.button_text}
            viewStyle={style.button_bg}
            outlineStyle={style.button_outline}
            onPress={() => onOpenModal(item.index)}
          />
        ))}
      </View>

      {status.isModalVisible ? (
        <TournamentDetailModal
          id={id}
          isVisible={status.isModalVisible}
          activeTabIndex={status.activeTabIndex}
          onCloseModal={onCloseModal}
        />
      ) : null}
    </>
  );
};

const style = StyleSheet.create({
  button_group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '6%',
  },
  button_outline: {
    width: '31%',
  },
  button_bg: {
    paddingVertical: 12,
  },
  button_text: {
    fontSize: 15,
  },
});
