import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  
  ImageBackground,
} from 'react-native';
import {colors, parameters, title} from '../../global/Style';
// import AntDesign from "react-native-vector-icons/AntDesign";
import * as Animatable from 'react-native-animatable';
import {Icon, Button,SocialIcon} from 'react-native-elements';
import Header from '../../component/Header';

import {useState, useRef} from 'react';
export default function SignInScreen({navigation}) {
  const [textInput2Focused, setTextInput2Focused] = useState(false);
  const textInput1Ref = useRef(1);
  const textInput2Ref = useRef(2);

  return (
    <View style={styles.conatiner}>
      <Header title="My Contact" type="arrowleft" navigation={navigation} />
      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={title}>Sig-In</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Text style={styles.text1}>Please Enter Your Email & Password</Text>
        <Text style={styles.text1}>register with your Account</Text>
      </View>
      <View>
        <View style={{marginTop: 30}}>
          <TextInput
            style={styles.TextInput1}
            placeholder="Email"
            ref={textInput1Ref}
          />
        </View>
        <View style={styles.TextInput2}>
          <Animatable.View
            animation={textInput2Focused ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon
              name="lock"
              iconStyle={{color: colors.grey3}}
              type="material"
            />
          </Animatable.View>
          <TextInput
            placeholder="Password"
            style={{width: '80%'}}
            secureTextEntry
            ref={textInput2Ref}
            onFocus={() => {
              setTextInput2Focused(false);
            }}
            onBlur={() => {
              setTextInput2Focused(true);
            }}
          />
          <Animatable.View
            animation={textInput2Focused ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon
              name="visibility-off"
              iconStyle={{color: colors.grey3}}
              type="material"
              style={{marginRight: 10}}
            />
          </Animatable.View>
        </View>
      </View>
      <View style={{marginHorizontal:20,marginVertical:20}}>
        <Button title="SIG IN" titleStyle={parameters.titleStyle} 
         buttonStyle={parameters.styleButton}
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
         />
      </View>
      
      <View style={{alignItems:"center" ,marginTop:10}}>
        <Text style={{...styles.text1,textDecorationLine:"underline"}}>Forgot Password?</Text>
      </View> 
      <View style={{alignItems:"center" ,marginVertical:10}}>
        <Text style={{...styles.text1,fontSize:20 , fontWeight:'bold'}}>OR</Text>
      </View> 
      <View style={{marginTop:10,marginHorizontal:10}}>
        <SocialIcon type='facebook'
          title='Sign In With Facebook'
          button
          style={styles.SocialIcon}
        />
      </View>
      <View style={{marginTop:10,marginHorizontal:10}}>
      <SocialIcon type='google'
          title='Sign In With Google'
          button
          style={styles.SocialIcon}
      />
      </View>
      <View style={{ marginTop:10,marginLeft:25}}>
        <Text style={{...styles.text1,}}>Now on Express food ?</Text>
      </View> 
      <View style={{ alignItems:'flex-end',marginHorizontal:20}}>
      <Button title="Create Account" titleStyle={styles.createButtontitle}  buttonStyle={styles.createButton}/>
      </View> 
    </View>
  );
}
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },
  TextInput2: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 12,
    paddingLeft: 15
  },
  SocialIcon:{
    borderRadius:12,
    height:50,
  },
  createButton:{
    backgroundColor:"white",
    alignContent:"center",
    justifyContent:"center",
    borderRadius:12,
    borderWidth:1,
    borderColor:"#ff8c52",
    height:40,
    paddingHorizontal:20,
  },
  createButtontitle:{
    color:"#ff8c52",
    fontSize:16,
    alignItems:"center",
    justifyContent:"center",
    marginTop:-3,
  }
});
