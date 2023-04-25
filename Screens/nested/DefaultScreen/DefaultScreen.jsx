import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import { useState, useEffect } from 'react';
import { EvilIcons, FontAwesome } from '@expo/vector-icons';

export default function DefaultScreen({ route, navigation }) {
  const [posts, setPosts] = useState([]);

  console.log('route params', route.params);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  console.log('posts', posts);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.wrap}>
          <View style={styles.userList}>
            <View style={styles.userItem}>
              <Image
                style={styles.avatar}
                source={require('../../../assets/images/Rectangle22.jpg')}
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
              <Text style={styles.imageName}>Forest</Text>
              <View style={styles.description}>
                <View style={styles.comment}>
                  <FontAwesome
                    name="comment-o"
                    size={24}
                    color="#BDBDBD"
                    title="comments"
                    onPress={() => navigation.navigate('Comments')}
                  />
                  <Text style={styles.commentCounter}>0</Text>
                </View>
                <View style={styles.loc}>
                  <EvilIcons
                    name="location"
                    size={30}
                    color="#BDBDBD"
                    title="map"
                    onPress={() => navigation.navigate('Map')}
                  />
                  <Text style={styles.locationText}>
                    Ivano-Frankivs'k, Ukraine
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <FlatList
            data={posts}
            keyExtractor={(item, indx) => indx.toString()}
            renderItem={({ item }) => (
              <View>
                <Image
                  source={{ uri: item.photo }}
                  style={{
                    width: 350,
                    height: 200,
                  }}
                />
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  wrap: {
    marginHorizontal: 16,
    marginTop: 32,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  userList: {
    marginBottom: 32,
  },
  userItem: {
    // marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: { marginRight: 8 },
  name: {
    fontFamily: 'bold',
    fontSize: 13,
    lineHeight: 15,
  },
  email: {
    fontSize: 11,
    color: 'rgba(33, 33, 33, 0.8)',
    fontFamily: 'regular',
    lineHeight: 13,
  },
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
  imageName: {
    marginBottom: 11,
    fontFamily: 'medium',
    lineHeight: 19,
    fontSize: 16,
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  comment: { flexDirection: 'row', alignItems: 'center' },
  commentCounter: {
    marginLeft: 9,
    color: '#BDBDBD',
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
