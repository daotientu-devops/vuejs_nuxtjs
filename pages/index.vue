<template>
  <section class="container">
    <h1>{{title}}</h1>
    <div>
      <h2>
        Write to Firestore
      </h2>
      <label>
        <input type="text" v-model="text"/>
      </label><br/>
      <button @click="writeToFirestore">
        <span>Write now</span>
      </button>
    </div>
    <div>
      <h2>
        Read from Firestore
      </h2>
      <div>
        <button @click="readFromFirestore">
          <span>
            Read now
          </span>
        </button>
      </div>
    </div>
    <div>
      <app-logo/>
      <h1 class="title">
        nuxtjs
      </h1>
      <h2 class="subtitle">
        nuxt.js
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  import {db} from '~/plugins/firebase.js'
  import {doc, setDoc, getDoc} from 'firebase/firestore'

  export default {
    data() {
      return {
        text: '',
        title: ''
      }
    },
    async fetch() {
      const ref = doc(db, "testCollection", "testDoc");
      try {
        const document = await getDoc(ref);
        this.title = document.data().text;
      } catch (e) {
        console.error(e);
      }
    },
    components: {
      AppLogo
    },
    methods: {
      async writeToFirestore() {
        const ref = doc(db, "testCollection", "testDoc");
        const document = {
          text: this.text
        };
        try {
          await setDoc(ref, document);
          //alert("Success!");
          this.text = '';
          this.readFromFirestore()
        } catch (e) {
          console.error(e);
          alert("Error!");
        }
      },
      async readFromFirestore() {
        const ref = doc(db, "testCollection", "testDoc");
        try {
          const document = await getDoc(ref);
          this.title = document.data().text;
        } catch (e) {
          console.error(e);
          alert("Error!");
        }
      }
    }
  }
</script>

<style>
  .container {
    min-height: 100vh;
    display: block;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

  input[type="text"], button {
    border: 1px solid #ccc;
  }
</style>

