import React from 'react';
import { StackNavigator } from 'react-navigation';

// Import Screen
import {
  PickScreen,
} from '../screens';

const PickTab = StackNavigator(
  {
    PickScreen: {
      screen: PickScreen,
    },
  },
  {
    headerMode: 'screen',
    headerBackTitle: null,
  }
);
export default PickTab;
