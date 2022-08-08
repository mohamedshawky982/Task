import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { COLORS, FONTS } from "../Constants";
import AntDesign from "react-native-vector-icons/AntDesign"



const CustomSwitcher = ({ lable, element, handleItemPress,}) => {

    return (
        <View style={styles.container}>


            <Text style={styles.lable}>{lable}</Text>


            <View style={styles.switcherContainer}>

                <TouchableOpacity style={[styles.switcherItem, { backgroundColor: element[0].selected ? COLORS.primary : null }]}
                    onPress={()=>handleItemPress(0)}
                >

                    <Text style={{ fontSize: 16, color:element[0].selected ? "white" : "black", fontWeight: "500" }}>{element[0].lable}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.switcherItem, { backgroundColor: element[1].selected ? COLORS.primary : null }]}
                    onPress={()=>handleItemPress(1)}
                >

                    <Text style={{ fontSize: 16, color: element[1].selected ? "white" : "black", fontWeight: "500" }}>{element[1].lable}</Text>
                </TouchableOpacity>


            </View>

        </View>

    )
}


export default CustomSwitcher




const styles = StyleSheet.create({
    container: {
        width: "45%",
        // backgroundColor:"red"
    },
    switcherContainer: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: COLORS.secondary,
        borderRadius: 10,
        flexDirection: "row"
    },
    lable: {
        ...FONTS.h5, marginVertical: 10
    },
    switcherItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,

    }

})