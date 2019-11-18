<template>
  <base-section
    id="pedagogia"
    fill-height
  >
    <page-jumbotron
      :icon="mdiFileDocumentBox"
      heading="Pedagogia"
      view="src/views/backend/pedagogia/Index.vue"
    />
  </base-section>
</template>

<script>
  // Icons
  import {
    mdiFileDocumentBox,
  } from '@mdi/js'

  export default {
    name: 'BackendPedagogia',

    components: {
      PageJumbotron: () => import('@/components/PageJumbotron'),
    },

    data: () => ({
      mdiFileDocumentBox,
    }),
  }
</script>
