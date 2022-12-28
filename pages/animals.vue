<template>
  <div>
    <h1>Data</h1>
    <div>{{ data }}</div>
    <button @click="updateAnimal" class="btn btn-primary mt-10">
      Update Dog
    </button>
  </div>
</template>

<script setup lang="ts">
import { doc, onSnapshot, updateDoc } from "firebase/firestore";

// Server side
const { data } = useFetch("/api/animal");

const config = useRuntimeConfig();

//Client side
onMounted(async () => {
  const { firestore } = useFirebase();
  const docRef = doc(firestore, "animals", "dog");
  onSnapshot(docRef, (snap) => {
    data.value = snap.data()!;
  });
});

const updateAnimal = async () => {
  console.log("triggered");
  const { firestore } = useFirebase();
  const docRef = doc(firestore, "animals", "dog");
  await updateDoc(docRef, {
    name: `dog-${Math.floor(Math.random() * 1000)}`,
  });
};
</script>
