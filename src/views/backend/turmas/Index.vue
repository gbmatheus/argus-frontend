<template>
  <base-section
    id="turmas"
    fill-height
  >
    <page-jumbotron
      :icon="mdiGoogleClassroom"
      heading="Turmas"
      view="src/views/backend/turmas/Index.vue"
    />
  </base-section>
</template>

<script>
  // Icons
  import {
    mdiGoogleClassroom,
  } from '@mdi/js'

  export default {
    name: 'BackendTurmas',

    components: {
      PageJumbotron: () => import('@/components/PageJumbotron'),
    },

    data: () => ({
      mdiGoogleClassroom,
    }),
  }
</script>
