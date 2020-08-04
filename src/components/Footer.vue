<template>
  <!-- <v-row justify="center"> -->
    <v-footer dark padless>
      <v-card width="100%" flat class="black white--text text-center">
        <v-card-text class="pb-0">
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon :href="icon.link" target="_blank">
            <v-icon size="24px">{{ icon.name }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0"></v-card-text>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>SNAPSNAP!</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  <!-- </v-row> -->
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          name: 'mdi-facebook',
          link: ''
        },
        {
          name: 'mdi-twitter',
          link: ''
        },
        {
          name: 'mdi-linkedin',
          link: 'https://www.linkedin.com/in/wiku-galindra-912718153/'
        },
        {
          name: 'mdi-instagram',
          link: ''
        },
      ]
    };
  },
};
</script>
<style scoped>
</style>