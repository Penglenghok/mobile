import React, { Component } from 'react'
import { Text, StyleSheet, View ,TouchableOpacity,ImageBackground} from 'react-native'

export default CardVideo =({imagesource,speaker,title})=> {
    return (
        <TouchableOpacity>
        <View style={styles.card}>
            <ImageBackground  source={imagesource} style={{ width: '100%', height: '100%' }}>
                <View style={styles.cardtext}>
                    <Text style={styles.h2}>{speaker}</Text>
                    <Text style={styles.h1}>{title}</Text>
                </View>
            </ImageBackground>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        margin:12,
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
        borderWidth: 1,
        shadowColor: '#000',
        shadowRadius: 10,
        shadowOpacity: 1,
        marginBottom: 0
    },
    cardtext:{
        width: '100%',
        height: '100%',
        padding: 12,
        justifyContent: 'flex-end',

    },
    h2:{
        fontSize:16,
        color:'#fff'
    },
    h1:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold',
    }
})
