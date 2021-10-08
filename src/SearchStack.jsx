import { createStackNavigator } from '@react-navigation/stack'
import React,{useState} from 'react'
import { Text , Button,FlatList,TextInput,StyleSheet} from 'react-native'
import { Center } from './Center'
import faker from "faker"
import { addProductRoutes } from './addProductRoutes'

const Stack = createStackNavigator()

function Search({route,navigation}){
  const [show, setShow] = useState(false)
  const [text, onChangeText] = useState("");

    return(
        <Center>
          <Button style={{ width: "100%"}}
            title="Search Products" onPress={()=>{
            setShow(!show)
          }}  />

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search here"
      />
            

       { show ? <FlatList
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
          />: null}
            
        </Center> 
        
    )
}


const styles = StyleSheet.create({
  input: {
    width:"100%",
    borderWidth: 1,
    padding: 10,
  },
});

export default function SearchStack()  {
   
        return (
            <Stack.Navigator>
                <Stack.Screen name="Search" component={Search} />
                {addProductRoutes(Stack)}
            </Stack.Navigator>
        )
   
}
