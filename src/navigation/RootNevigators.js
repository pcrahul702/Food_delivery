import react from 'react'
import { NavigationContainer } from '@react-navigation/native';
import WelcomeSignInScreen from '../screens/authScreens/WelcomeSignInScreen'
import SignInScreen from '../screens/authScreens/SignInScreen'
export default function RootNevigaters() {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    )
}