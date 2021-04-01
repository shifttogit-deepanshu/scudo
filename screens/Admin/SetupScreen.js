import React from "react"
import {Text,View,StyleSheet} from "react-native"
import InfoTab from "../../components/InfoTab"
import MyWebView from "../../components/WebVIew"

const SetupScreen = ()=>{
    return (
        <View>
        <Text>Hello There! Setup Screen...</Text>
        <InfoTab/>
        <MyWebView />
        </View>
        
    )
}

export default SetupScreen