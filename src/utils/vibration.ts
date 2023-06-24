import * as Haptics from 'expo-haptics';

import store from '@/redux/store';

export const vibrateError = () => {
  const isVibrate = store.getState().settings.vibrate;

  if (!isVibrate) {
    return;
  }
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
};

export const onPressVibrate = (callback: any) => {
  const isVibrate = store.getState().settings.vibrate;

  if (!isVibrate) {
    callback();
    return;
  }
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  callback();
};
