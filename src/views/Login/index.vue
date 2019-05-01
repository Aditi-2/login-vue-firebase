<template>
    <div contextual-style="dark">
      <span slot="header">
        Login
      </span>
      <div slot="body">
        <form @submit.prevent="login(user)">
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-envelope fa-fw"/>
                </span>
              </div>
              <input
                v-model="user.email"
                type="email"
                placeholder="Email"
                class="form-control"
                autocomplete="email"
                required
              >
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-lock fa-fw"/>
                </span>
              </div>
              <input
                v-model="user.password"
                type="password"
                placeholder="Password"
                class="form-control"
                autocomplete="password"
                required
              >
            </div>
          </div>
          <div class="form-group">
            <button class="btn btn-outline-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  /**
   * The name of the page.
   */
  name: 'LoginIndex',

  /**
   * The data that can be used by the page.
   *
   * @returns {Object} The view-model data.
   */
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },

  /**
   * The methods the page can use.
   */
  methods: {
    /**
     * Will log the user in.
     *
     * @param {Object} user The user to be logged in.
     */
    login (user) {
      console.log(user)
      this.$store.dispatch('login', user)
    }
  }
}
</script>
