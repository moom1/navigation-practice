import { createStackNavigator } from '@react-navigation/stack'
import React, { useContext,useState ,useRef,useEffect } from 'react'
import { Button, Text, View,FlatList } from 'react-native';
import {  TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from './AuthProvider';
import { Center } from './Center';
import faker from "faker"



function Product({route,navigation}){
    return(
        <Center>
            <Text>
                {route.params.name}
            </Text>

            <Button title="Edit this product" onPress={()=>{
                navigation.navigate("EditProduct",{
                    name: route.params.name
                })
            }} />
        </Center>
    )
}


function apiCall(x){
    return x
}
function EditProduct({route,navigation}){
    const [formState] = useState()
    const submit = useRef()
    submit.current = ()=>{
        //api call with new formState state
        apiCall(formState)
        navigation.goBack()
    }

    useEffect(() => {
        navigation.setParams({submit})
    }, [])


    return(
        <Center>
            <Text>
                Editing: {route.params.name} ...
            </Text>
            {/* <form>
             //edit the name  
            </form> */}
        </Center>
    )
}

export const addProductRoutes = (Stack) =>{
    return(
        <>
           <Stack.Screen name="Product" component={Product} 
            options={({route})=>({
                 headerTitle: `product: ${route.params.name}`
                }
            )}
            
            />
            <Stack.Screen name="EditProduct" component={EditProduct} 
            options={({route})=>({
                 headerTitle: `Editing: ${route.params.name}`,
                 headerRight: ()=><TouchableOpacity onPress={()=>{
                     route.params.submit?.current()
                 }}>
                     <Text style={{color:'red'}}>
                         Done
                     </Text>
                 </TouchableOpacity>
                }
            )}
            
            />
        </>
    )
}