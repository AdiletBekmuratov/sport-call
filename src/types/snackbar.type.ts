import { GestureResponderEvent } from 'react-native';

export interface ISnackbar {
  message: string;
  action: {
    text: string;
    textColor?: string;
    onPress: (event: GestureResponderEvent) => void;
  } | null;
}
