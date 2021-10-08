import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { StackActions } from '@react-navigation/routers'
import React, { useEffect, useState,useContext } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import AppTabs from './AppTabs'
import { AuthContext } from './AuthProvider'
import AuthStack from './AuthStack'
import {Center} from './Center'



export default function Routes () {
    const {user,login} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        AsyncStorage.getItem("user")
        .then(userString=>{
            if(userString){
                console.log(userString)
                login();
            }
            setLoading(false)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    if(loading){
        return(
            <Center>
                <ActivityIndicator size="large" />
            </Center>
        )
    }
    return (
        <NavigationContainer>
           { user ?
            <AppTabs/>           
            : <AuthStack />}
        </NavigationContainer>
        
    )
   
}
