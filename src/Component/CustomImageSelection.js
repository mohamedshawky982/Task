import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, FlatList } from "react-native"
import { COLORS, images, FONTS } from "../Constants"
import ImagePicker from 'react-native-image-crop-picker';

import { changeImages, deleteImage,addImage } from "../Actions/AllActions"
import { useDispatch, useSelector } from "react-redux";
const CustomImageSelection = () => { 
    
    const [showModal, setShowModal] = React.useState(false)
    const dispatch = useDispatch()
    const selectedImages = useSelector(state => state.images)

    const chooseFromGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 600,
            cropping: true,
            multiple: true
        }).then(images => {
            changeImages(dispatch, images)
            setShowModal(false)
        });
    }
    const openCamera=()=>{
        ImagePicker.openCamera({
            width: 300,
            height: 600,
            cropping: true,
          }).then(image => {

             
              addImage(dispatch,image)
              setShowModal(false)
           
          });
    }
    const _renderImagePickerModal = () => {
        return (
            <Modal
                visible={showModal}
                onRequestClose={() => setShowModal(false)}
                transparent
            >
                <View style={styles.modalConatiner}>
                    <View style={styles.modalBtnsContainer}>
                        <TouchableOpacity style={styles.chooseModalBtn}
                            onPress={() => chooseFromGallery()}
                        >
                            <Text style={{ ...FONTS.h3, fontWeight: "500", color: "white" }}>Choose form gallery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chooseModalBtn}
                        onPress={()=>openCamera()}
                        >

                            <Text style={{ ...FONTS.h3, fontWeight: "500", color: "white" }}>Choose form camera</Text>

                        </TouchableOpacity>

                    </View>
                </View>

            </Modal>
        )
    }

    const _renderFlatList = () => {
        return (
            <FlatList
                data={selectedImages}
                contentContainerStyle={{ flexDirection: "row" }}
                renderItem={({ item, index }) =>

                    <>
                        <Image source={{ uri: item.path }} style={{ width: 100, height: 150, marginVertical: 10 }} resizeMode="contain" />
                        <TouchableOpacity
                            style={styles.deleteImage}
                            onPress={() => deleteImage(dispatch, index)}>
                            <Text style={{ color: "white" }}>X</Text>
                        </TouchableOpacity>

                    </>
                }
            />


        )
    }
    const _renderWhenEmptyContent = () => {
        return (
            <View style={styles.emptyImageView}>

                <Image source={images.addImage} style={styles.addImage} />
                <Text style={{ ...FONTS.h5 }}>Select photos</Text>
                <TouchableOpacity style={styles.chooseBtn}
                    onPress={() => setShowModal(true)}
                >
                    <Text style={{ ...FONTS.h4, fontWeight: "500" }}>Choose file</Text>
                </TouchableOpacity>

            </View>
        )
    }
    return (

        <View style={styles.container}>

            {selectedImages.length == 0 ? _renderWhenEmptyContent() : _renderFlatList()}
            {_renderImagePickerModal()}

        </View>
    )
}

export default CustomImageSelection

const styles = StyleSheet.create({
    container: {
        width: "90%",
        // height: 200,
        alignSelf: "center",
        // alignItems: "center",
        // justifyContent: "center",
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 1,
        borderColor: COLORS.secondary,
        marginVertical: 10
    },
    addImage: {
        width: 100, height: 100
    },
    chooseBtn: {
        width: 100,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: COLORS.secondaryOne
    },
    modalConatiner: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52,0.4)'
    },
    modalBtnsContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        padding: 10,
        // height:200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "white"
    },
    chooseModalBtn: {
        width: "95%",
        alignSelf: "center",
        height: 50,
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginVertical: 10
    },
    emptyImageView: {
        width: "95%", height: 200, alignSelf: "center", alignItems: "center",
        justifyContent: "center"
    },
    deleteImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: 0
    }
})