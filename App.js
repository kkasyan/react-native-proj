import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

import { useRoute } from './router';

export default function App() {
  const routing = useRoute(false);

  const [fontsLoaded] = useFonts({
    thin: require('./assets/fonts/Roboto-Thin.ttf'),
    regular: require('./assets/fonts/Roboto-Regular.ttf'),
    medium: require('./assets/fonts/Roboto-Medium.ttf'),
    interMedium: require('./assets/fonts/Inter-Medium.ttf'),
    bold: require('./assets/fonts/Roboto-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
