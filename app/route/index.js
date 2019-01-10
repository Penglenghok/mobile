import React from 'react';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator,createAppContainer,createStackNavigator} from 'react-navigation'
import HomeScreen from './../screen/home';
import ProfileScreen from './../screen/profile';
import VideoScreen from './../screen/video';
import EventScreen from './../screen/event'




const appTabs=createBottomTabNavigator({
    Home:HomeScreen,
    Video:VideoScreen,
    Event:EventScreen,
},
{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home${focused ? '' : ''}`;
        } else if (routeName === 'Video') {
          iconName = `people${focused ? '' : ''}`;
        }
        else if (routeName === 'Event') {
            iconName = `map${focused ? '' : ''}`;
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 40 : 34} color={tintColor} width={200} />;
      },

    }),
    tabBarOptions: {
      showLabel:false,
      activeTintColor: '#1da1f2',
      inactiveTintColor: 'gray',
      style:{
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:100,
        borderTopColor: 'transparent',
        paddingTop:15
        
      }
    },
  }
)
export default createAppContainer(appTabs);
