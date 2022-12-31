import {
  FirebaseOptions,
  initializeApp,
  getApps,
  FirebaseApp,
} from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

import "firebase/auth";
import { getAuth, Auth } from "firebase/auth";
import { useAuthStore } from "~~/store/auth";

export default defineNuxtPlugin((nuxtApp) => {
  console.log("firebase App created");
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
    console.log("firebase app initialized");
  }

  const firestore = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  auth.onAuthStateChanged((user) => {
    authStore.setAuthenticated(user?.uid ? true : false);
  });

  nuxtApp.provide("firebaseAuth", auth);
  nuxtApp.provide("firestore", firestore);
  nuxtApp.vueApp.provide("firebaseAuth", auth);
  nuxtApp.vueApp.provide("firebastore", firestore);
});
