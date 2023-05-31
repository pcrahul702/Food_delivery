import react from 'react'
import WelcomeSignInScreen from '../screens/authScreens/WelcomeSignInScreen'
import SignInScreen from '../screens/authScreens/SignInScreen'
import { createStackNavigator,TransitionPresets} from '@react-navigation/stack';
const Auth = createStackNavigator();

export default function AuthStack() {
    return(
        <Auth.Navigator>
            <Auth.Screen name="WelcomeSignInScreen" 
            component={WelcomeSignInScreen} 
            options={{headerShown:false, ...TransitionPresets.ModalSlideFromBottoAndriod}}
           

            />
            <Auth.Screen name="SignInScreen"
             component={SignInScreen}
            options={{headerShown:false, ...TransitionPresets.ModalSlideFromBottoAndriod}}

              />
        </Auth.Navigator>
    )
}