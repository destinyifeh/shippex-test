// screens/LoginScreen.js
import React, { useState } from 'react';
import { KeyboardTypeOptions, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface FormInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  isLoading?: boolean;
  placeholder?: string;
  secureTextEntry?: boolean;
  disabled?: boolean;
  keyboardType?: KeyboardTypeOptions;
  textContentType?: 'password' | 'username' | 'oneTimeCode' | 'emailAddress';
  defaultValue?: string;
  clearErrors?: () => void;
}

export const FormInput = ({
  label,

  value,
  onChangeText,
  error,
  disabled,
  keyboardType = 'default',
  textContentType,
  defaultValue,
  secureTextEntry,
  clearErrors,
}: FormInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const onBlurTrigger = () => {
    setIsFocused(false);
    if (clearErrors) clearErrors();
  };

  const onFocusTrigger = () => {
    setIsFocused(true);
  };

  return (
    <View style={styles.inputGroup}>
      <View
        style={[
          styles.container,
          {
            borderColor: isFocused ? '#2F50C1' : 'transparent',
          },
        ]}
      >
        <TextInput
          underlineColor="transparent"
          cursorColor="#2F50C1"
          label={
            <Text
              style={{
                color: '#A7A3B3',
              }}
            >
              {label}
            </Text>
          }
          keyboardType={keyboardType}
          textContentType={textContentType}
          defaultValue={defaultValue}
          editable={!disabled}
          mode="flat"
          value={value}
          onChangeText={onChangeText}
          onFocus={onFocusTrigger}
          onBlur={onBlurTrigger}
          style={{
            backgroundColor: '#F4F2F8',
            height: 50,
          }}
          textColor="#2F50C1"
          theme={{
            colors: {
              primary: 'transparent',
              background: '#F4F2F8',
            },
          }}
          secureTextEntry={secureTextEntry}
        />
      </View>
      {Boolean(error) && (
        <Text style={{ color: 'red', marginLeft: 15 }}>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  inputGroup: {
    marginBottom: hp('1%'),
  },
  inputLabel: {
    fontSize: wp('4%'),
    fontWeight: '500',
    color: '#333',
    marginBottom: hp('0.5%'),
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: wp('2%'),
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1.5%'),
    fontSize: wp('4%'),
    borderWidth: 1,
    borderColor: '#e5e5ea',
  },

  container: {
    backgroundColor: '#F4F2F8',
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
    margin: 10,
  },
});
