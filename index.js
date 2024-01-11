/**
 * @format
 */

import {AppRegistry, PermissionsAndroid} from 'react-native';
import App from './src/App';
import {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import firebase from '@react-native-firebase/app';
import {name as appName} from './app.json';
import notifee, { EventType, AndroidImportance } from '@notifee/react-native';

const firebaseConfig = {
  apiKey: "AIzaSyB67TKN65rfY8lxp5VOwFU_JBQPj7WzYhs",
  authDomain: "shining-rush-359106.firebaseapp.com",
  databaseURL: "https://shining-rush-359106.firebaseio.com",
  projectId: "shining-rush-359106",
  storageBucket: "shining-rush-359106.appspot.com",
  messagingSenderId: "432980855566",
  appId: "1:432980855566:android:ba1b3833650abf62f9255f"
};



// Background Message Handler


// Main App Component
const MainApp = () => {
  useEffect( () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    const requestPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
            {
              title: 'Ability to show notifications',
              message:
                'GU App needs access to your notifications ',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Notification permission granted");
        } else {
          console.log("Notification permission denied");
        }
        console.log('Permission status:', granted);

      } catch (error) {
        console.error('Some error:', error);
      }
    };
    const setNotificationsHandler=async ()=>{
      console.log('notifications handler was called')
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log('Your Firebase Token is:', fcmToken);
      } else {
        console.log('Failed to get the token');
      }
      if (Platform.OS === 'android') {
        const channelId = await notifee.createChannel({
          id: 'default',
          name: 'Default Channel',
        });
        console.log('Created channel with id:', channelId);
      }
      notifee.onBackgroundEvent(async ({ type, detail }) => {
        switch (type) {
          case EventType.DISMISSED:
            console.log('User dismissed notification', detail.notification);
            break;
          case EventType.PRESS:
            console.log('User pressed notification', detail.notification);
            break;
          // Add other event types if needed
        }
      });
      messaging().setBackgroundMessageHandler(async remoteMessage => {
        console.log('Received background message:', remoteMessage);
      
        await notifee.displayNotification({
          title: remoteMessage.notification.title,
          body: remoteMessage.notification.body,
          android: {
            channelId: 'default',
            importance: AndroidImportance.HIGH
          },
        });
        console.log('smth after the notifee')
      });
      messaging().onMessage(async remoteMessage => {
        console.log('Received in foreground:', remoteMessage);
        await notifee.displayNotification({
          title: remoteMessage.notification.title,
          body: remoteMessage.notification.body,
          android: {
            channelId: 'default', // ensure this channel is created
          },
        });
      });
    }

    requestPermission();
    setNotificationsHandler();
  }, []);

  return <App />;
};

AppRegistry.registerComponent(appName, () => MainApp);