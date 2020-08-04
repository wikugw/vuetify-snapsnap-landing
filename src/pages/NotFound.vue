<template>
  <v-container class="notfound">
    <h2 class="text-center white--text py-auto">Page Not Found :(</h2>
    <h2 class="text-center white--text py-auto">
      Take me to
      <router-link class="grey--text font-weight-bolder" to="/">
        Home
      </router-link>
      Instead
    </h2>
  </v-container>
</template>
<script>
export default {

}
</script>
<style scoped>
h2 {
  font-size: 30px;
  font-family: Montserrat;
  font-weight: bold;
  top: 50%
}
</style>