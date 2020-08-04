<template>
  <div>
    <v-carousel hide-delimiters cycle>
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">{{item.title}}</div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      items: [
        {
          src:
            "https://images.unsplash.com/photo-1506370612293-360919ece3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80",
          title: "chiss",
        },
        {
          src:
            "https://images.unsplash.com/photo-1576451973800-5c755f2b64f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          title: "senyumm",
        },
        {
          src:
            "https://images.unsplash.com/photo-1569222646742-ed39b7cbb072?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          title: "yak sekali lagi",
        },
        {
          src:
            "https://images.unsplash.com/photo-1548612345-dc3283776bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80",
          title: "gaya bebas",
        },
      ],
    };
  },
};
</script>

<style scoped>
.display-3 {
  font-family: Montserrat !important;
}
@media only screen and (max-width: 599px) {
  .display-3 {
    font-size: 25px!important;
    font-weight: bold;
  }
}
</style>