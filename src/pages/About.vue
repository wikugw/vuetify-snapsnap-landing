<template>
  <div>
    <v-img
      height="300px"
      src="https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    >
      <v-row align="end" class="lightbox white--text pa-2 fill-height">
        <v-col>
          <v-container>
            <div class="h1 black--text font-weight-bold">About Us</div>
          </v-container>
        </v-col>
      </v-row>
    </v-img>

    <div>
      <v-container>
        <p class="white--text text-center py-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit dignissimos vel dicta excepturi
          soluta aliquid in dolor maiores optio autem, aspernatur cupiditate! Ad fugiat non tenetur fuga
          maxime quibusdam ipsam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, omnis
          nulla quidem ut id eveniet nobis ab nisi a ea. Aspernatur, voluptates doloribus. Voluptatum
          praesentium error, nisi id obcaecati laboriosam omnis animi officia! Perspiciatis dicta voluptatem
          et sapiente impedit quis. Quia explicabo distinctio voluptates, quae adipisci similique autem ad ipsa.
        </p>
      </v-container>
    </div>

    <div class="block latestPostBlock">
      <v-container>
        <h2 class="text-center white--text py-2">Our Team</h2>
        <v-row class="team">
          <v-col cols="12" sm="4" v-for="item in items" :key="item.id">
            <v-card class="mx-auto" raised>
              <v-img class="white--text" height="300px" :src="item.src"></v-img>
              <v-card-text class="white--text black text-center">
                <div class="title">{{item.name}}</div>
                <div>{{item.title}}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          src:
            "https://images.unsplash.com/photo-1569864182602-23851848b287?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
          name: "Peter Smith",
          title: "Director",
        },
        {
          id: 2,
          src:
            "https://images.unsplash.com/photo-1591850356360-067508ab570b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          name: "Roy Perry",
          title: "Photographer",
        },
        {
          id: 3,
          src:
            "https://images.unsplash.com/photo-1570150766593-fcda96114fd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          name: "Reiner White",
          title: "Freelancer",
        },
      ],
    };
  },
};
</script>

<style scoped>
.h1 {
  font-size: 30px;
}
p {
  font-size: 16px;
}
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