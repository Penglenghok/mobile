
import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'

export default Person = ({img,name,payment}) => {
    return (

        <TouchableOpacity>
            <View style={styles.box}>
                <Image
                    source={img}
                    style={styles.img}
                />
                <View style={styles.text}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.payment}>{payment} Dues</Text>
                </View>
                <View style={styles.dot}>

                </View>
               
            </View>
        </TouchableOpacity>

    )
}



const styles = StyleSheet.create({
    box:{
        flexDirection:'row',
        alignItems:'center',
        marginTop: 20
    },
    text:{
        paddingHorizontal:15,
    },
    name:{
        fontSize:20,
        fontWeight:'500'
    },
img:{
    width:50,
    height: 50,
    borderRadius: 50/2
},
dot:{
    width:15,
    height: 15,
    borderRadius: 15/2,
    backgroundColor:'#1da1f2',
   position: 'absolute',
   right: 0
},
payment:{
    fontSize:14,
    marginTop: 3
}

})
