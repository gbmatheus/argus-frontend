<template>
  <base-section
    id="alunos"
    fill-height
  >
    <page-jumbotron
      :icon="mdiFileDocumentBoxMultiple"
      heading="Alunos"
      view="src/views/backend/curriculos/Index.vue"
    />
  </base-section>
</template>

<script>
  // Icons
  import {
    mdiFileDocumentBoxMultiple,
  } from '@mdi/js'

  export default {
    name: 'BackendCurriculos',

    components: {
      PageJumbotron: () => import('@/components/PageJumbotron'),
    },

    data: () => ({
      mdiFileDocumentBoxMultiple,
    }),
  }
</script>
