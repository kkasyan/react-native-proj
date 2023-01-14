import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Публикации</Text>
        <Image
          style={styles.arrowBack}
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
      <View style={styles.feed}>
        <View style={styles.post}>
          <View style={styles.imageWrap}>
            <View style={styles.imageTemplate}></View>
          </View>
          <Text style={styles.imageName}>Лес</Text>
          <View style={styles.description}>
            <View style={styles.comment}>
              <Image
                stype={styles.commentImg}
                source={require('./assets/icons/Shape.png')}
              />
              <Text style={styles.commentCounter}>0</Text>
            </View>
            <View style={styles.loc}>
              <Image
                style={styles.location}
                source={require('./assets/icons/map-pin.png')}
              />
              <Text style={styles.locationText}>Ivano-Frankivs'k, Ukraine</Text>
            </View>
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
    position: 'relative',
    marginHorizontal: 16,
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
    marginBottom: 32,
  },
  arrowBack: {
    width: 24,
    height: 24,
  },
  title: {
    // textAlign: 'center',
    fontSize: 17,
    fontWeight: '500',
  },
  addForm: {},
  imageWrap: { alignItems: 'center' },

  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  camera: {
    width: 24,
    height: 24,
  },
  inputWrap: {
    marginHorizontal: 16,
  },
  addText: {
    fontSize: 16,
    color: '#BDBDBD',
    marginBottom: 48,
  },
  inputName: {
    fontSize: 16,
    color: '#BDBDBD',
    marginBottom: 32,
    height: 50,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
  },
  locationWrap: { flexDirection: 'row' },
  location: {
    width: 24,
    height: 24,
    fontSize: 16,
    color: '#BDBDBD',
  },
  inputLocation: {
    marginBottom: 32,
    height: 50,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
  },
  btnWrap: { alignItems: 'center', justifyContent: 'flex-end' },
  btn: {
    width: 343,
    height: 51,
    borderRadius: 100,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 70,
  },
  publText: { color: '#BDBDBD', textAlign: 'center' },
  deleteBtn: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  delIcon: {},
  userList: {
    marginBottom: 32,
  },
  userItem: {
    // marginLeft: 16,
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
  feed: {},
  post: { marginBottom: 34 },
  imageWrap: {
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageTemplate: {
    height: 240,
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageName: { marginBottom: 11, fontWeight: '500' },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  comment: { flexDirection: 'row' },
  commentImg: {},
  commentCounter: { marginLeft: 9, color: '#BDBDBD' },
  loc: { flexDirection: 'row' },
  location: {},
  locationText: { marginLeft: 8, textDecorationLine: 'underline' },
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
