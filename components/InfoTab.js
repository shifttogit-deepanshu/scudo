import React from "react"
import {View,Text,StyleSheet} from "react-native"

export default (props)=>{
    return (
        <View style={styles.tab}>
            <View> 
                <Text>Information!</Text>
                <Text>inforinforinfor inforinfor inforinforinforinfor inforinfor inforinfor infor infor inforinforinfor infor  infor infor infor</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tab:{
        elevation:5,
        borderRadius:10,
        shadowRadius:10,
        backgroundColor:"yellow",
        height:200,
        padding:20,
        margin:20,  
        justifyContent:"center",
        alignItems:"center"
    }
})
