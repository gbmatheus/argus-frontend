<template>
  <base-section
    id="alunos"
    fill-height
  >
    <page-jumbotron
      :icon="mdiSchool"
      heading="Alunos"
      view="src/views/backend/alunos/Index.vue"
    />
  </base-section>
</template>

<script>
  // Icons
  import {
    mdiSchool,
  } from '@mdi/js'

  export default {
    name: 'BackendAlunos',

    components: {
      PageJumbotron: () => import('@/components/PageJumbotron'),
    },

    data: () => ({
      mdiSchool,
    }),
  }
</script>
