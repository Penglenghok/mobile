//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import styles from './../../style';
// create a component
export default class ProfileScreen extends Component {
    render() {
        return (
           
                 <View style={styles.container}>
                 <SafeAreaView>
                 <Text>ProfileScreen</Text>
                 </SafeAreaView>
            </View>

        );
    }
}

