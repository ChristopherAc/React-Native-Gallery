import React, {useState, useEffect} from 'react';
import {View, Image, FlatList} from 'react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import styles from '../../assets/style/style';
import {hasAndroidPermission} from '../../utils/permissions';
import fetcMockPhotos from '../../utils/mockHandler.tsx';
import InteractiveStatus from '../InteractiveStatus/InteractiveStatus.tsx';
import Animated, {SlideInUp} from 'react-native-reanimated';

export default function Album() {
  const [photos, setPhotos] = useState<ImageDTO[]>([]);
  const {fetchError, setFetchError} = useState(false);
  const [permission, setPermission] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [usingMock, setUsingMock] = useState(false);

  useEffect(() => {
    async function checkPermission() {
      let perm = await hasAndroidPermission();
      setPermission(perm);
    }
    if (!permission && !usingMock) {
      checkPermission();
    } else if (!usingMock) {
      setIsLoading(true);
      CameraRoll.getPhotos({
        first: 2500,
        assetType: 'Photos',
      })
        .then(r => {
          setTimeout(() => {
            setIsLoading(false);
            setPhotos(r.edges);
          }, 5000);
        })
        .catch(() => {
          setFetchError(true);
        });
    }
  }, [photos, setFetchError, permission, usingMock]);

  const getMockPhotos = () => {
    setUsingMock(true);
    setIsLoading(true);
    res = fetcMockPhotos();
    setTimeout(() => {
      setPhotos(res);
      setIsLoading(false);
    }, 5000);
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const imageRenderer = ({item}) => {
    return (
      <Image
        key={item.node.image.uri}
        source={{uri: item.node.image.uri}}
        style={styles.imageBox}
      />
    );
  };

  return (
    <View style={styles.HomeScreen}>
      {photos.length > 0 ? (
        <Animated.FlatList
          entering={SlideInUp.delay(600)}
          numColumns={3}
          data={photos}
          renderItem={imageRenderer}
          keyExtractor={item => item.node.image.uri}
        />
      ) : (
        <View>
          <InteractiveStatus
            isLoading={isLoading}
            permission={permission}
            getMockPhotos={getMockPhotos}
          />
        </View>
      )}
    </View>
  );
}
