//import liraries
import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './../../style';
import { Icon, SearchBar } from 'react-native-elements'
import OnlinePerson from './../../components/OnlinePerson'
import Person from './../../components/Person'
// create a component
export default class HomeScreen extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={[styles.headerinner, styles.flx1]}>
                        <Image
                            source={require('./../../image/kolpheng.jpg')}
                            style={styles.headerimg}
                        />
                        <Text style={styles.h1}>
                            Billing
                    </Text></View>

                    <View style={styles.headericon}>
                    <TouchableOpacity>
                    <Icon
                            name='camera-alt'
                            paddingRight={10}
                            size={26}
                        />
                    </TouchableOpacity>
                       <TouchableOpacity>
                       <Icon
                            name='create'
                            size={26}
                        />
                       </TouchableOpacity>
                      
                    </View>
                </View>

                <ScrollView>
                    <SearchBar
                        round
                        containerStyle={styles.search}
                        inputContainerStyle={styles.searchbox}
                        placeholder='Search' />

                    <ScrollView style={styles.online} horizontal='true'
                        showsHorizontalScrollIndicator='false'

                    >
                        <OnlinePerson title='Love'
                            img={require("../../image/kpv.jpg")}
                        />
                        <OnlinePerson title='Love'
                            img={require("../../image/kpv.jpg")}
                        />
                        <OnlinePerson title='Love'
                            img={require("../../image/kpv.jpg")}
                        />
                        <OnlinePerson title='Love'
                            img={require("../../image/kpv.jpg")}
                        />
                        <OnlinePerson title='Love'
                            img={require("../../image/kpv.jpg")}
                        />
                        <OnlinePerson title='Love'
                            img={require("../../image/kpv.jpg")}
                        />
                        <OnlinePerson title='Love'
                            img={require("../../image/kpv.jpg")}
                        />
                        <OnlinePerson title='Love'
                            img={require("../../image/kpv.jpg")}
                        />
                        <OnlinePerson title='Love'
                            img={require("../../image/kpv.jpg")}
                        />

                    </ScrollView>

                    <View style={styles.person}>
                        <Person
                            img={require('../../image/kolpheng.jpg')}
                            name='Kol Pheng'
                            payment={10}
                        />
                           <Person
                            img={require('../../image/kolpheng.jpg')}
                            name='Kol Pheng'
                            payment={10}
                        />

<Person
                            img={require('../../image/kolpheng.jpg')}
                            name='Kol Pheng'
                            payment={10}
                        />
                           <Person
                            img={require('../../image/kolpheng.jpg')}
                            name='Kol Pheng'
                            payment={10}
                        />
                           <Person
                            img={require('../../image/kolpheng.jpg')}
                            name='Kol Pheng'
                            payment={10}
                        />
                           <Person
                            img={require('../../image/kolpheng.jpg')}
                            name='Kol Pheng'
                            payment={10}
                        />
                           <Person
                            img={require('../../image/kolpheng.jpg')}
                            name='Kol Pheng'
                            payment={10}
                        />
                           <Person
                            img={require('../../image/kolpheng.jpg')}
                            name='Kol Pheng'
                            payment={10}
                        />
                           <Person
                            img={require('../../image/kolpheng.jpg')}
                            name='Kol Pheng'
                            payment={10}
                        />
                           <Person
                            img={require('../../image/kolpheng.jpg')}
                            name='Kol Pheng'
                            payment={10}
                        />
                        
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}



