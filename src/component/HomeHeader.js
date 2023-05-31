import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon,withBadge} from 'react-native-elements';
import {colors, parameters} from '../global/Style';
import { color } from 'react-native-elements/dist/helpers';
export default function HomeHeader() {
const BadgeIcon=withBadge(0)(Icon)
  return (
    <View style={styles.header}>
      <View style={{alignItems:"center", justifyContent:"center",marginLeft:15}}>
        <Icon 
        name="menu"
        type='material-community'
        color={colors.cardbackground}
        size={32}

        />
      </View>
      <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={{color:colors.cardbackground,fontSize:25,fontWeight:'bold'}}>Jcentrix food</Text>
      </View>
      <View style={{alignItems:'center',justifyContent:'center', marginRight:12}}>
        <BadgeIcon 
            type='material-community'
            name='cart'
            color={colors.cardbackground}
            size={35}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
        height: parameters.headerheight,
        justifyContent: 'space-between',
  },
});
