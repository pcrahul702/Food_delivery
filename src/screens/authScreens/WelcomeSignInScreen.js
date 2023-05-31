
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
 
} from 'react-native';
import {colors, parameters, title} from '../../global/Style';
// import AntDesign from "react-native-vector-icons/AntDesign";
import * as Animatable from 'react-native-animatable';
import {Icon, Button,SocialIcon} from 'react-native-elements';
import Swiper from 'react-native-swiper';


export default function WelcomeSignInScreen() {
  return (
    <View style={{flex:1}}>
         <View style={{flex:3,justifyContent:'center',alignItems:'center',padding:20}}>
            <Text style={{fontSize:26,color:colors.buttons,fontweight:'bold'}}>DISCOVER RESTAURANTS</Text>
            <Text style={{fontSize:26,color:colors.buttons,fontweight:'bold'}}>IN OUR AREA</Text>
        </View>
        <View style={{flex:4,justifyContent:'center' }}>
        <Swiper autoplay={true}>
            <View style={styles.slide1}>
             <Image source={{uri:"http://surl.li/hlyas"}}
              style={{height:"100%",width:"100%"}}
             />
             </View>
             <View style={styles.slide2}>
             <Image source={{uri:"http://surl.li/hlybz"}}
              style={{height:"100%",width:"100%"}}
             />
             </View>
             <View style={styles.slide3}>
             <Image source={{uri:"http://surl.li/hlycj"}}
              style={{height:"100%",width:"100%"}}
             />
             </View>
             <View style={styles.slide3}>
             <Image source={{uri:"http://surl.li/hlycx"}}
              style={{height:"100%",width:"100%"}}
             />
             </View>
        </Swiper>
        </View>
        <View style={{flex:4,justifyContent:'flex-end'}}>
        <View style={{marginHorizontal:20,marginVertical:20 ,}}>
        <Button title="SIG IN" titleStyle={parameters.titleStyle}  buttonStyle={parameters.styleButton}/>
      </View>
      <View style={{ marginHorizontal:20,marginBottom:20}}>
      <Button title="Create Account" titleStyle={styles.createButtontitle}  buttonStyle={styles.createButton}/>
      </View> 
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',

    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    createButton:{
      backgroundColor:"white",
      alignContent:"center",
      justifyContent:"center",
      borderRadius:12,
      borderWidth:1,
      borderColor:colors.grey3,
      height:50,
      paddingHorizontal:20,
    },
    createButtontitle:{
      color:colors.grey3,
      fontSize:20,
      alignItems:"center",
      justifyContent:"center",
      marginTop:-3,
    }
});