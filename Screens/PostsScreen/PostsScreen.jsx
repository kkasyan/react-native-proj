import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <View style={[styles.header, styles.shadowProp]}>
        <Text style={styles.title}>Публикации</Text>
        <Image
          style={styles.logout}
          source={require('./assets/icons/log-out.png')}
        />
      </View>
      <View style={styles.userList}>
        <View style={styles.userItem}>
          <Image
            style={styles.avatar}
            source={require('./assets/images/Rectangle22.jpg')}
          />
          <View style={styles.userInfoWrap}>
            <Text style={styles.name}>Natali Romanova</Text>
            <Text style={styles.email}>email@example.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.navWrap}>
        <View style={styles.navigationBar}>
          <Image
            style={styles.home}
            source={require('./assets/icons/grid.png')}
          ></Image>
          <TouchableOpacity style={styles.add}>
            <Image
              style={styles.plus}
              source={require('./assets/icons/union.png')}
            ></Image>
          </TouchableOpacity>
          <Image
            style={styles.profile}
            source={require('./assets/icons/user.png')}
          ></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // position: 'relative',
    // overflow: 'hidden',
    // alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    marginTop: 27,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#000',
    borderTopColor: 'transparent',
    // shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.18,
    shadowRadius: 0,
    elevation: 1,
    paddingBottom: 11,
  },
  // shadowProp: {
  //   // shadowOffset: { width: 0, height: 0.5 },
  //   // shadowColor: 'rgba(0, 0, 0, 0.3)',
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 5,
  //   },
  //   shadowOpacity: 0.18,
  //   shadowRadius: 1.0,

  //   elevation: 1,
  // },
  title: {
    // textAlign: 'center',
    fontSize: 17,
    fontWeight: '500',
  },
  logout: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 0,
    marginRight: 10,
  },
  userList: {},
  userItem: {
    marginTop: 32,
    marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: { marginRight: 8 },
  userInfoWrap: {},
  name: {
    fontWeight: '700',
    fontSize: 13,
  },
  email: {
    fontSize: 11,
    color: 'rgba(33, 33, 33, 0.8)',
  },
  navWrap: {
    // justifyContent: 'stretch',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  navigationBar: {
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
    paddingTop: 9,
    paddingBottom: 34,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // justifyContent: 'center',
    borderTopColor: '#000',
    // shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.18,
    shadowRadius: 0,
    elevation: 1,
  },
  home: {
    width: 24,
    height: 24,
    // marginLeft: 90
  },
  add: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF6C00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    width: 13,
    height: 13,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  profile: {
    width: 24,
    height: 24,
    // marginRight: 90
  },
});
