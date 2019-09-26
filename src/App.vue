<template>
  <v-app light>
    <v-toolbar fixed color="teal lighten-2" app dark :clipped-left="true">      
      <v-toolbar-title>NFT APP</v-toolbar-title>
      <v-spacer></v-spacer>

      <div class="nav">
        <a href="/">Home</a>
        <a href="/wallet">Wallet</a>
        <a href="/upload">Upload</a>
      </div>
    </v-toolbar>
    <v-content class="contentWrapper">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import 'vuetify/dist/vuetify.min.css'

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
