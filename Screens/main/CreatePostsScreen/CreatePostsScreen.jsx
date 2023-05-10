import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useState, useEffect } from 'react';

import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';

import { FontAwesome, Feather, EvilIcons } from '@expo/vector-icons';

export default function CreatePostsScreen({ navigation }) {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hover, setHover] = useState(false);
  const [title, setTitle] = useState('');
  const [inputLocation, setInputLocation] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();

      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    console.log('location', location.coords.latitude);
    console.log('location', location.coords.longitude);
    setPhoto(photo.uri);
    await MediaLibrary.createAssetAsync(photo.uri);
    console.log('photo=====>', photo);
  };

  const sendPost = () => {
    navigation.navigate('Feed', { photo });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.addForm}>
          <View style={styles.cameraWrap}>
            <Camera style={styles.camera} type={type} ref={setCamera}>
              <View style={styles.imageTemplate}>
                {photo && (
                  <View style={styles.photoContainer}>
                    <Image
                      source={{
                        uri: photo,
                      }}
                      style={{ height: 200, width: 200 }}
                    />
                  </View>
                )}
                <TouchableOpacity
                  style={styles.flipContainer}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                >
                  <Text style={styles.flipText}>Flip</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={takePhoto}>
                  <View
                    style={[
                      styles.iconCircle,
                      {
                        backgroundColor: photo
                          ? 'rgba(255, 255, 255, 0.3)'
                          : '#FFFFFF',
                      },
                    ]}
                  >
                    <FontAwesome
                      name="camera"
                      size={24}
                      style={{ color: photo ? '#FFFFFF' : '#BDBDBD' }}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </Camera>
          </View>
          <View>
            <Text style={styles.addText}>Upload photo</Text>
            <TextInput
              style={styles.inputName}
              placeholder="Name..."
              value={title}
              onChangeText={(value) =>
                setTitle((prevState) => ({ ...prevState, value }))
              }
            />
            <View style={styles.locationWrap}>
              <EvilIcons
                style={styles.locationIcon}
                name="location"
                size={30}
                color="#BDBDBD"
              />
              <TextInput
                style={styles.inputLocation}
                placeholder="Location..."
                value={inputLocation}
                onChangeText={(value) =>
                  setInputLocation((prevState) => ({ ...prevState, value }))
                }
              />
            </View>
          </View>
          <View style={styles.btnWrap}>
            <TouchableOpacity
              onPress={sendPost}
              style={[
                styles.btn,
                { backgroundColor: hover ? '#FF6C00' : '#F6F6F6' },
              ]}
              onFocus={() => setHover(true)}
              onBlur={() => setHover(false)}
              // onMouseEnter={() => setHover(true)}
              // onMouseLeave={() => setHover(false)}
            >
              <Text style={styles.publText}>Post</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteBtn}>
              <Feather name="trash-2" size={24} color="#DADADA" />
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
    alignItems: 'center',
  },
  addForm: { marginTop: 32 },
  cameraWrap: {
    height: 240,
    width: 343,
    overflow: 'hidden',
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 1,
  },
  camera: {
    height: 240,
    width: 343,
    justifyContent: 'center',
  },
  imageTemplate: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoContainer: {
    position: 'absolute',
    flex: 1,
  },
  flipContainer: {},
  flipText: { fontSize: 16, marginBottom: 10, color: 'white' },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  addText: {
    lineHeight: 18.75,
    marginTop: 8,
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
    lineHeight: 18.75,
  },
  locationWrap: { flexDirection: 'row' },
  locationIcon: {
    position: 'absolute',
    left: -2,
    bottom: 50,
  },
  inputLocation: {
    marginBottom: 32,
    height: 50,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    flex: 1,
    paddingLeft: 24,
    fontSize: 16,
    lineHeight: 18.75,
  },
  btnWrap: { alignItems: 'center', justifyContent: 'flex-end' },
  btn: {
    width: 343,
    height: 51,
    borderRadius: 100,
    // backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 70,
  },
  publText: {
    color: '#BDBDBD',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 18.75,
  },
  deleteBtn: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
