import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
// const firebaseConfig = {
//   apiKey: "AIzaSyCZrT16HJs-3JrbbcSePf-e-EIpehkEPpg",
//   authDomain: "rural-classroom.firebaseapp.com",
//   projectId: "rural-classroom",
//   storageBucket: "rural-classroom.appspot.com",
//   messagingSenderId: "916425430497",
//   appId: "1:916425430497:web:ba178206cb6a0f12402ea0",
//   measurementId: "G-XZSY6TT3GT",
// };
const firebaseConfig = {
  apiKey: "AIzaSyDRbL5v09xA92jeEQOpLa_kDfH6Y8Bx5k0",
  authDomain: "class-54ed8.firebaseapp.com",
  projectId: "class-54ed8",
  storageBucket: "class-54ed8.firebasestorage.app",
  messagingSenderId: "984103569491",
  appId: "1:984103569491:web:f0a0d69bda069b14069ea6",
  measurementId: "G-27NMGEZ1G2"
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const storage = firebase.storage();

// Function to upload picture and get URL
export const uploadPicture = async (file, type) => {
  const storageRef = storage.ref();
  const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
  const fileName = `${uniqueSuffix}-${file.name}`;
  const fileRef = storageRef.child(`${type}/${fileName}`);
  // i want view url of the file
  await fileRef.put(file);
  const url = await fileRef.getDownloadURL();
  return url;
};

export const uploadFile = async (file, type) => {
  const storageRef = storage.ref();
  const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
  const fileName = `${uniqueSuffix}-${file.name}`;
  const fileRef = storageRef.child(`${type}/${fileName}`);
  await fileRef.put(file);
  const url = await fileRef.getDownloadURL();
  return url;
};
