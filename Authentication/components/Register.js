import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function Register(){
     const navigation = useNavigation();

     const handleLogin = () => {
          navigation.navigate('Login')
     }

     return(
          <View style={style.bg}>
               <Text style={style.register}>Register</Text>
               <View style={style.form}>
                    <View style={style.inputContainer}>
                         <FontAwesome name="user" size={20} color="#222831" style={style.icon}/>
                         <TextInput placeholder="name" style={style.input}/>
                    </View>
                    <View style={style.inputContainer}>
                         <FontAwesome name="at" size={20} color="#222831" style={style.icon}/>
                         <TextInput placeholder="@username" style={style.input}/>
                    </View>
                    <View style={style.inputContainer}>
                         <FontAwesome name="envelope" size={20} color="#222831" style={style.icon}/>
                         <TextInput placeholder="your email" style={style.input}/>
                    </View>
                    <View style={style.inputContainer}>
                         <FontAwesome name="phone" size={20} color="#222831" style={style.icon}/>
                         <TextInput placeholder="+62 your code country" style={style.input}/>
                    </View>
                    <View style={style.inputContainer}>
                         <FontAwesome name="lock" size={20} color="#222831" style={style.icon}/>
                         <TextInput placeholder="password" style={style.input}/>
                    </View>
                    <TouchableOpacity style={style.btnRegister}>
                         <Text style={style.textRegister}>
                              Register
                         </Text>
                    </TouchableOpacity>
                    <Text style={style.row}>
                         Already have an account? 
                         <TouchableOpacity onPress={handleLogin}> 
                              <Text>Login</Text>
                              </TouchableOpacity>
                    </Text>
               </View>
          </View>
     )
}

const style = StyleSheet.create({
     bg:{
          backgroundColor: "#EEEEEE",
          height: "100%",
     },
     register:{
          marginTop:100,
          textAlign:"center",
          color:"#00ADB5",
          fontSize:25,
          fontWeight:'bold'
     },
     inputContainer:{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
          paddingHorizontal: 20,
          backgroundColor: "#FFFFFF",
          borderRadius: 15,
          borderWidth: 1,
          borderColor: "#222831",
          width: 350,
     },
     icon: {
          marginRight: 10,
        },
        input: {
          flex: 1,
          padding: 10,
          color: "#222831",
        },
        form:{
          alignItems:'center',
           
        },
        btnRegister:{
          backgroundColor:"#222831",
          width:350,
          borderRadius:10,
          marginTop:20
          
        },
        textRegister:{
          color:"#EEEEEE",
          textAlign:'center',
          padding:16,
          fontSize:18,
          fontWeight:'bold'
        },
        row:{
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
        }
})