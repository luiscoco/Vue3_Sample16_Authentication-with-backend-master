<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label>Email</label>
      <input v-model="email" type="email" required />
      <label>Password</label>
      <input v-model="password" type="password" required />
      <button type="submit">Login</button>
    </form>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="user">
      <!-- <h2>Welcome, {{ user }}</h2> -->
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth();
const email = ref("");
const password = ref("");
const error = ref(null);
const user = ref(null);

onMounted(() => {
  onAuthStateChanged(auth, (loggedInUser) => {
    user.value = loggedInUser;
  });
});

const login = async () => {
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    if (response) {
      alert("Exito en el Login!");
    } else {
      alert("Login incorrecto");
    }
    console.log(user);
    error.value = null;
    email.value = "";
    password.value = "";
  } catch (err) {
    error.value = err.message;
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    error.value = null;
  } catch (err) {
    error.value = err.message;
  }
};
</script>
