import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function CreatePostsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.arrowBack}
          source={require('./assets/icons/arrow-left.png')}
        />
        <Text style={styles.title}>Создать публикацию</Text>
      </View>
      <View style={styles.addForm}>
        <View style={styles.imageWrap}>
          <View style={styles.imageTemplate}>
            <View style={styles.iconCircle}>
              <Image
                style={styles.camera}
                source={require('./assets/icons/camera.png')}
              />
            </View>
          </View>
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.addText}>Загрузите фото</Text>
          <TextInput style={styles.inputName} placeholder="Название..." />
          <View style={styles.locationWrap}>
            <TextInput
              style={styles.inputLocation}
              placeholder="Местность..."
            />
            {/* <Image
              style={styles.location}
              source={require('./assets/icons/map-pin.png')}
            /> */}
          </View>
        </View>
        <View style={styles.btnWrap}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.publText}>Опубликовать</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteBtn}>
            <Image
              style={styles.delIcon}
              source={require('./assets/icons/trash-2.png')}
            />
          </TouchableOpacity>
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
  imageTemplate: {
    height: 240,
    width: 343,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
});
