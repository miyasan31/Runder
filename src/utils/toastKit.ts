/* eslint-disable no-shadow */
import { toast } from 'react-hot-toast/src/core/toast';

export const toastKit = (loadingText = '処理中...', { icon = '💁‍♂️' } = {}) => {
  const id = toast.loading(loadingText, {
    icon,
  });

  const errorToast = (
    errorText = 'エラーが発生しました',
    { duration = 4000, icon = '🙅‍♂️' } = {},
  ) => {
    return toast.error(errorText, {
      id,
      icon,
      duration,
    });
  };

  const successToast = (successText: string, { duration = 2000, icon = '🙆‍♂️' } = {}) => {
    return toast.success(successText, {
      id,
      icon,
      duration,
    });
  };

  return { errorToast, successToast };
};
