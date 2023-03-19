import React, {useEffect} from 'react';
import styles from '../../assets/style/style';

import Animated, {Keyframe} from 'react-native-reanimated';

export default function Icon() {
  useEffect(() => {}, []);

  const keyframe = new Keyframe({
    0: {
      transform: [{scale: 1}],
    },
    10: {
      transform: [{scale: 0.75}],
    },
    20: {
      transform: [{scale: 1}],
    },
    100: {
      transform: [{scale: 5}],
    },
  });

  return (
    <Animated.Image
      exiting={keyframe.duration(500)}
      source={require('../../assets/images/image-gallery.png')}
      style={styles.HomeScreenIcon}
    />
  );
}
