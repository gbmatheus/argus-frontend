<template>
  <base-section
    id="disciplinas"
    fill-height
  >
    <page-jumbotron
      :icon="mdiBookOpenPageVariant"
      heading="Disciplinas"
      view="src/views/backend/disciplinas/Index.vue"
    />
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
      PageJumbotron: () => import('@/components/PageJumbotron'),
    },

    data: () => ({
      mdiBookOpenPageVariant,
    }),
  }
</script>
