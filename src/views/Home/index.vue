<template>
  <div contextual-style="dark">
    <b-row class="justify-content-md-center">
      <b-col cols="5" align-self="center">
        <b-card
          title="Hello"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 card-position"
        >
          <b-card-text>{{this.email}}, Please use the below button to logout.</b-card-text>
          <b-button href="#" variant="primary" @click="this.logout">Logout</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  /**
   * The name of the page.
   */
  name: 'HomeIndex',
  computed: {
    email () {
      return this.$store.getters.getEmail
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
<style>
.card-position {
  margin-top: 10%;
}
</style>
