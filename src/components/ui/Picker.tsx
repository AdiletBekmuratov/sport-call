import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { FC } from 'react';
import SelectDropdown from 'react-native-select-dropdown';

import tw from '@/config/twrnc';

type PickerProps = {
  data: any[];
  onSelect: (selectedItem: any, index: number) => void;
  search?: boolean;
  defaultValueByIndex?: number;
  defaultButtonText?: string;
  rowTextForSelection: string;
  buttonTextAfterSelection: string;
  defaultValue: any;
};

export const Picker: FC<PickerProps> = ({
  data,
  onSelect,
  search,
  defaultValueByIndex,
  defaultButtonText,
  buttonTextAfterSelection,
  rowTextForSelection,
  defaultValue,
}) => {
  return (
    <SelectDropdown
      defaultValue={defaultValue}
      data={data}
      defaultButtonText={defaultButtonText}
      defaultValueByIndex={defaultValueByIndex}
      buttonTextAfterSelection={(selectedItem) => selectedItem[buttonTextAfterSelection]}
      rowTextForSelection={(item) => item[rowTextForSelection]}
      renderDropdownIcon={(isOpened) => (
        <MaterialCommunityIcons
          name={isOpened ? 'chevron-up' : 'chevron-down'}
          color="#444"
          size={26}
        />
      )}
      buttonStyle={tw`rounded-lg bg-white border border-2 border-black w-full`}
      buttonTextStyle={tw`text-black`}
      onSelect={onSelect}
      dropdownStyle={tw`bg-white rounded-lg`}
      search={search}
      searchPlaceHolder="Поиск"
    />
  );
};
