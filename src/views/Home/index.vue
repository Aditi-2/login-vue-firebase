<template>
    <div contextual-style="dark">
      <span slot="header">
        Home
      </span>
    </div>
</template>

<script>
export default {
  /**
   * The name of the page.
   */
  name: 'HomeIndex',
  data () {
    return {
      user: {
        email: ''
      }
    }
  }
}
</script>
