import { StatusBar as SB } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';

import Home from './source/screens/Home';

export default function App() {
  const [loaded]=useFonts({
    Black:require('./source/assets/fonts/AlternateGothicATF-Black.otf'),
    Bold:require('./source/assets/fonts/AlternateGothicATF-Bold.otf'),
    Demi:require('./source/assets/fonts/AlternateGothicATF-Demi.otf'),
    Heavy:require('./source/assets/fonts/AlternateGothicATF-Heavy.otf'),
    Light:require('./source/assets/fonts/AlternateGothicATF-Light.otf'),
    Medium:require('./source/assets/fonts/AlternateGothicATF-Medium.otf'),
    SemiLight:require('./source/assets/fonts/AlternateGothicATF-Semilight.otf'),
    Thin:require('./source/assets/fonts/AlternateGothicATF-Thin.otf'),
    Regular:require('./source/assets/fonts/AlternateGothicATF.otf'),
  })

  if(!loaded){
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Home/>
      <SB style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
});
