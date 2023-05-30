import React from "react";
import { View,Text,StyleSheet,Dimensions } from "react-native"
import {colors,parameters} from "../global/Style"
import AntDesign from "react-native-vector-icons/AntDesign";
import { Icon } from "react-native-elements";
const Header = ({title,type}) => {
    return (
        <View style={styles.header}>
           <View>
            <AntDesign 
            style={styles.headerIcon}
                name={type}
                color={colors.headertext}
                size={30}
                onPress={() => {}}
            />
           
           </View>
           <View>
                <Text style={styles.headertext}>{title}</Text>
            </View>
        </View> 
    )
};
const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        backgroundColor:colors.buttons,
        height:parameters.headerheight,
    },
    headertext:{
        fontSize:22,
        fontWeight:"bold",
        color:colors.headertext,
        marginLeft:20,
        padding:10,
    },
    headerIcon:
    {marginLeft:10,padding:10}
});
export default Header;