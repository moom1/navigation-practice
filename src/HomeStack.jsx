import { createStackNavigator } from '@react-navigation/stack'
import React, { useContext,useState ,useRef,useEffect } from 'react'
import { Button, Text, View,FlatList } from 'react-native';
import {  TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from './AuthProvider';
import { Center } from './Center';
import faker from "faker"
import { addProductRoutes } from './addProductRoutes';


const Stack = createStackNavigator();

function Feed({navigation}){
    return (
        <Center>
          <FlatList
            style={{ width: "100%"}}
            renderItem={({item}) => {
              return (
                <Button
                  title={item}
                  onPress={() => {
                      navigation.navigate("Product", {
                          name:item
                      })
                  }}
                />
              );
            }}
            keyExtractor={(product, idx) => product + idx}
            data={Array.from(Array(50), () => faker.commerce.product())}
          />
        </Center>
      );
}


export default function HomeStack() {
    const {logout} = useContext(AuthContext)
    return (
        <Stack.Navigator initialRouteName="Feed">

            {addProductRoutes(Stack)}
           
            <Stack.Screen name="Feed" component={Feed} options={{
                headerRight:()=>{
                    return(
                        <TouchableOpacity onPress={()=>{
                            logout();
                        }}>
                            <Text>
                                Logout
                            </Text>
                        </TouchableOpacity>
                    )
                }
            }}/>
         
        </Stack.Navigator>
    )
}
