import { createContext, useContext, useState, useEffect } from "react"
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
	updateProfile
} from "firebase/auth"
import { auth } from "../Firebase/firebase.utils"
import {
	firestore,
	createUserProfileDocument,
} from "../Firebase/firebase.utils"

const userAuthContext = createContext()

export function UserAuthContextProvider({ children }) {
	const [ user, setUser ] = useState("");

	async function signUp(userAuth) {
		const { email, password, displayName } = userAuth
		console.log(userAuth)
		try {
			await createUserWithEmailAndPassword(auth, email, password).catch((error) => console.log(error));
			await updateProfile(auth.currentUser, { displayName: displayName }).catch((error) => console.log(error));
			await createUserProfileDocument(auth.currentUser)
		} catch(err) {
			console.log(err);
		}
		

		// await createUserWithEmailAndPassword(auth, email, password).then(
		// 	async (cred) => {
		// 		await createUserProfileDocument(userAuth, displayName)
		// 	}
	}

	function signIn(userAuth) {
		const { email, password } = userAuth
		return signInWithEmailAndPassword(auth, email, password)
	}

	function logOut() {
		return signOut(auth)
	}

	async function googleSignIn() {
		const googleAuthProvider = new GoogleAuthProvider()
		googleAuthProvider.setCustomParameters({ prompt: "select_account" })
		return await signInWithPopup(auth, googleAuthProvider)
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth,async (currentUser) => {
			setUser(currentUser)
			await createUserProfileDocument(currentUser)
		})
		return () => {
			unsubscribe()
		}
	}, [])

	return (
		<userAuthContext.Provider
			value={{ user, signUp, signIn, logOut, googleSignIn }}
		>
			{children}
		</userAuthContext.Provider>
	)
}

export function useUserAuth() {
	return useContext(userAuthContext)
}
