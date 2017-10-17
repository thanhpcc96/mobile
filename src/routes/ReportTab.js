import React from 'react';
import { StackNavigator } from 'react-navigation';

// Import Screen
import {
    TrackingScreen
} from '../screens'
const ReportTab = StackNavigator(
    {
        HomeScreen: {
            screen: TrackingScreen
        }
    },
    {
        headerMode: 'screen',
        headerBackTitle: null
    }
)
export default ReportTab;