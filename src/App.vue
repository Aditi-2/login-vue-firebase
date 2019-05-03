<template>
  <div id="app">
  <b-container fluid>
    <HeaderComponent/>
    <router-view/>
  </b-container>
  </div>
</template>
<script>
import HeaderComponent from '@/components/header'

export default {
  name: 'LoginFirebaseDemo',
  components: {
    HeaderComponent
  }
}
</script>
