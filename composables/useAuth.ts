import { FirebaseError } from "firebase/app";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useAuthStore } from "~~/store/auth";
import getAuthErrorMessage from "~~/utils/firebaseAuthCode";

export default function () {
  const { $firebaseAuth } = useNuxtApp();
  const { setAuthenticated, user } = useAuthStore();
  async function login(email: string, password: string) {
    return await signInWithEmailAndPassword($firebaseAuth, email, password)
      .then((userCredential) => {
        if (userCredential.user) {
          setAuthenticated({
            user: userCredential.user,
            isAuthenticated: true,
          });
          return user;
        }
        return false;
      })
      .catch((error: FirebaseError) => {
        const errorCode = error.code;
        return getAuthErrorMessage(errorCode);
      });
  }

  async function register(email: string, password: string) {
    return await createUserWithEmailAndPassword($firebaseAuth, email, password)
      .then((user) => {
        if (user.user) {
          return user;
        }
        return false;
      })
      .catch((error: FirebaseError) => {
        return getAuthErrorMessage(error.code);
      });
  }

  async function logout() {
    console.log("siging out");
    return await signOut($firebaseAuth)
      .then((data) => {
        setAuthenticated({
          user: null,
          isAuthenticated: false,
        });
        navigateTo("/");
      })
      .catch((error: FirebaseError) => {
        return getAuthErrorMessage(error.code);
      });
  }

  async function resetPassword(email: string) {
    return await sendPasswordResetEmail($firebaseAuth, email)
      .then((data) => {
        console.log("firebase data", data);
        return data;
      })
      .catch((error: FirebaseError) => {
        console.log("error", error.code);
        return getAuthErrorMessage(error.code);
      });
  }

  return { login, register, logout, resetPassword };
}
