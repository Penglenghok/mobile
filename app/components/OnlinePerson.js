import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ImageBackground } from 'react-native'
import { hidden, green } from 'ansi-colors';

export default OnlinePerson = ({ title, img }) => {
    return (

        <View style={styles.contain}>
            <View style={styles.box}>
                <ImageBackground
                    source={img}
                    style={styles.fullwidth}
                    imageStyle={styles.img}>
                </ImageBackground>
                <View style={styles.dot}></View>
            </View>
            <Text>{title}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    contain: {
        alignItems: 'center',
        marginLeft: 12,
        marginRight: 12,
        marginTop: 12
    },
    box:{
        height:60,
        width:50,
       justifyContent: 'center',
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginBottom: 6,
        overflow: 'hidden'
    },
    fullwidth: {
        width: '100%',
        height: '100%',

    },
    dot:{
    width:20,
    height: 20,
    backgroundColor:'green',
    borderRadius: 20/2,
    borderWidth: 3,
    borderColor: '#fff',
    position:'absolute',
    bottom: 0,
    right: 0
    },
 
})
