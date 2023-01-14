import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../assets/images/PhotoBG.jpg')}
        resizeMode="cover"
      >
        <View style={styles.form}>
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
          <Text style={styles.regTitle}>Регистрация</Text>
          <TextInput
            style={styles.input}
            placeholder="Логин"
            placeholderTextColor={'#BDBDBD'}
          />
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
            <Text style={styles.btnText}>Зарегистрироваться</Text>
          </TouchableOpacity>
          <Text style={styles.alreadyHaveText}>Уже есть аккаунт? Войти</Text>
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
    marginBottom: 78,
  },
});
