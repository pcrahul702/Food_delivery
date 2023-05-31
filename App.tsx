import react from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native';
import { colors } from './src/global/Style';
import RootNevigaters from './src/navigation/RootNevigators'
import 'react-native-gesture-handler';


export default function App(){
  return(
    <View style={styles.container}>
      
      <StatusBar
      barStyle='light-content'
      backgroundColor={colors.statusbar}
      />
     
      <RootNevigaters/>
      
    </View>

  )
}
const styles=StyleSheet.create({
  container:{flex:1}
})