import { useState, useEffect } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Dimensions,
  useWindowDimensions,
} from 'react-native';

const initialState = { login: '', email: '', password: '' };

export default function RegistrationScreen({ navigation }) {
  const [data, setData] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPass, setIsFocusedPass] = useState(false);
  const [isFocusedLogin, setIsFocusedLogin] = useState(false);
  // const [dimensions, setDimentions] = useState(
  //   Dimensions.get('window').height - 175
  // );

  // useEffect(() => {
  //   const onChange = () => {
  //     const height = Dimensions.get('window').height - 50;
  //     console.log('height', height);
  //     setDimentions(height);
  //   };
  //   Dimensions.addEventListener('change', onChange);
  // }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(data);
    setData(initialState);
  };

  // const { height } = useWindowDimensions();
  // useWindowDimensions().height;

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/PhotoBG.jpg')}
        />
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : ''}>
          <View
            style={{
              ...styles.form,
              // marginBottom: isShowKeyboard ? 0 : 78,
              // marginBottom: Keyboard.dismiss ? 0 : 78,
              // height: dimensions,
              // height: window.height < 350 ? height - 50 : height - 150,
            }}
          >
            <View style={styles.avatarWrap}>
              <View style={styles.avatar}>
                <TouchableOpacity style={styles.avatarAdd}>
                  <View style={styles.test}></View>
                  <View
                    style={[styles.test2, { transform: [{ rotate: '90deg' }] }]}
                  ></View>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.regTitle}>Registration</Text>
            <TextInput
              style={[
                styles.input,
                {
                  borderColor: isFocusedLogin ? '#FF6C00' : '#E8E8E8',
                  borderWidth: 1,
                },
              ]}
              value={data.login}
              placeholder="Login"
              textContentType="nickname"
              placeholderTextColor={'#BDBDBD'}
              onFocus={() => {
                setIsShowKeyboard(true);
                setIsFocusedLogin(true);
              }}
              onBlur={() => {
                setIsFocusedLogin(false);
              }}
              onChangeText={(value) =>
                setData((prevState) => ({ ...prevState, login: value }))
              }
            />
            <TextInput
              style={[
                styles.input,
                {
                  borderColor: isFocusedEmail ? '#FF6C00' : '#E8E8E8',
                  borderWidth: 1,
                },
              ]}
              value={data.email}
              placeholder="E-mail"
              textContentType="emailAddress"
              placeholderTextColor={'#BDBDBD'}
              onFocus={() => {
                setIsShowKeyboard(true);
                setIsFocusedEmail(true);
              }}
              onBlur={() => {
                setIsFocusedEmail(false);
              }}
              onChangeText={(value) =>
                setData((prevState) => ({ ...prevState, email: value }))
              }
            />
            <View style={styles.inputWrap}>
              <TextInput
                style={[
                  styles.input,
                  {
                    borderColor: isFocusedPass ? '#FF6C00' : '#E8E8E8',
                    borderWidth: 1,
                  },
                ]}
                placeholder="Password"
                value={data.password}
                textContentType="password"
                placeholderTextColor={'#BDBDBD'}
                secureTextEntry={true}
                onFocus={() => {
                  setIsShowKeyboard(true);
                  setIsFocusedPass(true);
                }}
                onBlur={() => {
                  setIsFocusedPass(false);
                }}
                onChangeText={(value) =>
                  setData((prevState) => ({ ...prevState, password: value }))
                }
              />
              <Text style={styles.showPass}>Show</Text>
            </View>
            <TouchableOpacity
              style={styles.btn}
              onPress={keyboardHide}
              // onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.btnText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={[
                  styles.alreadyHaveText,
                  {
                    marginBottom: isShowKeyboard ? 0 : 78,
                  },
                ]}
              >
                Already have an account? Log in
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  form: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarWrap: {
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    marginTop: -60,
  },
  avatarAdd: {
    width: 25,
    height: 25,
    borderColor: '#FF6C00',
    borderWidth: 1,
    borderRadius: 25 / 2,
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: 14,
    marginRight: -25 / 2,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  test: {
    width: 1,
    height: 13,
    backgroundColor: '#FF6C00',
    marginTop: 6,
    position: 'relative',
  },
  test2: {
    width: 1,
    height: 13,
    backgroundColor: '#FF6C00',
    marginTop: 6,
    position: 'absolute',
  },
  regTitle: {
    fontSize: 30,
    fontFamily: 'medium',
    color: '#212121',
    letterSpacing: 0.01,
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 25,
    lineHeight: 35,
  },
  input: {
    fontFamily: 'regular',
    height: 50,
    margin: 8,
    padding: 16,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    marginHorizontal: 16,
    backgroundColor: '#F6F6F6',
    fontSize: 16,
    lineHeight: 19,
  },
  inputWrap: {
    justifyContent: 'center',
  },
  showPass: {
    color: '#1B4371',
    fontSize: 16,
    position: 'absolute',
    right: 32,
    fontFamily: 'regular',
    lineHeight: 19,
  },
  btn: {
    height: 51,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    marginHorizontal: 16,
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'regular',
    lineHeight: 19,
  },
  alreadyHaveText: {
    color: '#1B4371',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 78,
    fontFamily: 'regular',
    lineHeight: 19,
  },
});
