import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, {useContext} from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext } from './AuthProvider'
import { Center } from './Center'
import { AntDesign, Ionicons, EvilIcons } from "@expo/vector-icons";
import HomeStack from './HomeStack'
import SearchStack from './SearchStack'


const Tabs = createBottomTabNavigator()

export default function AppTabs() {
    return (
        <Tabs.Navigator
        screenOptions={({ route }) => ({

            headerShown: false,
            "tabBarActiveTintColor": "tomato",
            "tabBarInactiveTintColor": "gray",
            
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
    
              if (route.name === "Home") {
                iconName = "home";
                return <AntDesign name={"home"} size={size} color={color} />;
              } else if (route.name === "SearchStack") {
                return <EvilIcons name={"search"} size={size} color={color} />;
              }
    
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
            <Tabs.Screen name="Home" component={HomeStack} />
            <Tabs.Screen name="SearchStack" component={SearchStack} options={{title:"Search"}} />
        </Tabs.Navigator>
    )
}
