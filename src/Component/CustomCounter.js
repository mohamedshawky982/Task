import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { COLORS, FONTS } from "../Constants";
import AntDesign from "react-native-vector-icons/AntDesign"

const CustomCounter = ({ lable, number, plusFunc, minusFunc }) => {
    return (

        <View style={styles.container}>


            <Text style={styles.lable} >{lable}</Text>


            <View style={styles.countContainer}>


{/* minus */}
                <View style={styles.plusOrMinusContainer}>
                    <TouchableOpacity
                        onPress={minusFunc}
                    >
                        {/* <AntDesign name="minus" size={25} color={COLORS.secondary} /> */}
                        <Text style={{color:"black"}}>M</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.numberContainer}>
                    <Text style={styles.number}>{number}</Text>
                </View>



{/* plus */}

                <View style={styles.plusOrMinusContainer}>
                    <TouchableOpacity
                        onPress={plusFunc}
                    >
                        {/* <AntDesign name="plus" size={25} color={COLORS.secondary} /> */}
                        <Text style={{color:"black"}}>P</Text>

                    </TouchableOpacity>
                </View>

            </View>

        </View>

    )
}


export default CustomCounter

const styles = StyleSheet.create({
    container: {
        width: "45%",
        // backgroundColor:"red"
    },
    countContainer: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: COLORS.secondary,
        borderRadius: 10,
        flexDirection: "row"
    },
    plusOrMinusContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ddd",
        borderRadius: 10,

    },
    numberContainer: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center"
    },

    number: {
        color: "black"
    },
    lable: {
        ...FONTS.h5, marginVertical: 10
    }

})