import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';

import { TaskList } from '@components';
import { ITask } from '@interfaces';

SplashScreen.preventAutoHideAsync();

export default function () {
  const [fontsLoaded, fontError] = useFonts({
    Regular: Roboto_400Regular,
    Bold: Roboto_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const tasks: ITask[] = [
    {
      id: 1,
      name: 'Talk to William'
    },
    {
      id: 2,
      name: 'Do 5 push ups'
    },
  ];

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <TaskList tasks={tasks}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    fontFamily: 'Bold',
  },
});
