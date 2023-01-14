import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('./assets/images/PhotoBG.jpg')}
        resizeMode="cover"
      >
        <View style={styles.form}>
          <Text style={styles.regTitle}>Войти</Text>
          <TextInput
            style={styles.input}
            placeholder="Адрес электронной почты"
            placeholderTextColor={'#BDBDBD'}
          />
          <View>
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              placeholderTextColor={'#BDBDBD'}
              secureTextEntry={true}
            />
            <Text style={styles.showPass}>Показать</Text>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Войти</Text>
          </TouchableOpacity>
          <Text style={styles.alreadyHaveText}>
            Нет аккаунта? Зарегистрироваться
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    // resizeMode: 'cover',
    // justifyContent: 'center',
  },
  form: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  regTitle: {
    fontSize: 30,
    // fontWeight: 500,
    color: '#212121',
    letterSpacing: 0.01,
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 25,
  },
  input: {
    height: 50,
    margin: 8,
    padding: 16,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    marginHorizontal: 16,
    backgroundColor: '#F6F6F6',
    fontSize: 16,
  },
  showPass: {
    color: '#1B4371',
    fontSize: 16,
    textAlign: 'right',
    marginRight: 32,
    marginTop: -45,
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
  },
  alreadyHaveText: {
    color: '#1B4371',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 144,
  },
});
