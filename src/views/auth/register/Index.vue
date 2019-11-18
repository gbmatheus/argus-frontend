<template>
  <base-section
    id="register"
    fill-height
  >
    <page-cadastro
      heading="Register Page"
    />
  </base-section>
</template>

<script>
  // Icons
  import {
    mdiAccountPlus,
  } from '@mdi/js'

  export default {
    name: 'AuthRegister',

    components: {
      PageCadastro: () => import('@/components/PageCadastro'),

    },

    data: () => ({
      mdiAccountPlus,
    }),
  }
</script>
