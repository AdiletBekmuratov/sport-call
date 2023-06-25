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
      username: '',
      password: '',
      confirm: '',
    },
  });
  const onSubmit = handleSubmit((data) => {
    dispatch(register(data));
  });

  return (
    <SafeAreaView style={tw`flex-1 p-4 bg-black w-full`}>
      <Text style={tw`text-3xl text-white font-bold mt-12`}>Давайте познакомимся!</Text>
      <Text style={tw`text-lg font-medium text-gray-300 mt-2`}>Создайте Ваш новый аккаунт</Text>
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
              style="mt-8"
            />
          )}
        />
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Имя"
              label="Имя"
              onBlur={onBlur}
              onChangeText={(val) => onChange(val.trim())}
              value={value}
              errorText={errors.username?.message}
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
            />
          )}
        />
      </ScrollView>

      <View style={tw`flex-grow bg-black mt-4`}>
        <Button style="w-full mt-auto bg-[#D0FD3E]" onPress={onSubmit}>
          Начать
        </Button>
        <TextButton
          containerStyle="mt-4"
          textStyle="text-gray-300 text-center"
          onPress={() => navigation.replace('LoginScreen')}>
          Уже есть аккаунт? <Text style={tw`font-bold text-white`}>Войти</Text>
        </TextButton>
      </View>
    </SafeAreaView>
  );
};
