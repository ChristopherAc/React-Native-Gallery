/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, Platform} from 'react-native';

import styles from './assets/style/style';
import {hasAndroidPermission} from './utils/permissions.tsx';
import Album from './Components/Album/Album.tsx';

// async function savePicture() {
//   if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
//     return;
//   }

//   CameraRoll.save(tag, {type, album});
// }

function App(): any {
  return (
    <View style={styles.app}>
      <Album />
    </View>
  );
}
export default App;
