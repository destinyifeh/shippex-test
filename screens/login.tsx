// screens/LoginScreen.js
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TextInput as Input } from 'react-native-paper';

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import HeaderWrapper from '../components/header-wrapper';

// export default function LoginScreen2222() {
// const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
//   const [url, setUrl] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.container}
//     >
//       <Text style={styles.logo}>SHIPPEX</Text>
//       <Text style={styles.title}>Login</Text>
//       <Text style={styles.subtitle}>Please enter your First, Last name and your phone number in order to register</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="URL"
//         value={url}
//         onChangeText={setUrl}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Username / Email"
//         value={username}
//         onChangeText={setUsername}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//     </KeyboardAvoidingView>
//   );
// }


export default function LoginScreen ()  {
    return(
         <HeaderWrapper
      title="Staffs"
      contentContainerStyle={{backgroundColor: '#FFFFFF'}}>
      <View style={styles.loginCard}>
        <View >
          <TouchableOpacity >
            {/* <Ionicons name="arrow-back" size={hp('3%')} color="#333" /> */}
          </TouchableOpacity>
          <Text style={styles.loginTitle}>Login</Text>
          <View style={{ width: wp('5%') }} />
        </View>
        <Text style={styles.loginSubtitle}>
          Please enter your First, Last name and your phone number in order to register
        </Text>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>URL</Text>
          <TextInput
            style={styles.textInput}
            placeholder="https://www.brandlink.com"
          />
        </View>
        <View style={styles.inputGroup}>

             <Input
      label="Password"
      secureTextEntry
      right={<Input.Icon icon="eye" />}
    />
          <Text style={styles.inputLabel}>Username / Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="ali@brandlink.com"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.submitButton} >
          <Text style={styles.submitButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </HeaderWrapper>
  );
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3F51B5',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    backgroundColor: '#3F51B5',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // Splash Screen Styles
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

  // Login Screen Styles
  loginContainer: {
    flex: 1,
    backgroundColor: '#4a90e2',
    justifyContent: 'flex-end',
  },
  loginCard: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: wp('8%'),
    borderTopRightRadius: wp('8%'),
    paddingHorizontal: wp('8%'),
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
    position:"absolute",
    bottom:5,
    alignSelf:"center",
    width: '100%',
    backgroundColor: '#4a90e2',
    paddingVertical: hp('2%'),
    borderRadius: wp('2%'),
    alignItems: 'center',
    marginTop: hp('3%'),
  },
  submitButtonText: {
    color: '#fff',
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
  },

  // Home Screen Styles
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

  // Modal Styles
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
});