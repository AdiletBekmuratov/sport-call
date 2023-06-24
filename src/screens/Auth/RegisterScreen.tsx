import { zodResolver } from '@hookform/resolvers/zod';
import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, Input, TextButton } from '@/components/ui';
import tw from '@/config/twrnc';
import { useAppDispatch } from '@/redux/hooks';
import { register } from '@/redux/slices/auth';
import { AuthStackScreenProps, RegisterFormData, RegisterSchema } from '@/types/index';

export const RegisterScreen: FC<AuthStackScreenProps<'RegisterScreen'>> = ({ navigation }) => {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      firstname: '',
      lastname: '',
      phone: '',
      password: '',
      confirm: '',
    },
  });
  const onSubmit = handleSubmit((data) => {
    dispatch(register(data));
  });

  return (
    <SafeAreaView style={tw`flex-1 p-5 bg-gray-100 w-full`}>
      <Text style={tw`text-3xl font-bold mt-12`}>Давайте познакомимся!</Text>
      <Text style={tw`text-lg font-medium text-gray-500 mt-2`}>Создайте Ваш новый аккаунт</Text>
      <ScrollView>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Email"
              label="Email"
              onBlur={onBlur}
              onChangeText={(val) => onChange(val.trim())}
              value={value}
              errorText={errors.email?.message}
              activeColor="border-gray-300"
              style="mt-8"
            />
          )}
        />
        <Controller
          control={control}
          name="firstname"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Имя"
              label="Имя"
              onBlur={onBlur}
              onChangeText={(val) => onChange(val.trim())}
              value={value}
              errorText={errors.firstname?.message}
              activeColor="border-gray-300"
              style="mt-4"
            />
          )}
        />
        <Controller
          control={control}
          name="lastname"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Фамилия"
              label="Фамилия"
              onBlur={onBlur}
              onChangeText={(val) => onChange(val.trim())}
              value={value}
              errorText={errors.lastname?.message}
              activeColor="border-gray-300"
              style="mt-4"
            />
          )}
        />
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="+7 (___) ___ ____"
              label="Телефон"
              onBlur={onBlur}
              mask="+7 (999) 999 9999"
              onChangeText={(val) => onChange(val.trim())}
              value={value}
              errorText={errors.phone?.message}
              activeColor="border-gray-300"
              style="mt-4"
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Пароль"
              label="Пароль"
              style="mt-4"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorText={errors.password?.message}
              activeColor="border-gray-300"
            />
          )}
        />
        <Controller
          control={control}
          name="confirm"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Подтверждение пароля"
              label="Подтверждение пароля"
              style="mt-4"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorText={errors.confirm?.message}
              activeColor="border-gray-300"
            />
          )}
        />
      </ScrollView>

      <View style={tw`flex-grow bg-gray-100 mt-4`}>
        <Button style="w-full mt-auto" onPress={onSubmit}>
          Начать
        </Button>
        <TextButton
          containerStyle="mt-4"
          textStyle="text-gray-500 text-center"
          onPress={() => navigation.replace('LoginScreen')}>
          Уже есть аккаунт? <Text style={tw`font-bold text-black`}>Войти</Text>
        </TextButton>
      </View>
    </SafeAreaView>
  );
};
