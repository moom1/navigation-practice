import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Center } from './Center';
import { View, Text } from 'react-native'
import { AuthContext } from './AuthProvider';
import { Button } from 'react-native';

const Stack = createStackNavigator();

function Login({navigation,route}){
    const {login} = useContext(AuthContext)

    return(
       <Center>
           <Text>
           {route.name} Component
           </Text>
            <Button title="Log me in" onPress={()=>{
               login();
            }} />
            <Button title="Go to register" onPress={()=>{
                navigation.navigate("Register")
            }} />
       </Center>    
    );
}
function Register({navigation,route}){
    return(
       <Center>
           <Text>
           {route.name} Component
            </Text>
            <Button title="Go to Login" onPress={()=>{
                navigation.navigate("Login")
            }} />
       </Center>    
    );
}

export default function AuthStack() {
    return (
        <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" options={{
                    
                }} component={Register}/>
        </Stack.Navigator>
    )
}
