import {PermissionsAndroid, Platform} from 'react-native';

export const hasAndroidPermission = async () => {
  const permission =
    Platform.Version >= 33
      ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
      : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

  const hasPermssion = await PermissionsAndroid.check(permission).catch(
    error => {
      console.log('Something went wrong');
      console.log(error);
    },
  );
  console.log('permission:', hasPermssion);
  if (hasPermssion) {
    return true;
  }
  console.log('status before ask', status);
  const status = await PermissionsAndroid.request(permission).catch(() => {
    return false;
  });
  console.log('status', status);
  return status === 'granted';
};
