import 'react-native-url-polyfill/auto';

import React from 'react';
import { toast } from 'react-hot-toast/src/core/toast';

import { Button } from '~/components/ui/Button';
import { toastKit } from '~/utils/toastKit';

import type { ProfileScreenProps } from './ScreenProps';

export const Profile: ProfileScreenProps = () => {
  const onPress = async () => {
    const { errorToast, successToast } = toastKit();
    // delay 1s
    await new Promise((resolve) => setTimeout(resolve, 2000));
    errorToast();

    await new Promise((resolve) => setTimeout(resolve, 2000));
    successToast('成功しました');
  };

  const onPressPromise = async () => {
    const myPromise = new Promise((resolve) => setTimeout(resolve, 2000));
    toast.promise(
      myPromise,
      {
        loading: 'Loading',
        error: 'Error when fetching',
        success: 'Got the data',
      },
      {
        style: {
          minWidth: '250px',
        },
        loading: {
          duration: 3000,
          icon: '🔥',
        },
        error: {
          duration: 3000,
          icon: '🔥',
        },
        success: {
          duration: 3000,
          icon: '🔥',
        },
      },
    );
  };

  return (
    <>
      <Button label="Custome" onPress={onPress} />
      <Button label="Promise" onPress={onPressPromise} />
    </>
  );
};
