import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native'


import Colors from '../config/colors';

export default function Button({ title, onPress,obj }) {
    return (
        <TouchableOpacity
      style={[styles.button, { backgroundColor: Colors[obj.bgcolor],
        borderBottomRightRadius:obj.x4,
        borderTopRightRadius:obj.x3,
        borderBottomLeftRadius:obj.x2,
        borderTopLeftRadius:obj.x1,
        width:obj.width,
      }]}
      onPress={onPress}
    >
      <Text style={[styles.text,{color:Colors[obj.color]},]}>{title}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
button:{
    backgroundColor: Colors.dark,
    borderRadius: 10,
   
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
},
text: {
    color: Colors.white,
    fontSize: 15,
    textTransform: "uppercase",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
   
  
  },
})

