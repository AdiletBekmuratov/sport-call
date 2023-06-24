import React, { ReactNode, useEffect, useReducer, useRef } from 'react';
import { Animated, Easing, PanResponder, Text, View, ViewStyle } from 'react-native';

import { IconButton } from './IconButton';

import tw from '@/config/twrnc';

export enum Status {
  Initial = 1,
  Moving = 2,
  Verifying = 3,
  Confirmed = 4,
  Failed = 5,
}

interface Props {
  containerStyle?: ViewStyle;
  renderSlider?: (status: Status) => JSX.Element;
  threshold?: number;
  onSwipeStart?: () => void;
  onConfirm?: () => Promise<any> | void;
  children?: ReactNode;
  onStatusChange?: (status: Status) => void;
}

const initialState = {
  status: Status.Initial,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'UpdateStatus':
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export const SwipeToConfirm = (props: Props) => {
  const {
    containerStyle,
    onSwipeStart,
    onConfirm,
    renderSlider,
    children,
    threshold = 0.5,
    onStatusChange,
  } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const stateRef = useRef(state);
  const setStatus = (s: Status) => {
    dispatch({
      type: 'UpdateStatus',
      payload: s,
    });
  };

  const containerWidthRef = useRef(0);
  const sliderWrapperWidthRef = useRef(0);

  const onSwipeStartRef = useRef(onSwipeStart);
  const onConfirmRef = useRef(onConfirm);
  const moveX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (state.status !== stateRef.current.status) {
      onStatusChange && onStatusChange(state.status);
    }

    stateRef.current = state;
  }, [state]);

  useEffect(() => {
    onSwipeStartRef.current = onSwipeStart;
  }, [onSwipeStart]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        if ([Status.Confirmed, Status.Verifying].includes(stateRef.current.status)) {
          return;
        }

        if (onSwipeStartRef && onSwipeStartRef.current) {
          onSwipeStartRef.current();
        }
        moveX.stopAnimation();
        setStatus(Status.Initial);
      },
      onPanResponderMove: (evt, gestureState) => {
        if ([Status.Confirmed, Status.Verifying].includes(stateRef.current.status)) {
          return;
        }

        setStatus(Status.Moving);
        let dx;
        dx = Math.min(containerWidthRef.current - sliderWrapperWidthRef.current, gestureState.dx);
        dx = Math.max(0, dx);

        moveX.setOffset(dx);
      },
      onPanResponderRelease: (evt, gestureState) => {
        if ([Status.Confirmed, Status.Verifying].includes(stateRef.current.status)) {
          return;
        }
        moveX.stopAnimation();
        moveX.flattenOffset();
        if (gestureState.dx / containerWidthRef.current >= threshold) {
          if (onConfirmRef && onConfirmRef.current) {
            const confirmResult = onConfirmRef.current();
            if (confirmResult && typeof confirmResult.then === 'function') {
              setStatus(Status.Verifying);
              confirmResult
                .then(() => {
                  setStatus(Status.Confirmed);
                })
                .catch(() => {
                  setStatus(Status.Failed);
                });
            }
          } else {
            setStatus(Status.Confirmed);
          }
        } else {
          setStatus(Status.Initial);
        }
      },
    })
  ).current;

  useEffect(() => {
    if (state.status === Status.Moving) {
      return;
    }
    Animated.timing(moveX, {
      toValue: [Status.Confirmed, Status.Verifying].includes(state.status)
        ? containerWidthRef.current - sliderWrapperWidthRef.current
        : 0,
      duration: 400,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  }, [state.status]);

  return (
    <View
      style={[
        tw`w-full rounded-lg bg-black relative items-center justify-center h-12`,
        containerStyle,
      ]}
      onLayout={(event) => (containerWidthRef.current = event.nativeEvent.layout.width)}>
      {children}
      <Animated.View
        style={[
          tw`absolute left-0 top-0`,
          {
            transform: [
              {
                translateX: moveX,
              },
            ],
          },
        ]}
        onLayout={(event: any) => {
          sliderWrapperWidthRef.current = event.nativeEvent.layout.width;
        }}
        {...panResponder.panHandlers}>
        <View style={tw`items-center justify-center`}>
          <View style={tw`w-10 h-10 m-1 bg-white rounded-lg items-center justify-center`}>
            <Text>
              {state.status === Status.Confirmed ? (
                <IconButton name="check" size={10} color="#000" />
              ) : state.status === Status.Verifying ? (
                <IconButton name="timer-sand" size={10} color="#000" />
              ) : (
                <IconButton name="chevron-right" size={10} color="#000" />
              )}
            </Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};
