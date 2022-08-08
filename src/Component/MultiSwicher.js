import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { COLORS, FONTS } from "../Constants";
import AntDesign from "react-native-vector-icons/AntDesign"
import { useSelector,useDispatch } from "react-redux";

import {handleMultiSwitcherPress} from "../Actions/AllActions"

const MultiSwitcher = ({}) => {
    const multiSwitchers = useSelector(state => state.multiSwitchers)
    const dispatch=useDispatch()
    return (
        <View style={styles.container}>
            <Text style={styles.lable}>Select AC Type</Text>
            <View style={styles.switcherContainer}>
                {
                    multiSwitchers.map((item, index) => (
                        <TouchableOpacity style={[styles.switcherItem, {
                            backgroundColor: item.selected ? COLORS.primary : null,
                            borderRadius: item.selected ? 10 : 0
                        }]}
                        onPress={()=>handleMultiSwitcherPress(dispatch,index)}
                        >

                            <Text style={{ fontSize: 16, color: item.selected ? "white" : "black", fontWeight: "500" }}>{item.lable}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>

        </View>

    )
}


export default MultiSwitcher




const styles = StyleSheet.create({
    container: {
        width: "90%",
        alignSelf: "center"
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
        borderWidth: 1,
        borderColor: "#ddd"

    }

})