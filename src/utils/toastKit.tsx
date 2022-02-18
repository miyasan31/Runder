import { toast } from 'react-hot-toast/src/core/toast';

export const toastKit = (loadingText = '処理中...') => {
  const toastId = toast.loading(loadingText, {
    icon: '⚠️',
  });

  const errorToast = (errorText = 'エラーが発生しました') => {
    return toast.error(errorText, {
      id: toastId,
      icon: '💀',
    });
  };

  const successToast = (successText: string, duration = 2000) => {
    return toast.success(successText, {
      duration: duration,
      id: toastId,
      icon: '🎉',
    });
  };

  return { errorToast, successToast };
};
