import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthStore } from "~~/store/auth";

export default function () {
  const { $firebaseAuth } = useNuxtApp();
  const { setAuthenticated, user } = useAuthStore();
  async function loginWithEmail(email: string, password: string) {
    await signInWithEmailAndPassword($firebaseAuth, email, password)
      .then((userCredential) => {
        if (userCredential.user) {
          setAuthenticated(userCredential.user, true);
          user;
          return true;
        }
        return false;
      })
      .catch((err: Error) => {
        console.log(err);
        return err.message;
      });
  }

  return { loginWithEmail };
}
