import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import HomeHeader from "../component/HomeHeader";
export default function HomeScreen(){
    return(
        <View style={styles.container}>
           <HomeHeader/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        
    }
})