import { useState } from 'react';
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
} from 'react-native';
import { useUser } from '../../../AppContext';

const initialState = { email: '', password: '' };

export default function LoginScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [data, setData] = useState(initialState);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPass, setIsFocusedPass] = useState(false);

  const { logIn, isAuth } = useUser();

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(data);
    setData(initialState);
    // navigation.navigate('Feed', { data, isAuth });
  };

  const onLogin = () => {
    console.log('Credentials', data);
  };

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
            }}
          >
            <Text style={styles.regTitle}>Login</Text>
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
                  styles.input1,
                  {
                    borderColor: isFocusedPass ? '#FF6C00' : '#E8E8E8',
                    borderWidth: 1,
                  },
                ]}
                value={data.password}
                placeholder="Password"
                placeholderTextColor={'#BDBDBD'}
                textContentType="password"
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
            {/* use onLogin here to have console.log info ====> */}
            <TouchableOpacity
              style={styles.btn}
              onPress={
                logIn
                // () =>
                // navigation.navigate('Posts', {
                //   screen: 'Feed',
                //   params: { data },
                // })
              }
            >
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text
                style={[
                  styles.alreadyHaveText,
                  {
                    paddingBottom: isShowKeyboard ? 0 : 144,
                  },
                ]}
              >
                Don't have an account? Please register
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
  regTitle: {
    fontFamily: 'medium',
    fontSize: 30,
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
    borderRadius: 8,
    marginHorizontal: 16,
    backgroundColor: '#F6F6F6',
    fontSize: 16,
    lineHeight: 19,
  },
  input1: {
    fontFamily: 'regular',
    height: 50,
    margin: 8,
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    backgroundColor: '#F6F6F6',
    fontSize: 15,
    lineHeight: 18,
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
  },
  btn: {
    height: 51,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    marginHorizontal: 16,
    marginTop: 43,
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
    fontFamily: 'regular',
    lineHeight: 19,
  },
});
