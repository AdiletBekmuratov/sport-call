import { PortalProvider } from '@gorhom/portal';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import store from './src/redux/store';
import NavContainer from './src/screens/NavContainer';

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={store}>
          <PortalProvider>
            <StatusBar style="inverted" />
            <NavContainer />
          </PortalProvider>
        </Provider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
