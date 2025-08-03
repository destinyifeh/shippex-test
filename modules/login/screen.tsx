import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { z } from 'zod';

import { FormInput } from '../../components/form-input';
import HeaderWrapper from '../../components/header-wrapper';
import { RootStackParamList } from '../../screens/types';
import { useUserActions } from '../../services/api/app/actions';
import { useAuthStore } from '../../stores/use-auth-store';
const deviceHeight = Dimensions.get('window').height;
type formData = {
  email: string;
  password: string;
  //url: string;
};

const loginDataSchema = z.object({
  email: z.email({ message: 'Invalid email address' }),
  password: z.string().trim().min(1, { message: 'Required' }),
  // url: z
  //   .string()
  //   .regex(
  //     /^((https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,})(\/.*)?$/i,
  //     'Please enter a valid URL.',
  //   )
  //   .or(z.literal('')),
});
export const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isFocused, setIsFocused] = useState(false);
  const [url, setTUrl] = useState('');
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { loginRequest } = useUserActions();
  const { setUser } = useAuthStore(state => state);
  const {
    control,
    handleSubmit,
    setError,
    reset,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<formData>({
    resolver: zodResolver(loginDataSchema),
    mode: 'onChange',
  });

  const onSubmitLoginData = async (data: formData) => {
    console.log(data, 'dataa');

    clearErrors(['email', 'password']);

    setIsLoading(true);
    loginRequest.mutate(data, {
      onSuccess(data: any, variables, context) {
        console.log(data, 'data isSuccess');
        const { message, user, accessToken, refreshToken } = data.data;
        //setUser(user);
        // saveDeviceData(ACCESS_TOKEN_KEY, accessToken);
        // saveDeviceData(REFRESH_TOKEN_KEY, refreshToken);
        reset();
        navigation.replace('Home');
      },
      onError(error: any, variables, context) {
        console.log(error, 'error submitting...');
        const { message } = error?.data || {};
      },
      onSettled(data, error, variables, context) {
        setIsLoading(false);
        console.log(data, 'final data');
      },
    });
  };

  return (
    <HeaderWrapper contentContainerStyle={{ backgroundColor: '#FFFFFF' }}>
      <StatusBar translucent barStyle="light-content" backgroundColor="black" />
      <View style={styles.loginCard}>
        <View>
          <Text style={styles.loginTitle}>Login</Text>
          <View style={{ width: wp('5%') }} />
        </View>
        <Text style={styles.loginSubtitle}>
          Please enter your email and your password in order to login
        </Text>

        <View>
          {/* <Controller
            control={control}
            name="url"
            rules={{
              required: 'Required',
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormInput
                label="URL"
                onChangeText={onChange}
                value={value}
                error={errors.url?.message}
                disabled={isLoading}
              />
            )}
          /> */}

          <Controller
            control={control}
            name="email"
            rules={{
              required: 'Required',
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormInput
                label="Email"
                onChangeText={onChange}
                value={value}
                error={errors.email?.message}
                disabled={isLoading}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            rules={{
              required: 'Required',
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormInput
                label="Password"
                onChangeText={onChange}
                value={value}
                error={errors.password?.message}
                disabled={isLoading}
                secureTextEntry={true}
              />
            )}
          />
        </View>

        <TouchableOpacity
          style={[
            styles.submitButton,
            { backgroundColor: isLoading || !isValid ? '#EAE7F2' : '#2F50C1' },
          ]}
          onPress={() => navigation.navigate('Home')}
          // onPress={handleSubmit(onSubmitLoginData)}
          disabled={isLoading || !isValid}
        >
          <Text
            style={[
              styles.submitButtonText,
              { color: isLoading || !isValid ? '#A7A3B3' : '#fff' },
            ]}
          >
            {isLoading ? 'Please wait...' : 'Login'}
          </Text>
        </TouchableOpacity>
      </View>
    </HeaderWrapper>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  splashContainer: {
    flex: 1,
    backgroundColor: '#4a90e2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    color: '#fff',
    fontSize: wp('8%'),
    fontWeight: 'bold',
    marginTop: hp('2%'),
    letterSpacing: 2,
  },
  loginButton: {
    position: 'absolute',
    bottom: hp('10%'),
    width: wp('80%'),
    backgroundColor: '#fff',
    paddingVertical: hp('2%'),
    borderRadius: wp('2%'),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  loginButtonText: {
    color: '#4a90e2',
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
  },

  loginContainer: {
    flex: 1,
    backgroundColor: '#4a90e2',
    justifyContent: 'flex-end',
  },
  loginCard: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: wp('8%'),
    borderTopRightRadius: wp('8%'),
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('5%'),
    paddingBottom: hp('10%'),
    minHeight: hp('80%'),
  },
  loginHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loginTitle: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    color: '#333',
  },
  loginSubtitle: {
    fontSize: wp('3.5%'),
    color: '#8e8e93',
    marginTop: hp('2%'),
    marginBottom: hp('3%'),
  },
  inputGroup: {
    marginBottom: hp('2%'),
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
  submitButton: {
    position: 'absolute',
    bottom: 1.5,
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#4a90e2',
    paddingVertical: hp('1.5%'),
    borderRadius: wp('2%'),
    alignItems: 'center',
    marginTop: hp('3%'),
  },
  submitButtonText: {
    color: '#fff',
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
  },

  homeContainer: {
    flex: 1,
    backgroundColor: '#f2f2f7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5ea',
    backgroundColor: '#fff',
    paddingTop: hp('6%'),
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: '#333',
    marginLeft: wp('2%'),
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: wp('3.5%'),
    color: '#333',
    marginRight: wp('2%'),
  },
  searchSection: {
    backgroundColor: '#fff',
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5ea',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f7',
    borderRadius: wp('2%'),
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1.2%'),
  },
  searchInput: {
    flex: 1,
    fontSize: wp('4%'),
    marginLeft: wp('2%'),
  },
  filterActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('2%'),
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e5e5ea',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1%'),
    borderRadius: wp('2%'),
  },
  filterText: {
    marginLeft: wp('1%'),
    fontSize: wp('3.5%'),
    color: '#333',
  },
  scanButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4a90e2',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1%'),
    borderRadius: wp('2%'),
  },
  scanButtonText: {
    marginLeft: wp('1%'),
    fontSize: wp('3.5%'),
    color: '#fff',
  },
  shipmentsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
    marginTop: hp('2%'),
    marginBottom: hp('1%'),
  },
  shipmentsTitle: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: '#333',
  },
  markAllText: {
    fontSize: wp('3.5%'),
    color: '#4a90e2',
  },
  shipmentList: {
    paddingHorizontal: wp('5%'),
    paddingBottom: hp('10%'),
  },
  shipmentCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: wp('2%'),
    padding: wp('4%'),
    marginBottom: hp('2%'),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  checkboxContainer: {
    paddingRight: wp('4%'),
  },
  checkbox: {
    width: wp('5%'),
    height: wp('5%'),
    borderRadius: wp('1%'),
    borderWidth: 1.5,
    borderColor: '#e5e5ea',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    width: wp('5%'),
    height: wp('5%'),
    borderRadius: wp('1%'),
    backgroundColor: '#4a90e2',
    borderColor: '#4a90e2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shipmentContent: {
    flex: 1,
  },
  shipmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shipmentAwb: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    color: '#333',
  },
  shipmentStatus: {
    fontSize: wp('3%'),
    color: '#fff',
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('0.5%'),
    borderRadius: wp('1.5%'),
    overflow: 'hidden',
    fontWeight: 'bold',
  },
  shipmentRoute: {
    fontSize: wp('3.5%'),
    color: '#8e8e93',
    marginTop: hp('0.5%'),
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5ea',
    paddingVertical: hp('1%'),
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontSize: wp('2.8%'),
    color: '#b4b4b4',
    marginTop: hp('0.5%'),
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: wp('8%'),
    borderTopRightRadius: wp('8%'),
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('3%'),
    maxHeight: hp('60%'),
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  modalHeaderTitle: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    color: '#333',
  },
  modalCancelText: {
    fontSize: wp('4%'),
    color: '#8e8e93',
  },
  modalDoneText: {
    fontSize: wp('4%'),
    color: '#4a90e2',
    fontWeight: 'bold',
  },
  filterOptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  filterOption: {
    borderWidth: 1,
    borderColor: '#e5e5ea',
    borderRadius: wp('4%'),
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1.5%'),
    margin: wp('1.5%'),
  },
  filterOptionSelected: {
    backgroundColor: '#4a90e2',
    borderColor: '#4a90e2',
  },
  filterOptionText: {
    fontSize: wp('4%'),
    color: '#333',
  },
  optionTextSelected: {
    color: '#fff',
  },
  container: {
    backgroundColor: '#F4F2F8',
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
    margin: 10,
  },
});
