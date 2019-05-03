<template>
  <b-container class="bv-example-row">
    <b-row class="justify-content-md-center">
      <b-col cols="5" align-self="center">
        <b-card class="text-center card-position" title="Login">
          <div class>
            <b-form @submit.prevent="login(user)">
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-envelope fa-fw"/>
                    </span>
                  </div>
                  <b-input
                    v-model="user.email"
                    type="email"
                    placeholder="Email"
                    class="form-control"
                    autocomplete="email"
                    :state="emailValidation"
                    required
                  ></b-input>
                  <b-form-invalid-feedback :state="emailValidation">Invalid email address</b-form-invalid-feedback>
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-lock fa-fw"/>
                    </span>
                  </div>
                  <b-input
                    v-model="user.password"
                    type="password"
                    placeholder="Password"
                    class="form-control"
                    autocomplete="password"
                    :state="passwordValidation"
                    required
                  ></b-input>
                  <b-form-invalid-feedback
                    :state="passwordValidation"
                  >Password should be of atleast 8 characters</b-form-invalid-feedback>
                </div>
              </div>
              <div class="form-group">
                <button
                  class="btn btn-primary"
                  :disabled="!emailValidation || !passwordValidation"
                >Login</button>
              </div>
            </b-form>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
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
      },
      userId: ''
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
    }
  },
  computed: {
    emailValidation () {
      const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      return re.test(String(this.user.email).toLowerCase())
    },
    passwordValidation () {
      return this.user.password.length > 8 && this.user.password.length < 250
    }
  }
}
</script>
<style>
.card-position {
  margin-top: 10%;
}
</style>
