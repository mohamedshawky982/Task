import React from "react"
import { Text, View,StatusBar } from "react-native"
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from './Store';
import RootNavigation from "./Screens/RootNavigation"
import { COLORS } from "./Constants";
const App = () => {
    return (
        <Provider store={store} >
            <StatusBar backgroundColor={COLORS.primary} />
            <PersistGate loading={null} persistor={persistor} >
                <RootNavigation/>
            </PersistGate>
        </Provider>
    )
}


export default App