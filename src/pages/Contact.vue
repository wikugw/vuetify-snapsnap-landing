<template>
  <div>
    <v-img
      height="300px"
      src="https://images.unsplash.com/photo-1552254332-c4ce6734d9f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"
    >
      <v-row align="end" class="lightbox white--text pa-2 fill-height">
        <v-col>
          <v-container>
            <div class="h1 black--text font-weight-bold">Reach Us</div>
          </v-container>
        </v-col>
      </v-row>
    </v-img>

    <v-container>
      <h2 class="text-center white--text py-2">Message Us</h2>
      <v-row justify="center">
        <v-col cols="8">
          <v-card dark>
            <v-form ref="form" dark class="pa-5" v-model="valid" lazy-validation>
              <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

              <v-textarea
                v-model="message"
                :rules="messageRules"
                name="input-7-1"
                label="Message"
              ></v-textarea>

              <v-row class="mt-2" justify="center">
                <v-btn text :disabled="!valid" color="success" class="mr-4 font-weight-bold" @click="validate">Submit</v-btn>
                <v-btn text color="error" class="mr-4 font-weight-bold" @click="reset">Reset</v-btn>
              </v-row>
            </v-form>
          </v-card>
        </v-col>
      </v-row>

      <h2 class="text-center white--text py-2">Our Place</h2>
      <v-row class="mt-2 mx-1" justify="center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.1215917379996!2d112.53097251437764!3d-7.882344980580027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7880d6e36b6d61%3A0x729d5db81e24b1d4!2sBatu%20Terminal!5e0!3m2!1sen!2sid!4v1596541343106!5m2!1sen!2sid"
          width="1000" height="450" frameborder="30px"
          style="border-radius: 10px;" allowfullscreen="" aria-hidden="false" tabindex="0">
        </iframe>
      </v-row>

    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      message: "",
      messageRules: [
        (v) => !!v || "Message is required"
      ],
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    }
  },
};
</script>

<style scoped>
.h1 {
  font-size: 30px;
}
h2 {
  font-size: 30px;
  border-bottom: 1px solid;
  border-color: white;
  font-family: Montserrat;
  font-weight: bold;
}
</style>