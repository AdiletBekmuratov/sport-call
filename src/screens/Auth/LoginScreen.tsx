import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Modal from '@/components/Modal';
import { Button, Input, TextButton } from '@/components/ui';
import tw from '@/config/twrnc';
import { useToggle } from '@/hooks/index';
import { useAppDispatch } from '@/redux/hooks';
import { login } from '@/redux/slices/auth';
import { AuthStackScreenProps, LoginFormData, LoginSchema } from '@/types/index';

export const LoginScreen: FC<AuthStackScreenProps<'LoginScreen'>> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const [forgotVisible, toggleForgotVisible] = useToggle(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = handleSubmit((data) => {
    dispatch(login(data));
  });

  return (
    <SafeAreaView style={tw`flex-1 p-5 bg-gray-100 w-full`}>
      <Text style={tw`text-3xl font-bold mt-12`}>Добро пожаловать!</Text>
      <Text style={tw`text-lg font-medium text-gray-500 mt-2`}>Войдите в Ваш аккаунт</Text>
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
      <TextButton
        containerStyle="mt-4"
        textStyle="font-bold text-right"
        onPress={() => toggleForgotVisible()}>
        Забыли пароль?
      </TextButton>

      <View style={tw`flex-grow bg-gray-100 mt-4`}>
        <Button style="w-full mt-auto" onPress={onSubmit}>
          Отправить
        </Button>
        <TextButton
          containerStyle="mt-4"
          textStyle="text-gray-500 text-center"
          onPress={() => navigation.replace('RegisterScreen')}>
          Еще нет аккаунта? <Text style={tw`font-bold text-black`}>Зарегистрироваться</Text>
        </TextButton>
      </View>

      <Modal
        visible={forgotVisible}
        label="Восстановление"
        text="Введите ваш Email для получения ссылки для восстановления"
        okAction={() => console.log('OK')}
        cancelAction={() => toggleForgotVisible()}
        okText="Войти">
        <Input placeholder="Email" style="mt-4" onChangeText={() => {}} />
      </Modal>
    </SafeAreaView>
  );
};
