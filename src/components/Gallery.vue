<template>
  <v-container>
    <h2 class="text-center white--text py-2">Gallery</h2>
    <v-row>
      <v-col v-for="(item, index) in items" :key="index" class="d-flex child-flex" cols="12" sm="4">
        <v-card flat tile class="d-flex">
          <v-img
            :src="item.src"
            aspect-ratio="1"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
       items: [
        {
          src:
            "https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        },
        {
          src:
            "https://images.unsplash.com/photo-1448932284983-0c7b152eba33?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        },
        {
          src:
            "https://images.unsplash.com/photo-1531347058246-6dfef49b7b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
        },
        {
          src:
            "https://images.unsplash.com/photo-1495462911434-be47104d70fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80",
        },
        {
          src:
            "https://images.unsplash.com/photo-1447688812233-3dbfff862778?ixlib=rb-1.2.1&auto=format&fit=crop&w=1537&q=80",
        },
        {
          src:
            "https://images.unsplash.com/photo-1568633782872-67d29d4615d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
        },
      ]
    }
  }
};
</script>

<style scoped>
h2 {
  font-size: 30px;
  border-bottom: 1px solid;
  border-color: white;
  font-family: Montserrat;
  font-weight: bold;
}
</style>