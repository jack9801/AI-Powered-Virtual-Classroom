import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = process.env.REACT_APP_FIREBASE_CONFIG;
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
