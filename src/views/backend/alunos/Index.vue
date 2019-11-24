<template>
  <base-section
    id="aluno"
  >
    <page-aluno />
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
      PageAluno: () => import('@/components/PageAluno'),
    },

    data: () => ({
      mdiSchool,
    }),
  }
</script>
