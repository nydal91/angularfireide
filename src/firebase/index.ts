import { AngularFireModule, AuthMethods } from 'angularfire2';


const firebaseConfig = {
  apiKey: "AIzaSyCe27j_VfR9MqrKNOzFJrPfNb2FFidNntk",
    authDomain: "eikefjordbygg.firebaseapp.com",
    databaseURL: "https://eikefjordbygg.firebaseio.com",
    storageBucket: "eikefjordbygg.appspot.com"
};

const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};


export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
