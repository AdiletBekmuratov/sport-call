import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, Text, View } from 'react-native';

import { Button, Input, Switch } from '@/components/ui';
import tw from '@/config/twrnc';
import { useCreateEventMutation } from '@/redux/services/event.service';
import { CreateEventFormData, CreateEventSchema } from '@/types/create-event.type';

export const CreateEventScreen = () => {
  const [createEvent, { isLoading }] = useCreateEventMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateEventFormData>({
    resolver: zodResolver(CreateEventSchema),
    defaultValues: {
      name: '',
      description: '',
      min_people: 1,
      max_people: 1,
      price: 0,
      fee: 0,
      private: false,
      cases: [],
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    createEvent(data);
  });
  return (
    <View style={tw`flex-1 bg-black w-full p-4 gap-4`}>
      <ScrollView contentContainerStyle={tw`gap-4`}>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Название*"
              placeholder="Название для мероприятия"
              onBlur={onBlur}
              onChangeText={(val) => onChange(val)}
              value={value}
              errorText={errors.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Описание*"
              placeholder="Описание"
              numberOfLine={10}
              multiline
              onBlur={onBlur}
              onChangeText={(val) => onChange(val)}
              value={value}
              errorText={errors.description?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="price"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              keyboardType="numeric"
              label="Цена*"
              placeholder="Цена"
              onBlur={onBlur}
              onChangeText={(val) => onChange(+val)}
              value={value.toString()}
              errorText={errors.price?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="fee"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              keyboardType="numeric"
              label="Фикцированная цена*"
              placeholder="Фикцированная цена"
              onBlur={onBlur}
              onChangeText={(val) => onChange(+val)}
              value={value.toString()}
              errorText={errors.fee?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="min_people"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              keyboardType="numeric"
              label="Минимальное количество человек*"
              placeholder="Минимальное количество человек"
              onBlur={onBlur}
              onChangeText={(val) => onChange(+val)}
              value={value.toString()}
              errorText={errors.min_people?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="max_people"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              keyboardType="numeric"
              label="Максимальное количество человек*"
              placeholder="Максимальное количество человек"
              onBlur={onBlur}
              onChangeText={(val) => onChange(+val)}
              value={value.toString()}
              errorText={errors.max_people?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="cases"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Что будет на мероприятии?*"
              placeholder="Что будет на мероприятии?*"
              onBlur={onBlur}
              onChangeText={(val) => onChange(val.split(','))}
              value={value.join(',')}
              errorText={errors.cases?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="private"
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={tw`flex-row justify-between items-center`}>
              <Text style={tw`text-white`}>Приватный</Text>
              <Switch onValueChange={(value) => onChange(value)} value={value} />
            </View>
          )}
        />
      </ScrollView>

      <Button onPress={onSubmit} style="bg-[#D0FD3E]">
        Далее
      </Button>
    </View>
  );
};
