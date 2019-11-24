<template>
  <base-section
    id="alunos"
  >
    <page-curriculo />
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
      PageCurriculo: () => import('@/components/PageCurriculo'),
    },

    data: () => ({
      mdiFileDocumentBoxMultiple,
    }),
  }
</script>
