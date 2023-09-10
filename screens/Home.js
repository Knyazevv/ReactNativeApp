import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./UI/IconButton";



const Stack = createNativeStackNavigator();

export const HomeScreen = ({ navigation }) => {


  return (
    <>
   <StatusBar />
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="AllPlaces"
        component={AllPlaces}
        options={({ navigation }) => ({
          headerRight: () => ( 
            <IconButton
              icon="add"
              size={24}
              color="blue" 
              onPress={() => navigation.navigate("AddPlace")}
            />
          ),
        })}
      />
      <Stack.Screen name="AddPlace" component={AddPlace} />
    </Stack.Navigator>
  </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});