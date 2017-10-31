import React from 'react';
import { StackNavigator } from 'react-navigation';

// Import Screen
import {
  PaymentScreen,
} from '../screens';

const PaymentTab = StackNavigator(
  {
    PaymentScreen: {
      screen: PaymentScreen,
    },
  },
  {
    headerMode: 'screen',
    headerBackTitle: null,
  }
);
export default PaymentTab;
