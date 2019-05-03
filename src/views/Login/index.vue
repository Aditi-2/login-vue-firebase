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
                @change="validate"
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
                @change="validate"
                required
              >
            </div>
          </div>
          <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
              <ul>
                <li
                v-for="(error, index) in errors"
                v-bind:key="index"
                >
                {{ error }}
                </li>
              </ul>
          </p>
          <div class="form-group">
            <button class="btn btn-primary" :disabled="isPristine || errors.length > 0">
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
      errors: [],
      isPristine: true,
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
      this.$store.dispatch('login', user)
    },
    validateEmail (email) {
      const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      return re.test(String(email).toLowerCase())
    },
    validate () {
      this.errors = []
      this.isPristine = false

      if (!this.validateEmail(this.user.email)) {
        this.errors.push('Invalid email address')
      }

      if (this.user.password.length < 8) {
        this.errors.push('Password should be of atleast 8 characters')
      }
    }
  }
}
</script>
