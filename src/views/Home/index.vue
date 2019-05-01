<template>
  <div contextual-style="dark">
    <span slot="header">Hello, {{ this.email }}</span>
    <button class="btn btn-outline-primary" @click="this.logout">Logout</button>
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
