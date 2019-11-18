<template>
  <v-card>
    <v-card-title>Ali</v-card-title>
    <v-card-text>
      {{info}}
    </v-card-text>
  </v-card>
</template>

<script>
  // import api from '../../services/api'
  import Axios from 'axios'

  export default {
    name: 'BaseApi',
    data: () => ({
      info: null,

    }),
    mounted () {
      Axios.get('https://api.github.com/users/gbmatheus/repos')
        .then(response => {
          this.info = response.data
        })
    },
    // created () {
    //   let self = this
    //   api.get()
    //     .then(response => {
    //       self.info = response.data
    //     })
    // },

  }
</script>

<style>

</style>
