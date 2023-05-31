import react from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './authNavigators'
export default function RootNevigaters() {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    )
}