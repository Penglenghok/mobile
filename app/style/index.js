import React from 'react';
import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
        
    },
    header:{
        flexDirection:'row',
        padding: 12,
        alignItems: 'center',
        width: '100%',
   
    },
    headerinner:{
        flexDirection:'row',
        alignItems: 'center',
    },
    headerimg:{
        width:50,
        height: 50,
        borderRadius: 50/2,
        marginRight: 8
    },
    h1:{
        fontSize:24,
        fontWeight: '600'
    },
    flx1:{
        flex:1
    },
    headericon:{
        flexDirection:'row',
    },
    search:{
        backgroundColor:'#fff',
        borderWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
       paddingTop: 12
    },
    searchbox:{
        backgroundColor:'#f1f0f0',
        height: 40,
        borderRadius: 20,
        padding:15
    },
    online:{
      
    },
    person:{
        paddingHorizontal:15
    }
    
 
})