<template>
  <base-section
    id="login"
    fill-height
  >

    <!-- <page-jumbotron
      :icon="mdiLogin"
      heading="Login Page"
      view="src/views/auth/login/Index.vue"
    /> -->

    <page-login
      heading="Argus Acad"
      :icon="mdiLogin"
    />

  </base-section>
</template>

<script>
  // Icons
  import {
    mdiLogin,
  } from '@mdi/js'

  export default {
    name: 'AuthLogin',

    components: {
      // PageJumbotron: () => import('@/components/PageJumbotron'),
      PageLogin: () => import('@/components/PageLogin'),
    },

    data: () => ({
      mdiLogin,
    }),
  }
</script>
