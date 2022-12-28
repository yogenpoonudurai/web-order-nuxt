import { FirebaseOptions, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const useFirebase = () => {
  const config = useRuntimeConfig();
  const firebaseConfig: FirebaseOptions = {
    apiKey: config.public.firebaseApiKey,
    authDomain: config.public.firebaseAuthDomain,
    databaseURL: config.public.firebaseAuthDomain,
    projectId: config.public.firebaseProjectId,
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebaseApp);

  return {
    firebaseApp,
    firestore,
  };
};
