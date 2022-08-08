import React from "react"
import { Text, View, ScrollView } from "react-native"
import { Header, CustomTextinputContainer, CustomCounter, CustomSwitcher, MultiSwitcher,CustomImageSelection } from "../Component"
import { FONTS } from "../Constants"
import styles from "./RootNavigationStyle"
import { useSelector, useDispatch } from "react-redux"
import {
    changeUnitSize,
    increaseBedrooms,
    decreaseBedrooms,
    increaseBathrooms,
    decreaseBathrooms,
    increaseLounges,
    decreaseLounges,
    increaseGuest,
    decreaseGuest,
    changeFurnished,
    changeKitchen,
    changeParking,
    changeElectricity,
    changeWater
} from "../Actions/AllActions"
const RootNavigation = () => {

    const dispatch = useDispatch()

    const unitSize = useSelector(state => state.unitSize)
    const electricityNo = useSelector(state => state.electricityNo)
    const waterNo = useSelector(state => state.waterNo)

    const bedRooms = useSelector(state => state.bedRooms)
    const bathRooms = useSelector(state => state.bathRooms)

    const guestRooms = useSelector(state => state.guestRooms)
    const lounges = useSelector(state => state.lounges)

    const furnished = useSelector(state => state.furnished)

    const kitchen = useSelector(state => state.kitchen)

    const parking = useSelector(state => state.parking)

    return (

        <>
            <Header lable={"Property Details"} />
            {/* progress bar */}
            <ScrollView>

                <Text style={{ ...FONTS.h1, ...styles.stepOneLable }}>Step 1 - Unit Details</Text>

                <Text style={{ ...FONTS.h4, ...styles.informationCaution }}>Please enter the unit information below</Text>

                <CustomTextinputContainer
                    lable="Unit Size"
                    placeholder="Enter Size"
                    value={unitSize}
                    onChangeText={(value) => changeUnitSize(dispatch, value)}

                />


                {/* bedrooms and bathrooms */}

                <View style={styles.counterRowContainer}>

                    <CustomCounter

                        lable={"Bedrooms"}
                        number={bedRooms}
                        plusFunc={() => increaseBedrooms(dispatch)}
                        minusFunc={() => decreaseBedrooms(dispatch)}

                    />
                    <CustomCounter
                        lable={"Bathrooms"}
                        number={bathRooms}

                        plusFunc={() => increaseBathrooms(dispatch)}
                        minusFunc={() => decreaseBathrooms(dispatch)}

                    />
                </View>

                {/* Geust and lounges */}
                <View style={styles.counterRowContainer}>

                    <CustomCounter

                        lable={"Geust Rooms"}
                        number={guestRooms}
                        plusFunc={() => increaseGuest(dispatch)}
                        minusFunc={() => decreaseGuest(dispatch)}

                    />
                    <CustomCounter
                        lable={"Lounges"}
                        number={lounges}

                        plusFunc={() => increaseLounges(dispatch)}
                        minusFunc={() => decreaseLounges(dispatch)}

                    />
                </View>


                {/* Switchers */}

                <View style={styles.counterRowContainer}>

                    <CustomSwitcher
                        lable="Furnished"
                        element={furnished}
                        handleItemPress={(index) => {
                            changeFurnished(dispatch, index)
                        }}
                    />


                    <CustomSwitcher
                        lable="Kitchen"
                        element={kitchen}
                        handleItemPress={(index) => changeKitchen(dispatch, index)}
                    />


                </View>

                {/* Parking */}
                <View style={styles.counterRowContainer}>

                    <CustomSwitcher
                        lable="Parking"
                        element={parking}
                        handleItemPress={(index) => changeParking(dispatch, index)}
                    />

                </View>

                {/*  electricity and water */}

                <CustomTextinputContainer
                    lable="Electricity Meter No"
                    placeholder="Enter Meter no"
                    value={electricityNo}
                    onChangeText={(value) => changeElectricity(dispatch, value)}

                />


                <CustomTextinputContainer
                    lable="Water Meter No"
                    placeholder="Enter Meter no"
                    value={waterNo}
                    onChangeText={(value) => changeWater(dispatch, value)}

                />



                {/* Multi switcehs */}

                <MultiSwitcher />



{/* select image  */}

   <CustomImageSelection/>
            </ScrollView>

        </>
    )
}

export default RootNavigation


