<template>
  <base-section
    id="turmas"
  >
    <page-turma />
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
      PageTurma: () => import('@/components/PageTurma'),
    },

    data: () => ({
      mdiGoogleClassroom,
    }),
  }
</script>
