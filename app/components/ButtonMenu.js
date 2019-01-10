import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
export default ButtonMenu = ({ boxicon, title, number }) => {
    return (
        <View style={styles.box}>
            <TouchableOpacity style={styles.boxinner}>
                <Image
                    style={styles.img}
                    source={boxicon}
                />
                <Text>{title}</Text>
                <Text>{number} Projects</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '50%',
        padding: 8,
    },
    boxinner:{
        backgroundColor:'#f4f5f8',
        padding: 12,
        borderRadius: 8
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginBottom: 50
    }
})
