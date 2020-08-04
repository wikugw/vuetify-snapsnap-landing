<template>
  <div class="block latestPostBlock">
    <v-container>
      <h2 class="text-center white--text py-2">Latest Post</h2>
      <v-row>
        <v-col cols="12" sm="4" v-for="item in items" :key="item.id">
          <v-card raised class="mx-auto black lighten-5 text-center">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="item.src"
            >
              <v-card-title>{{item.title}}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">{{item.subtitle}}</v-card-subtitle>

            <v-card-text class="text--primary">
              <div class="white--text">{{item.description}}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" class="font-weight-bold" text>More</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          id: 1,
          title: "Top western road trips",
          subtitle: "1,000 miles of wonder",
          description: "His ubique laboramus ne. Expetenda assueverit sed ad. Id nec malis lucilius delicatissimi. Nec assum sonet suscipit ex, diam deterruisset ut usu, ad dicat fabellas aliquando eam.",
          src: "https://images.unsplash.com/photo-1517784934423-5f0abb1e1bd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1390&q=80"
        },
        {
          id: 2,
          title: "Christmas tales to read",
          subtitle: "2,000 miles of wonder",
          description: "Sea ad habemus assueverit, omnes platonem convenire sit et, at integre pericula quo. Facete adolescens definitionem cu qui, in putant aliquid fierent ius.",
          src: "https://images.unsplash.com/photo-1576616266663-c5bf0c305867?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
        },
        {
          id: 3,
          title: "20 movies not to miss in 2020",
          subtitle: "3,000 miles of wonder",
          description: "Aliquam albucius mei ei, debitis torquatos et pro, eos natum scribentur no. Putant verear constituto te qui. Adolescens persequeris vim ei. Vel nullam reprimique te.",
          src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80"
        }
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
.block {
  border: black;
}
</style>