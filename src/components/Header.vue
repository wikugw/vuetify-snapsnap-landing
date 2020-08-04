<template>
  <v-container>
    <v-app-bar flat>
      <v-toolbar-title>SnapSnap!</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="hidden-xs-only">
        <v-btn text class="font-weight-bold" v-for="(item, index) in items" :key="index">
          <router-link class="white--text" :to="item.link">{{item.name}}</router-link>
        </v-btn>
      </div>
      <div class="text-center hidden-sm-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-app-bar-nav-icon v-bind="attrs" v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list dark>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>
                <router-link
                  class="white--text font-weight-bold text-uppercase"
                  :to="item.link">
                    {{item.name}}
                </router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "home",
          link: "/",
        },
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Contact",
          link: "/contact",
        },
      ],
    };
  },
};
</script>
