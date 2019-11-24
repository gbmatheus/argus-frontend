<template>
  <base-section
    id="disciplinas"
  >
    <page-disciplina />
  </base-section>
</template>

<script>
  // Icons
  import {
    mdiBookOpenPageVariant,
  } from '@mdi/js'

  export default {
    name: 'BackendDisciplinas',

    components: {
      PageDisciplina: () => import('@/components/PageDisciplina'),
    },

    data: () => ({
      mdiBookOpenPageVariant,
    }),
  }
</script>
