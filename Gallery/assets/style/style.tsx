import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageBox: {
    width: '33%',
    height: 80,
    borderWidth: 1,
    borderColor: 'black',
  },
  HomeScreen: {
    justifyContent: 'center',
    textAlign: 'center',
    flex: 1,
  },
  HomeScreenIcon: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  Alert: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 25,
    fontSize: 15,
  },
  MockButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#1aa1c0',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
  },
  MockButtonText: {
    color: 'white',
  },
  Loader: {
    marginTop: 30,
  },
});
