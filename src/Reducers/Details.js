

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
    CHANGE_ELECTRICITY_NO,
    CHANGE_WATER_NO,
    CHANGE_MULTI_SWITCEHR,
    CHANGE_IMAGES,
    DELETE_IMAGE,
    ADD_SINGLIMAGE
} from "../Actions/ActionTypes"

const initialState = {
    unitSize: "",
    bedRooms: 0,
    bathRooms: 0,
    guestRooms: 0,
    lounges: 0,
    electricityNo: "",
    waterNo: "",
    furnished: [
        {
            lable: "Yes",
            selected: true
        },
        {
            lable: "No",
            selected: false
        }
    ],
    kitchen: [
        {
            lable: "Close",
            selected: true
        },
        {
            lable: "Open",
            selected: false
        }
    ]
    ,
    parking: [
        {
            lable: "Split",
            selected: true
        },
        {
            lable: "Central",
            selected: false
        }
    ],

    multiSwitchers: [
        {
            lable: "Split",
            selected: true
        },
        {
            lable: "Central",
            selected: false
        },

        {
            lable: "Window",
            selected: false
        },
        {
            lable: "Not Installed",
            selected: false
        }
    ],
    images: []

}
const Details = (state = initialState, action) => {

    switch (action.type) {
        case UNIT_SIZE:
            return { ...state, unitSize: action.payload }
        case INCREASE_BEDROOMS:
            return { ...state, bedRooms: state.bedRooms + 1 }

        case DECREASE_BEDROOMS:
            return { ...state, bedRooms: state.bedRooms > 0 ? state.bedRooms - 1 : 0 }

        case INCREASE_BATHROOMS:
            return { ...state, bathRooms: state.bathRooms + 1 }

        case DECREASE_BATHROOMS:
            return { ...state, bathRooms: state.bathRooms > 0 ? state.bathRooms - 1 : 0 }


        case INCREASE_LOUNGES:
            return { ...state, lounges: state.lounges + 1 }

        case DECREASE_LOUNGES:
            return { ...state, lounges: state.lounges > 0 ? state.lounges - 1 : 0 }



        case INCREASE_GEUSTROOMS:
            return { ...state, guestRooms: state.guestRooms + 1 }

        case DECREASE_GEUSTROOMS:
            return { ...state, guestRooms: state.guestRooms > 0 ? state.guestRooms - 1 : 0 }


        case CHANGE_FURNISHED:
            let oldFurnished = state.furnished
            oldFurnished.map((item) => item.selected = false)
            oldFurnished[action.payload].selected = true
            return { ...state, furnished: [...oldFurnished] }

        case CHANGE_KITCHEN:
            let oldKitchen = state.kitchen
            oldKitchen.map((item) => item.selected = false)
            oldKitchen[action.payload].selected = true
            return { ...state, kitchen: [...oldKitchen] }

        case CHANGE_PARKING:
            let oldParking = state.parking
            oldParking.map((item) => item.selected = false)
            oldParking[action.payload].selected = true
            return { ...state, parking: [...oldParking] }

        case CHANGE_ELECTRICITY_NO:
            return { ...state, electricityNo: action.payload }

        case CHANGE_WATER_NO:
            return { ...state, waterNo: action.payload }

        case CHANGE_MULTI_SWITCEHR:
            let oldSwitchers = state.multiSwitchers
            oldSwitchers.map((item) => item.selected = false)
            oldSwitchers[action.payload].selected = true
            return { ...state, multiSwitchers: [...oldSwitchers] }


        case CHANGE_IMAGES:
            return { ...state, images: [...action.payload] }

        case DELETE_IMAGE:

            let oldImages = state.images
            oldImages.splice(action.payload, 1)

            return { ...state, images: [...oldImages] }

        case ADD_SINGLIMAGE:
            let storedImages = state.images
            storedImages.push(action.payload)
            return { ...state, images: [...storedImages] }


        default:
            return state
    }


}

export default Details