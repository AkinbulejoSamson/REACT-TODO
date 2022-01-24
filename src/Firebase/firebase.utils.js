import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import { getAuth } from "firebase/auth"
// import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCWIHpZCTZuoyDUsLUeX6MYWYmW_IfZYI0",
  authDomain: "react-todo-7976e.firebaseapp.com",
  projectId: "react-todo-7976e",
  storageBucket: "react-todo-7976e.appspot.com",
  messagingSenderId: "271114895181",
  appId: "1:271114895181:web:19867a2de86937cf718104",
  measurementId: "G-PN5CGL40P9",
};

export const createUserProfileDocument = async (userAuth) => {
	if (!userAuth) return

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		console.log(displayName);

		try {
			await userRef.set({
				displayName: displayName,
				email,
				createdAt,
			})
		} catch (error) {
			console.log("error creating user", error.message)
		}
	}

	console.log(userRef)
	return userRef
}

const Firebase = firebase.initializeApp(firebaseConfig);

// const auth = getAuth(app)
export const firestore = firebase.firestore(Firebase);
export const auth = getAuth(Firebase);

export default Firebase;