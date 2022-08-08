import React from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"
import { COLORS, FONTS } from "../Constants"

const CustomTextinputContianer = ({lable,placeholder,value,onChangeText}) => {
    return (
        <View style={styles.container}>

        <Text style={{...FONTS.h5,}}>{lable}</Text>
        <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={"black"}
        value={value}
        onChangeText={onChangeText}
        />

        </View>
    )
}

export default CustomTextinputContianer


const styles = StyleSheet.create({
    container: {
        width: "90%",
        alignSelf:"center",
        marginTop:15
    },
    input:{
        width:"100%",
        alignSelf:"center",
        height:50,
        borderRadius:10,
        borderWidth:1,
        borderColor:COLORS.secondary,
        marginTop:10,
        paddingLeft:10,
       
    }
})