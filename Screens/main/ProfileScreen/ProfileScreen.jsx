import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  AntDesign,
  Entypo,
  FontAwesome,
  EvilIcons,
  Feather,
} from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../../assets/images/PhotoBG.jpg')}
        resizeMode="cover"
      >
        <View style={styles.form}>
          <Feather
            name="log-out"
            size={24}
            color="#BDBDBD"
            style={styles.logoutIcon}
          />
          <View style={styles.avatarWrap}>
            <View style={styles.avatar}>
              <TouchableOpacity style={styles.avatarDel}>
                <Entypo name="cross" size={14} color="#E8E8E8" />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.userName}>Natali Romanova</Text>
          <View style={styles.feed}>
            <View style={styles.post}>
              <View style={styles.imageWrap}>
                <View style={styles.imageTemplate}></View>
              </View>
              <Text style={styles.imageName}>Forest</Text>
              <View style={styles.description}>
                <View style={styles.rates}>
                  <View style={styles.comment}>
                    <FontAwesome name="comment" size={24} color="#FF6C00" />
                    <Text style={styles.commentCounter}>0</Text>
                  </View>
                  <View style={styles.comment}>
                    <AntDesign name="like2" size={24} color="#FF6C00" />
                    <Text style={styles.commentCounter}>0</Text>
                  </View>
                </View>
                <View style={styles.loc}>
                  <EvilIcons name="location" size={30} color="#BDBDBD" />
                  <Text style={styles.locationText}>Ukraine</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    position: 'relative',
    flex: 1,
    backgroundColor: '#fff',
  },
  image: { flex: 1, justifyContent: 'flex-end' },
  form: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  logoutIcon: {
    position: 'absolute',
    right: 0,
    marginTop: 24,
    marginRight: 19,
  },
  avatarWrap: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    marginTop: -60,
  },
  avatarDel: {
    width: 25,
    height: 25,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 25 / 2,
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: 14,
    marginRight: -25 / 2,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 30,
    lineHeight: 35,
    fontFamily: 'medium',
    textAlign: 'center',
    marginBottom: 33,
  },
  post: { marginBottom: 34, marginHorizontal: 16 },
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageName: {
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 11,
    fontFamily: 'medium',
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rates: { flexDirection: 'row' },
  comment: {
    flexDirection: 'row',
    marginRight: 24,
    fontFamily: 'regular',
    alignItems: 'center',
  },
  commentCounter: {
    marginLeft: 9,
    color: '#212121',
    fontFamily: 'regular',
    fontSize: 16,
    lineHeight: 19,
  },
  loc: { flexDirection: 'row', alignItems: 'center' },
  locationText: {
    marginLeft: 8,
    textDecorationLine: 'underline',
    fontFamily: 'regular',
    fontSize: 16,
    lineHeight: 19,
  },
});
