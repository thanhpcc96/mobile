import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text } from 'react-native';

// Import Screen
import { PickScreen, ResultSearch, DetailChuyen, Steps} from '../screens';


const PickTab = StackNavigator(
  {
    PickScreen: {
      screen: PickScreen,
    },
    ResultSearchChuyen: {
      screen: ResultSearch,
    },
    DetailChuyen: {
      screen: DetailChuyen,
    },
    Steps: {
      screen: Steps,
    },
  },
  {
    headerMode: 'screen',
    headerBackTitle: null,
  }
);
export default PickTab;
