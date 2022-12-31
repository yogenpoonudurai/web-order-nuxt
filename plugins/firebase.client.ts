import {
  FirebaseApp,
  FirebaseOptions,
  getApps,
  initializeApp,
} from "firebase/app";
import { getFirestore } from "firebase/firestore";

import "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthStore } from "~~/store/auth";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const authStore = useAuthStore();

  const firebaseConfig: FirebaseOptions = {
    apiKey: config.public.firebaseApiKey,
    authDomain: config.public.firebaseAuthDomain,
    databaseURL: config.public.firebaseAuthDomain,
    projectId: config.public.firebaseProjectId,
  };
  let firebaseApp: FirebaseApp = getApps()[0];

  if (!firebaseApp) {
    firebaseApp = initializeApp(firebaseConfig);
  }

  const firestore = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  onAuthStateChanged(auth, (user) => {
    authStore.setAuthenticated({
      user,
      isAuthenticated: user?.uid ? true : false,
    });
  });

  nuxtApp.provide("firebaseAuth", auth);
  nuxtApp.provide("firestore", firestore);
  nuxtApp.vueApp.provide("firebaseAuth", auth);
  nuxtApp.vueApp.provide("firebastore", firestore);
});
