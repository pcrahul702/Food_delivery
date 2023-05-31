import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import HomeHeader from '../component/HomeHeader';
import {colors} from '../global/Style';
import {useState} from 'react';
export default function HomeScreen() {
  const [delivery, setDdelivery] = useState(true);
  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView
        sstickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={true}>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderRadius: 12,
          }}>
          <TouchableOpacity
            onPress={() => {
              setDdelivery(true);
            }}>
            <View
              style={{
                ...styles.deliverybtn,
                backgroundColor: delivery ? colors.buttons : colors.grey5,
              }}>
              <Text style={styles.deliverytext}>Delivery</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setDdelivery(false);
            }}>
            <View
              style={{
                ...styles.deliverybtn,
                backgroundColor: delivery ? colors.grey5 : colors.buttons,
              }}>
              <Text style={styles.deliverytext}>Pick Up</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.filterview}>
          <View
            style={styles.addressView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
              }}>
              <Icon
                name="map-marker"
                type="material-community"
                color={colors.grey1}
                size={26}
              />
              <Text style={{marginLeft: 5}}>22 Bessie Street</Text>
            </View>
            <View
              style={styles.time}>
              <Icon
                name="clock-time-four"
                type="material-community"
                color={colors.grey1}
                size={26}
              />
              <Text style={{marginLeft: 5}}>Now</Text>
            </View>
          </View>
          <View>
            <Icon
              name="tune"
              type="material-community"
              color={colors.grey1}
              size={26}
            />
          </View>
        </View>
        <View style={styles.headertextView}>
            <Text style={styles.headertext}>Categories</Text>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliverybtn: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },
  deliverytext: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  filterview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    marginVertical: 10,
    
  },
  time:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    backgroundColor:'white',
    borderRadius: 12,
    paddingHorizontal: 5,
    marginRight: 20,
  },
  addressView:{
    flexDirection: 'row',
    backgroundColor: colors.grey5,
    borderRadius: 15,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingVertical: 3,
  },
  headertext:{
        fontSize: 24,
        colors: colors.grey1,
        fontWeight: 'bold',
        paddingLeft: 10,
  },
  headertextView:{
    backgroundColor: colors.grey5,
    paddingverticle:3,


  }
});
