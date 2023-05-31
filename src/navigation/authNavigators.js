import react from 'react'
import { createStackNavigator} from '@react-navigation/stack';
import WelcomeSignInScreen from '../screens/authScreens/WelcomeSignInScreen'
import SignInScreen from '../screens/authScreens/SignInScreen'
import HomeScreen from '../screens/HomeScreen'
const Auth = createStackNavigator();

export default function AuthStack() {
    return(
        <Auth.Navigator>
            <Auth.Screen name="WelcomeSignInScreen" 
            component={WelcomeSignInScreen} 
            options={{headerShown:false}}
           

            />
            <Auth.Screen name="SignInScreen"
             component={SignInScreen}
            options={{headerShown:false, }}

              />
              <Auth.Screen name="HomeScreen"
             component={HomeScreen}
            options={{headerShown:false, }}

              />
           
        </Auth.Navigator>
    )
}