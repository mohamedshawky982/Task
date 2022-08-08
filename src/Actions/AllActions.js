import {
    UNIT_SIZE,
    INCREASE_BEDROOMS,
    DECREASE_BEDROOMS,
    INCREASE_BATHROOMS,
    DECREASE_BATHROOMS,
    INCREASE_GEUSTROOMS,
    DECREASE_GEUSTROOMS,
    INCREASE_LOUNGES,
    DECREASE_LOUNGES,
    CHANGE_FURNISHED,
    CHANGE_KITCHEN,
    CHANGE_PARKING,
    CHANGE_WATER_NO,
    CHANGE_ELECTRICITY_NO,
    CHANGE_MULTI_SWITCEHR,
    CHANGE_IMAGES,
    DELETE_IMAGE,
    ADD_SINGLIMAGE
} from "./ActionTypes"



const changeUnitSize = (dispatch, payload) => {
    dispatch({ type: UNIT_SIZE, payload })
}

const increaseBedrooms = (dispatch) => {
    dispatch({ type: INCREASE_BEDROOMS })

}

const decreaseBedrooms = (dispatch) => {
    dispatch({ type: DECREASE_BEDROOMS })

}



const increaseBathrooms = (dispatch) => {
    dispatch({ type: INCREASE_BATHROOMS })

}

const decreaseBathrooms = (dispatch) => {
    dispatch({ type: DECREASE_BATHROOMS })

}

const increaseLounges = (dispatch) => {
    dispatch({ type: INCREASE_LOUNGES })

}
const decreaseLounges = (dispatch) => {
    dispatch({ type: DECREASE_LOUNGES })

}


const increaseGuest = (dispatch) => {
    dispatch({ type: INCREASE_GEUSTROOMS })

}
const decreaseGuest = (dispatch) => {
    dispatch({ type: DECREASE_GEUSTROOMS })

}

const changeFurnished = (dispatch, index) => {
    dispatch({ type: CHANGE_FURNISHED, payload: index })
}

const changeKitchen = (dispatch, index) => {
    dispatch({ type: CHANGE_KITCHEN, payload: index })
}

const changeParking = (dispatch, index) => {
    dispatch({ type: CHANGE_PARKING, payload: index })
}


const changeElectricity = (dispatch, payload) => {
    dispatch({ type: CHANGE_ELECTRICITY_NO, payload })
}


const changeWater = (dispatch, payload) => {
    dispatch({ type: CHANGE_WATER_NO, payload })
}


const handleMultiSwitcherPress=(dispatch,index)=>{
    dispatch({ type: CHANGE_MULTI_SWITCEHR, payload:index })

}

const changeImages=(dispatch,images)=>{
    dispatch({ type: CHANGE_IMAGES, payload:images })
}

const deleteImage=(dispatch,index)=>{
dispatch({ type: DELETE_IMAGE, payload:index })


}

//ADD_SINGLIMAGE
const addImage=(dispatch,image)=>{
    dispatch({ type: ADD_SINGLIMAGE, payload:image })    
    }

export {
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
    changeWater,
    handleMultiSwitcherPress,
    changeImages,
    deleteImage,
    addImage

}



