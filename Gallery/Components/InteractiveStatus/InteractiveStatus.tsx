import React, {useEffect} from 'react';

import {View, Pressable, Text, ActivityIndicator} from 'react-native';
import styles from '../../assets/style/style';
import Icon from '../Icon/Icon.tsx';

export default function InteractiveStatus(props) {
  useEffect(() => {
    return () => {
      console.log('unmounting the interactive status');
    };
  }, []);

  const getMockPhotos = () => {
    props.getMockPhotos();
  };
  return (
    <View>
      <Icon />

      {!props.permission && (
        <View>
          {props.isLoading ? (
            <View style={styles.Loader}>
              <ActivityIndicator
                style={styles.Loader}
                size="large"
                color="#1aa1c0"
              />
            </View>
          ) : (
            <View>
              <Text style={styles.Alert}>
                Permissions were not granted to fetch your photos.
              </Text>
              <Pressable onPress={getMockPhotos} style={styles.MockButton}>
                <Text style={styles.MockButtonText}>Load Mock images</Text>
              </Pressable>
            </View>
          )}
        </View>
      )}
    </View>
  );
}
