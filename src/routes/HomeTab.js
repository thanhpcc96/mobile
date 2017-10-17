import React from 'react';
import { StackNavigator } from 'react-navigation';

// Import Screen
import {
    HomeScreen
} from '../screens'
const HomeTab = StackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen
        }
    },
    {
        headerMode: 'screen',
        headerBackTitle: null
    }
)
export default HomeTab;