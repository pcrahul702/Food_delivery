import react from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native';

import { colors } from './src/global/Style';
import SignInScreen from './src/screens/authScreens/SignInScreen';

export default function App(){
  return(
    <View style={styles.container}>
      
      <StatusBar
      barStyle='light-content'
      backgroundColor={colors.statusbar}
      />
      <SignInScreen/>

      
    </View>

  )
}
const styles=StyleSheet.create({
  container:{flex:1}
})