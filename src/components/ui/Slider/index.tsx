import React, { Dispatch, FC, SetStateAction, useCallback } from 'react';
import { Text, View } from 'react-native';
import RnRangeSlider from 'rn-range-slider';

import Label from './Parts/Label';
import Rail from './Parts/Rail';
import RailSelected from './Parts/RailSelected';
import Thumb from './Parts/Thumb';

import tw from '@/config/twrnc';

type SliderProps = {
  label?: string;
  setValue: Dispatch<SetStateAction<any>>;
  step: number;
  min: number;
  max: number;
};

export const Slider: FC<SliderProps> = ({ label, setValue, max, min, step }) => {
  const renderLabel = useCallback((value: number) => <Label text={value} />, []);
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const handleValueChange = useCallback((low: number, high: number) => {
    setValue([low, high]);
  }, []);

  return (
    <View>
      {label && <Text style={tw`mb-2 font-bold`}>{label}</Text>}
      <RnRangeSlider
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderThumb={renderThumb}
        renderLabel={renderLabel}
        step={step}
        min={min}
        max={max}
        onValueChanged={handleValueChange}
      />
      <View style={tw`flex flex-row justify-between items-center w-full mt-2`}>
        <Text style={tw`text-gray-400`}>{min}</Text>
        <Text style={tw`text-gray-400`}>{max}</Text>
      </View>
    </View>
  );
};
