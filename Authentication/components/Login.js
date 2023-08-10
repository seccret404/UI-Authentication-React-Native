import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native"
export default function Login() {

  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate('Register')
  }
  return (
    <View style={style.bg}>
      <Text style={style.title}>
        Welcome To <Text style={style.brand}>Store App!</Text>
      </Text>
      <Text style={style.please}>
        Find Great Offers! Login and Start Shopping
      </Text>
      <View style={style.form}>
        <View style={style.inputContainer}>
          <FontAwesome
            name="user"
            size={20}
            color="#222831"
            style={style.icon}
          />
          <TextInput placeholder="@Username" style={style.input} />
        </View>
        <View style={style.inputContainer}>
          <FontAwesome
            name="lock"
            size={20}
            color="#222831"
            style={style.icon}
          />
          <TextInput placeholder="##@-*Password" style={style.input} />
        </View>
        <TouchableOpacity style={style.btnLogin}>
          <Text style={style.txtLogin}>
               Login
          </Text>
        </TouchableOpacity>
        <Text style={style.or}>
          or
        </Text>
        <TouchableOpacity style={style.google}>
          <Text style={style.txtGoogle}>
               Login with Google <FontAwesome
            name="google"
            size={20}
            color="#D0DCED"
            style={style.icon}
          />
          </Text>
        </TouchableOpacity>

        <Text style={style.reg}>
          Have no account? <TouchableOpacity onPress={handleRegister}><Text style={style.link}>Register</Text></TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  bg: {
    backgroundColor: "#EEEEEE",
    height: "100%",
  },
  title: {
    textAlign: "center",
    marginTop: 200,
    fontSize: 30,
    fontWeight: "bold",
    color: "#222831",
  },
  brand: {
    color: "#00ADB5",
  },
  please: {
    fontSize: 15,
    textAlign: "center",
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    marginTop:25
  },
  inputContainer: { //perlu
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
  btnLogin:{
     backgroundColor:"#222831",
     width:350,
     borderRadius:15,
     marginTop:15
  },
  txtLogin:{
     textAlign:"center",
     color:"#ffffff",
     fontSize:25,
     padding:10
  },
  or:{
     fontSize:20,
     marginTop:20,
     marginBottom:10
  },
  google:{
     backgroundColor:"#222831",
     width:350,
     borderRadius:15
     
  },
  txtGoogle:{
     display:"flex",
     alignItems:'center',
     justifyContent:'center',
     color:"#ffffff",
     textAlign:'center',
     padding:15,
     fontSize:15

  },
  reg:{
     display:'flex',
     alignItems:'center',
     justifyContent:'center',

  },
  link:{
color:'#00ADB5'
  }


});
