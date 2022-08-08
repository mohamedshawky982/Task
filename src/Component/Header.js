import React from "react"
import { View, Text, StyleSheet,TouchableOpacity } from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign"
import { COLORS, FONTS } from "../Constants"

const Header = ({ lable }) => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.backIconContainer}>
                <TouchableOpacity>
                <AntDesign name="left" size={25} color={COLORS.primary} />
                </TouchableOpacity>
            </View> */}
            <View
                style={styles.lableContainer}>
                <Text style={{ ...FONTS.h1 }}>{lable}</Text>
            </View>
        </View>
    )
}

export default Header


const styles = StyleSheet.create({
    container: {
        height: 50,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    backIconContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    lableContainer: {
        flex: 7,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor:"red",
        paddingRight:25
    }
})
