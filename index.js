/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import firebase from '@react-native-firebase/app';
import {name as appName} from './app.json';

const firebaseConfig = {
  apiKey: "AIzaSyB67TKN65rfY8lxp5VOwFU_JBQPj7WzYhs",
  authDomain: "shining-rush-359106.firebaseapp.com",
  databaseURL: "https://shining-rush-359106.firebaseio.com",
  projectId: "shining-rush-359106",
  storageBucket: "shining-rush-359106.appspot.com",
  messagingSenderId: "432980855566",
  appId: "1:432980855566:android:ba1b3833650abf62f9255f"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

AppRegistry.registerComponent(appName, () => App);

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Received background message:', remoteMessage);

  
  PushNotification.localNotification({
    title: remoteMessage.notification.title,
    message: remoteMessage.notification.body,
  });
  });

  messaging()
  .requestPermission()
  .then(authStatus => {
    console.log('Permission status:', authStatus);
  })
  .catch(error => {
    console.error('Permission request error:', error);
  });
