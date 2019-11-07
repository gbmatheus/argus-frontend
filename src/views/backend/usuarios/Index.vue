<template>
  <base-section
    id="usuarios"
    fill-height
  >
    <page-jumbotron
      :icon="mdiAccount"
      heading="Usuarios"
      view="src/views/backend/usuarios/Index.vue"
    />
  </base-section>
</template>

<script>
  // Icons
  import {
    mdiAccount,
  } from '@mdi/js'

  export default {
    name: 'BackendUsuarios',

    components: {
      PageJumbotron: () => import('@/components/PageJumbotron'),
    },

    data: () => ({
      mdiAccount,
    }),
  }
</script>
