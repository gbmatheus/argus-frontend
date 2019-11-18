<template>
  <base-section
    id="usuarios"
  >
    <page-funcionario />
  </base-section>
</template>

<script>
  // Icons
  import {
    mdiAccountMultiple,
  } from '@mdi/js'

  export default {
    name: 'BackendUsuarios',

    components: {
      PageFuncionario: () => import('@/components/PageFuncionario'),
    },

    data: () => ({
      mdiAccountMultiple,
    }),
  }
</script>
