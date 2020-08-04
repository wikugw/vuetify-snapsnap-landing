<template>
  <v-app>
    <v-app-bar
      app
      dark
      flat
    >
      <Header/>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
      <Footer/>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'


export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>

<style>
  .v-application--wrap {
    background-color: black;
  }
</style>
