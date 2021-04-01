import React from "react"
import {View,Text,StyleSheet} from "react-native"
import { WebView } from 'react-native-webview'

const MyWebView = ()=>{
    return (
        <View style={styles.mapview}>
        <WebView originWhitelist={['*']} source={{ uri : 'https://ancient-oasis-28308.herokuapp.com/'}} style={{ marginTop: 20, elevation:5}} />
        </View>
    )
}

const styles = StyleSheet.create({
    mapview:{
        backgroundColor:"red",
        height:400,
        margin:50,
        elevation:10,
        borderColor:'black',
        borderRadius:5,
        borderWidth:10
    }
})

export default MyWebView