import React from 'react';
import Heading from './Heading';
import BrowseNews from './BrowseNews'
import {Icon} from 'react-native-elements'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';


const MainComponent = createBottomTabNavigator({
  Headlines: Heading, 
  Browse: BrowseNews
},{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Headlines') {
          iconName = `newspaper-o`;
        } else if (routeName === 'Browse') {
          iconName = `align-center`;
        }
        else if(routeName=== 'SelectCity'){
          iconName=`building`
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} type="font-awesome" size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
  );

export default createAppContainer(MainComponent);

//https://expo.io/artifacts/3324b286-9fe4-4f75-85e1-e36459d7fc12