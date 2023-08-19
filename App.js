import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeBaseProvider, View } from 'native-base';
import AppNavigator from './src/navigation/AppNavigator';
import { useFonts, PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';
import AppLoading from 'expo-app-loading';

export default function App() {
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider>
        <StatusBar style="auto" />
        <AppNavigator />
      </NativeBaseProvider>
    );
  }
}