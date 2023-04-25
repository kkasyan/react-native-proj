import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function CommentsScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.wrap}>
          <View style={styles.imageWrap}>
            <View style={styles.imageTemplate}></View>
          </View>
          <View style={styles.commentsFeed}>
            <View style={styles.commentRight}>
              <Image
                style={styles.avatarRight}
                source={require('../../../assets/icons/Ellipse.png')}
              />
              <View style={styles.commentGroupRight}>
                <Text style={styles.comment}>
                  Really love your most recent photo. I've been trying to
                  capture the same thing for a few months and would love some
                  tips!
                </Text>
                <Text style={styles.commentTimeRight}>
                  09 june, 2020 | 08:40
                </Text>
              </View>
            </View>
            <View style={styles.commentLeft}>
              <View style={styles.commentGroupLeft}>
                <Text style={styles.comment}>
                  A fast 50mm like f1.8 would help with the bokeh. I’ve been
                  using primes as they tend to get a bit sharper images.
                </Text>
                <Text style={styles.commentTime}>09 june, 2020 | 09:14</Text>
              </View>
              <Image
                style={styles.avatarLeft}
                source={require('../../../assets/icons/Ellipse2.png')}
              />
            </View>
            <View style={styles.commentRight}>
              <Image
                style={styles.avatarRight}
                source={require('../../../assets/icons/Ellipse.png')}
              />
              <View style={styles.commentGroupRight}>
                <Text style={styles.comment}>
                  Thank you! That was very helpful!
                </Text>
                <Text style={styles.commentTimeRight}>
                  09 june, 2020 | 09:20
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.addComment}>
            <TextInput style={styles.input} placeholder="Make a comment..." />
            <TouchableOpacity style={styles.btn}>
              <AntDesign name="arrowup" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
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
  },
  imageWrap: {
    marginBottom: 32,
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
  commentsFeed: {
    marginRight: 42,
    fontFamily: 'regular',
    // marginHorizontal: 16,
  },
  commentRight: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  commentLeft: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  avatarRight: { marginRight: 16 },
  avatarLeft: { marginLeft: 16 },
  commentGroupRight: {
    flexDirection: 'column',
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
  commentGroupLeft: {
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderTopLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
  comment: {
    fontSize: 13,
    lineHeight: 18,
    color: '#212121',
    marginBottom: 8,
  },
  commentTime: {
    fontSize: 10,
    lineHeight: 11.72,
    color: '#BDBDBD',
  },
  commentTimeRight: {
    fontSize: 10,
    color: '#BDBDBD',
    textAlign: 'right',
    lineHeight: 12,
  },
  addComment: {
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
    position: 'relative',
  },
  input: {
    fontSize: 16,
    color: '#BDBDBD',
    fontFamily: 'interMedium',
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 15,
    paddingRight: 8,
    flex: 1,
    lineHeight: 19,
  },
  btn: {
    width: 34,
    height: 34,
    borderRadius: 34 / 2,
    backgroundColor: '#FF6C00',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    marginRight: 8,
  },
});
