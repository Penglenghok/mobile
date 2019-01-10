import React from 'react';
import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    header:{
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    h1:{
        marginTop:5,
        fontSize:16,
        fontWeight: 'bold'
    },
    h2:{
        fontSize:14,
        marginTop: 5
    },
    img:{
        width:50,
        height: 50,
        marginBottom: 5,
        borderRadius:50/2
    },
    category:{
        margin:8,
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }

})