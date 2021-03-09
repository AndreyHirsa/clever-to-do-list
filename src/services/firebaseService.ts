import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';
import { IUserData } from '../interfaces/IUserData';

const firebaseConfig = {
  apiKey: 'AIzaSyAKzGl_3aoBIQP2R-apxxC5IMiZGXZyc6g',
  authDomain: 'clever-todo-67f73.firebaseapp.com',
  databaseURL: 'https://clever-todo-67f73-default-rtdb.firebaseio.com',
  projectId: 'clever-todo-67f73',
  storageBucket: 'clever-todo-67f73.appspot.com',
  messagingSenderId: '161805012135',
  appId: '1:161805012135:web:0b02d34bbeac8bfe531f82',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseService: any = {

  saveTasksDataService(userData: IUserData) {
    try {
      return firebase
        .database()
        .ref()
        .child(`${userData.userId}`)
        .child(`${userData.year}`)
        .child(`${userData.month}`)
        .child(`${userData.day}`)
        .child(`${userData.taskId}`)
        .set({ value: userData.value, done: false, id: userData.taskId });
    } catch (error) {
      return console.log(error.message);
    }
  },
};

export const rsf = new ReduxSagaFirebase(firebaseApp);
