import React from 'react';
import { View } from 'react-native';
import {
  FormInput,
  FormLabel,
  FormValidationMessage,
} from 'react-native-elements';

const TextInputWithValidations = ({
  input,
  containerStyle,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <View style={containerStyle} >
    <FormLabel labelStyle={{ color: '#FFF' }}>
      {label}        
    </FormLabel>
    <FormInput
      {...input}
      {...custom}
      style={{ backgroundColor: 'rgba(238,238,238,0.5)' }}
    />
    {error && touched &&
            <FormValidationMessage labelStyle={{ color: '#DA0808' }}>
              {error}
            </FormValidationMessage>
    }

  </View>
);
export default TextInputWithValidations;
